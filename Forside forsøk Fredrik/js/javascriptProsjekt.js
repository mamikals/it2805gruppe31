/*For top-bilde*/
const bilde1 = document.getElementById('bilde1');
bilde1.src = "img/slider0.jpg";

function slide() {
  bilde1.src = '';
}

setInterval(slide, 5000);

/*For fuglen som flyr avgårde*/
const bird = document.getElementById('bird');
bird.src = 'img/birdUp.jpg';

var count = 0;
var moveX = 84;
var moveY = 0;

bird.addEventListener('mouseover', moveBird);

function moveBird() {
  count++

  if (count % 2 != 0) {
    bird.src = 'img/birdDown.jpg';
  }
  else {
    bird.src = 'img/birdUp.jpg';
  }

  moveX += 1;
  moveY += count;

  strX = moveX.toString() + '%';
  strY = moveY.toString() + 'px';

  bird.style.left = strX;
  bird.style.bottom = strY;

  if (count == 50) {
    bird.style.display = 'none';
    alert('Den sjeldene fuglen fløy avgårde.\nFikk du tatt et bilde?');
  }
}
