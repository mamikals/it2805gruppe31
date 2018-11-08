var fuglXML = new XMLHttpRequest();
fuglXML.open("GET", "../xml/fugl.xml", true);
fuglXML.setRequestHeader("text", "text/xml");
fuglXML.send();
fuglDoc = fuglXML.responseXML;

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("fugl");
console.log(c);

console.log(fuglDoc)
