function off(){
  document.getElementById("body").style.background="blue";
   document.getElementById("on").style.borderBottom="2px solid white";
 document.getElementById("off").style.borderTop="2px solid black";
  document.getElementById("off").style.background="red";    document.getElementById("on").style.background="red";
var a=document.getElementById("daynight");
  a.innerHTML="Button has been switched off";
}

function on(){
  document.getElementById("body").style.background="#f2e31a";
  document.getElementById("on").style.borderBottom="2px solid black";
   document.getElementById("off").style.borderTop="2px solid #777559";
 document.getElementById("on").style.background="green";
  document.getElementById("off").style.background="green";
  var a=document.getElementById("daynight");
  a.innerHTML="Button has been switched on";

}