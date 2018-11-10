/*VAR OUTSIDE FUNKSJON SO IT WONT LOAD EVERY TIME*/
var x = document.getElementById("mobilmeny");

function dropdown() {

  if (x.style.display === "block") {
    x.style.display = "none";
  }

  else {
    x.style.display = "block";
  }
}
