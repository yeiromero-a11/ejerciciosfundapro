var salida1="";
function guardarventa(){
    var objventa=Object();
    objventa.art=document.getElementById('art').value;
    objventa.preciov=document.getElementById('preciov').value;
    objventa.cantidad=document.getElementById('cantidad').value;
    salida1+='<tr><td>'+objventa.art+'</td><td>'+objventa.preciov+'</td><td>'+objventa.cantidad+'</td></tr>';
    document.getElementById('cuepo_tabla').innerHTML=salida1;
    limpiarCajas();
}
function limpiarCajas(){
    document.getElementById('art').value='';
    document.getElementById('preciov').value='';
    document.getElementById('cantidad').value='';
    document.getElementById('art').focus();
}
function guardar_venta(){

var art = document.getElementById("art");
var preciov = document.getElementById("preciov");
var cantidad= document.getElementById("cantidad");

var datos = document.getElementById("cuerpo_tabla");

var subtotal = Number(preciov.value) * Number(cantidad.value);

datos.innerHTML = datos.innerHTML + "<tr><td>"+art.value+"</td><td>"+preciov.value+"</td><td>"+cantidad.value+"</td><td name='subtotal'>"+subtotal+"</td></tr>";

calcular_total();
}
function calcular_total(){

var subtotales = document.getElementsByName('subtotal');
var total = document.getElementById('total');

var suma = 0;

for (var index = 0; index < subtotales.length; index++) {
suma = suma + Number(subtotales[index].innerText);

}

total.innerText = ""+suma;
}