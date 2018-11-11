const slideShow = document.getElementById('coverPhoto');
var count1 = 0;
var slideList = ["img/coverphoto_1.jpg", "img/coverphoto_2.jpg", "img/coverphoto_3.jpg", "img/coverphoto_4.jpg"];

function slideFunc() {
  count1 += 1;

  slideShow.src = slideList[count1];

  if (count1 == 3) {
    count1 = -1;
  }
}

setInterval(slideFunc, 8000);
