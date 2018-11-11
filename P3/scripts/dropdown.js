var x = document.getElementById("mobBar");
const y = document.getElementById("mobilknapp");

function dropdown(){
  if (x.style.display === "none") {
    x.style.display = "block";
    // Koden er fra https://www.blustemy.io/detecting-a-click-outside-an-element-in-javascript/
    document.addEventListener("click",  (evt) => {
      let targetElement = evt.target; // clicked element
      do {
          if (targetElement == x || targetElement == y) {
            return
          }
          // Go up the DOM
          targetElement = targetElement.parentNode;
      } while (targetElement);

      // This is a click outside.
      x.style.display = "none";
    });
  } else {
    x.style.display = "none";
  }
}

window.onscroll = function() {
  x.style.display = "none";
};
