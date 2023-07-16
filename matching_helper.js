// List of images
const images = [
  'img/img01.png',
  'img/img02.png',
  'img/img03.png',
  'img/img04.png',
  'img/img05.png',
  'img/img06.png',
  'img/img07.png',
  'img/img08.png',
  'img/img09.png'
];

// Container for the cards
const game = document.getElementById('game');

// Create 18 cards
for (let i = 0; i < 18; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  game.appendChild(card);

  // Create 9 miniCards for each card
  for (let j = 0; j < 9; j++) {
    const miniCard = document.createElement('div');
    miniCard.classList.add('miniCard');
    miniCard.style.backgroundImage = `url('${images[j]}')`;
    card.appendChild(miniCard);
  }
}

// When a miniCard is clicked
document.querySelectorAll('.miniCard').forEach((miniCard) => {
  miniCard.addEventListener('click', (event) => {
    // If the miniCard is already selected, deselect it
    if (miniCard.classList.contains('fullSize')) {
      miniCard.classList.remove('fullSize');
    } else {
      // Otherwise, select it
      miniCard.classList.add('fullSize');
    }

    // Stop propagation to prevent the card's click event from firing
    event.stopPropagation();
  });
});

// Clear button
document.getElementById('clear').addEventListener('click', () => {
  document.querySelectorAll('.miniCard').forEach((miniCard) => {
    // Remove the fullSize class to shrink the miniCard
    miniCard.classList.remove('fullSize');
  });
});

// When the window is resized
window.addEventListener('resize', () => {
  const gameWrapper = document.getElementById('gameWrapper');
  const game = document.getElementById('game');

  // Calculate the scale factors for width and height
  const scaleX = 0.9 * gameWrapper.offsetWidth / game.offsetWidth;
  const scaleY = 0.9 * gameWrapper.offsetHeight / game.offsetHeight;

  // Use the smaller scale factor to maintain aspect ratio
  const scale = Math.min(scaleX, scaleY);

  // Apply the scale transformation
  game.style.transform = `scale(${scale})`;
});

// Trigger the resize event to set the initial scale
window.dispatchEvent(new Event('resize'));