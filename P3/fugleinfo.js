var fuglXML = new XMLHttpRequest();
fuglXML.open("GET", "fugl.xml", true);
fuglXML.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        hentFugl(this);
    }
};
fuglXML.setRequestHeader("text", "text/xml");
fuglXML.send();

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("fugl");

function hentFugl(xml) {
  var xmlDoc = xml.responseXML;
  content = document.getElementById("fugleliste")
  var len = xmlDoc.getElementsByTagName("fugl").length-1;
  for (var x = 0; x <= len; x++) {
    let navn = xmlDoc.getElementsByTagName("navn")[x].childNodes[0].nodeValue;
    if (navn.toUpperCase() == c.toUpperCase()) {
      document.getElementById('fuglTitle').innerText = xmlDoc.getElementsByTagName("navn")[x].childNodes[0].nodeValue;
      document.getElementById('fuglInfo').innerText = xmlDoc.getElementsByTagName("tekst")[x].childNodes[0].nodeValue;
      document.getElementById('fugleInfoImg').src = xmlDoc.getElementsByTagName("bilde")[x].childNodes[0].nodeValue;
      document.title = navn;
    }
  }

}
