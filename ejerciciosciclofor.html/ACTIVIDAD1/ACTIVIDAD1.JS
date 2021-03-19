var salida="";
function guardardatos(){
    var objDatosp=Object();
    objDatosp.nom=document.getElementById('nom').value;
    objDatosp.ape=document.getElementById('ape').value;
    objDatosp.ced=document.getElementById('ced').value;
    objDatosp.edad=document.getElementById('edad').value;
    salida+='<tr><td>'+objDatosp.nom+'</td><td>'+objDatosp.ape+'</td><td>'+objDatosp.ced+'</td><td>'+objDatosp.edad+'</td></tr>';
    document.getElementById('cuerpo').innerHTML=salida;
    limpiarCajas();
}
function limpiarCajas(){
    document.getElementById('nom').value='';
    document.getElementById('ape').value='';
    document.getElementById('ced').value='';
    document.getElementById('edad').value='';
    document.getElementById('nom').focus();
}