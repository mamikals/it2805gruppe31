var farger = ["", "rgba(92,232,178,0.3)"]

var fuglXML = new XMLHttpRequest();
fuglXML.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        fuglLastetFerdig(this);
    }
};
fuglXML.open("GET", "fugl.xml", true);
fuglXML.send();

function fuglLastetFerdig(xml) {
  var innhold = xml.responseXML;
  liste = document.getElementById("fugleListe")
  var len = innhold.getElementsByTagName("fugl").length-1;
  for (var x = 0; x<=len; x++){
    const tempA = document.createElement("a");
    let navn = innhold.getElementsByTagName("navn")[x].childNodes[0].nodeValue;
    tempA.innerText = navn;
    tempA.href = "visFugl.html?fugl=" +navn;
    oppdaterFarge(tempA, x%2)
    liste.append(tempA);
  }
}

function oppdaterFarge(element, tall){
  element.style.backgroundColor = farger[tall];
}

function visSokteFugler() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('sookFugl');
    filter = input.value.toUpperCase();
    ul = document.getElementById("fugleListe");
    a = ul.getElementsByTagName('a');
    count = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "block";
            oppdaterFarge(a[i], count%2)
            count++;
        } else {
            a[i].style.display = "none";
        }
    }
}
