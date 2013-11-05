function suma()
{
var n1=document.getElementById("n1").value;
var n2=document.getElementById("n2").value;
if (n1.length==0) {
	alert("Campo vacio!");
}else {
	if (n2.length==0) {
		alert("Campo vacio!");
	}
   }
 suma= parseInt(n1) + parseInt(n2);
document.getElementById("res").value=suma;

}
function resta()
{
var n1=document.getElementById("n1").value;
var n2=document.getElementById("n2").value;
if (n1.length==0) {
	alert("Campo vacio!");
}else {
	if (n2.length==0) {
		alert("Campo vacio!");
	}
   }
 resta= parseInt(n1) - parseInt(n2);
document.getElementById("res").value=resta;

}
function division()
{
var n1=document.getElementById("n1").value;
var n2=document.getElementById("n2").value;
if (n1.length==0) {
	alert("Campo vacio!");
}else {
	if (n2.length==0) {
		alert("Campo vacio!");
	}
   }
 division= parseInt(n1) / parseInt(n2);
 if (division ==0 || division== 'cero'); 
 alert("Divicion entre cero");
document.getElementById("res").value=division;

}
function multiplicacion()
{
var n1=document.getElementById("n1").value;
var n2=document.getElementById("n2").value;
if (n1.length==0) {
	alert("Campo vacio!");
}else {
	if (n2.length==0) {
		alert("Campo vacio!");
	}
   }
 multiplicacion= parseInt(n1) * parseInt(n2);
document.getElementById("res").value=multiplicacion;

}

function validarNro(e) {
	var key;
	if (e.which) // Netscape/Firefox/Opera 
	{
		key = e.which;
   }
if (key < 48 || key >57) 
{   
   
   if (key == 48 || key == 8 ) // Detectar . (punto) y backscape (retroceso)
   
   { return true; }
   else 
   { return false; }
 }

return true;
}

function carga()
{
document.getElementById("btn1").onclick=suma;
document.getElementById("btn2").onclick=resta;
document.getElementById("btn3").onclick=division;
document.getElementById("btn4").onclick=multiplicacion;
}
window.onload=carga;