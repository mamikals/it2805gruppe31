var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        henteinfo(this);
    }
};
xhttp.open("GET", "arrangement.xml", true);
xhttp.send();


var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("arrangement");

function henteinfo(xml){
    var xmlDoc = xml.responseXML;
    const navn_arr = document.getElementById("navn_arr")
    const dato_arr = document.getElementById("dato_arr")
    const tid_arr = document.getElementById("tid_arr")
    const sted_arr = document.getElementById("sted_arr")
    const info_arr = document.getElementById("info_arr")
    const bilde_arr = document.getElementById("bilde_arr")
    var len = xmlDoc.getElementsByTagName("arrangement").length-1;
    for (var i = 0; i <=len; i++) {
      let name_i = xmlDoc.getElementsByTagName("navn")[i].childNodes[0].nodeValue;
      if (c == name_i) {
          navn_arr.innerText = xmlDoc.getElementsByTagName("navn")[i].childNodes[0].nodeValue;
          dato_arr.innerText = "Dato: " + xmlDoc.getElementsByTagName("dato")[i].childNodes[0].nodeValue;
          tid_arr.innerText = "Tidspunkt: " + xmlDoc.getElementsByTagName("tid")[i].childNodes[0].nodeValue;
          sted_arr.innerText = "Sted: " + xmlDoc.getElementsByTagName("sted")[i].childNodes[0].nodeValue;
          info_arr.innerText = "Info: " + xmlDoc.getElementsByTagName("info")[i].childNodes[0].nodeValue;
          bilde_arr.innerText = xmlDoc.getElementsByTagName("bilde")[i].childNodes[0].nodeValue;
        }
      }
    }
