let character = document.getElementById('character');
let block = document.getElementById('block');
let scoreDisplay = document.getElementById('score');
let score = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    character.classList.add('animate');
    setTimeout(() => {
      character.classList.remove('animate');
    }, 500);
  }
});

const interval = setInterval(() => {
  score += 1;
  scoreDisplay.innerText = `Score: ${score}`;
}, 1000);

let checkDead = setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top')
  );

  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  );
  console.log(characterTop, blockLeft);
  if (blockLeft > -190 && blockLeft < -170 && characterTop >= 240) {
    clearInterval(interval);
    clearInterval(checkDead);
    block.style.animation = 'none';

    sessionStorage.setItem('userScore', score);

    location.href = 'game_over.html';
  }
}, 10);
