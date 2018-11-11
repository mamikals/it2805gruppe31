function endreHoeyde(className) {
  totalHoyde = document.getElementsByTagName("HTML")[0].offsetHeight;
  deviceHoyde = document.documentElement.clientHeight;
  console.log("Total høyde er " + totalHoyde);
  console.log("Device høyde er " + deviceHoyde);
  if (totalHoyde < deviceHoyde){
    summer = 0;
    element = document.getElementsByClassName(className)[0]
    intersectionHoyde = element.offsetHeight;
    padding_top = window.getComputedStyle(element, null).getPropertyValue("padding-top");
    padding_bottom = window.getComputedStyle(element, null).getPropertyValue("padding-bottom");
    padding_top = parseInt(padding_top, 10);
    padding_bottom = parseInt(padding_bottom, 10);
    padding = padding_top + padding_bottom;
    element.style.height = (deviceHoyde+intersectionHoyde-totalHoyde-padding) + "px";
    console.log("Element høyde er  " + element.style.height);
  }
}
