var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "../xml/fugl.xml", true);
xhttp.send();

function myFunction(xml) {
  var xmlDoc = xml.responseXML;
  par = document.getElementById("fugleInfoText")
  for (var x = 0; x<=3; x++){
    const temp = document.createElement("a");
    let navn = xmlDoc.getElementsByTagName("fugl")[x].childNodes[0].nodeValue;
    temp.innerText = navn;
    temp.style = "display:block;margin-bottom:5px;"
    temp.href = "fugleinfo.html?fugl=" +navn
    par.append(temp)
  }
}

function fInfo() {
  for (i = 0; i<10; i++) {
    console.log("kill me")
  }

}
