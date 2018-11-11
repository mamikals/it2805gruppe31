/*For slideshow*/
const slideShow = document.getElementById('slideShow');
slideShow.src = "img/coverphoto_1.jpg";
var count1 = 0;
var slideList = ["img/coverphoto_1.jpg", "img/coverphoto_2.jpg", "img/coverphoto_3.jpg", "img/coverphoto_4.jpg"];

function slideFunc() {
  count1 += 1;

  slideShow.src = slideList[count1]

  if (count1 == 3) {
    count1 = -1;
  }
}

setInterval(slideFunc, 8000);

/*For fuglen som flyr avgårde*/
const bird = document.getElementById('birdFlyAway');
bird.src = 'img/birdUp.jpg';

var count2 = 0;
var moveX = 84;
var moveY = 0;

bird.addEventListener('mouseover', moveBird);

function moveBird() {
  count2 += 1

  if (count2 % 2 != 0) {
    bird.src = 'img/birdDown.jpg';
  }
  else {
    bird.src = 'img/birdUp.jpg';
  }

  moveX += 1;
  moveY += count2;

  strX = moveX.toString() + '%';
  strY = moveY.toString() + 'px';

  bird.style.left = strX;
  bird.style.bottom = strY;

  if (count2 == 50) {
    bird.style.display = 'none';
    alert('Den sjeldene fuglen fløy avgårde.\nFikk du tatt et bilde?');
  }
}
