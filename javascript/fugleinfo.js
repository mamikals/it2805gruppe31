var fuglXML = new XMLHttpRequest();
fuglXML.open("GET", "../xml/fugl.xml", true);
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
console.log(c);

function hentFugl(xml) {
  var xmlDoc = xml.responseXML;
  console.log(xmlDoc)
  content = document.getElementById("fugleliste")
  var len = xmlDoc.getElementsByTagName("fugl").length-1;
  for (var x = 0; x <= len; x++) {
    let navn = xmlDoc.getElementsByTagName("navn")[x].childNodes[0].nodeValue;
    console.log(navn)
    if (navn.toUpperCase() == c.toUpperCase()) {
      document.getElementById('fuglTitle').innerText = xmlDoc.getElementsByTagName("navn")[x].childNodes[0].nodeValue
      /*document.getElementById('fuglInfo').innerText = xmlDoc.getElementsByTagName("navn")[x].childNodes[2].nodeValue*/
      document.getElementById('fugleInfoImg').src = ("../birdimg/" + xmlDoc.getElementsByTagName("navn")[x].childNodes[0].nodeValue.toLowerCase() + ".jpg")
    }
  }

}
