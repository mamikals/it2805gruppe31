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
    temp.href = "arrangement.html?arrangement=" +navn;
    innhold.append(temp);
  }
}
