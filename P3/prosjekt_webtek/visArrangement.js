var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        linktilarrangement(this);
    }
};
xhttp.open("GET", "arrangement.xml", true);
xhttp.send();

function linktilarrangement(xml) {
  var xmlDoc = xml.responseXML;
  innhold = document.getElementById("arrangementer")
  for (var x = 0; x<=3; x++){
    const temp = document.createElement("a");
    let navn = xmlDoc.getElementsByTagName("navn")[x].childNodes[0].nodeValue;
    let dato = xmlDoc.getElementsByTagName("dato")[x].childNodes[0].nodeValue;
    temp.innerText = dato + " " +navn ;
    temp.style = "display:block;margin-bottom:5px;";
    temp.href = "visArrangement.html?arrangement=" +navn;
    innhold.append(temp);
  }
}

//* http://folk.ntnu.no/livrandl/prosjekt_webtek/visArrangement.html?arrangement=Fuglequiz  hente det etter "=" *//
if((window.location.href).indexOf('?') != -1) {
    //* http://www.something.hu/#/ask?kerdesPost=fdasdas%20ad%20asd%20ad%20asdas*//
    var queryString = (window.location.href).substr((window.location.href).indexOf('?') + 1);
    // "queryString" inneholder arrangement=Fuglequiz
    var valgt_arrangement = (queryString.split('='))[1];
    // "valgt_arrangement inneholder Fuglequiz *//
  }

  function visarrangement(xml){
    var xmlDoc = xml.responseXML;
    innhold = document.getElementById("arrangementer")
    for (var x = 0; x<=3; x++){
      if (valgt_arrangement == xmlDoc.getElementsByTagName("navn")[x].childNodes[0].nodeValue)
      const temp = document.createElement("a");

      let navn = xmlDoc.getElementsByTagName("navn")[x].childNodes[0].nodeValue;
      let dato = xmlDoc.getElementsByTagName("dato")[x].childNodes[0].nodeValue;
      temp.innerText = dato + " " +navn ;
      temp.style = "display:block;margin-bottom:5px;";
      temp.href = "visArrangement.html?arrangement=" +navn;
      innhold.append(temp);

  }
