var salida="";
function guardardatos(){
    var objDatosp=Object();
    objDatosp.nom=document.getElementById('nom').value;
    objDatosp.ape=document.getElementById('ape').value;
    objDatosp.ced=document.getElementById('ced').value;
    objDatosp.edad=document.getElementById('edad').value;
    salida+='<tr><td>'+objDatosp.nom+'</td><td>'+objDatosp.ape+'</td><td>'+objDatosp.ced+'</td><td>'+objDatosp.edad+'</td></tr>';
    document.getElementById('cuerpo').innerHTML=salida;
}

function modificar(){
    var objDatosp=Object(); 
    objDatosp.ape=document.getElementById("ape").value;
    objDatosp.ced=document.getElementById("ced").value;
    objDatosp.edad=document.getElementById("edad").value;
    objDatosp.nm=document.getElementById("nm").value;
    salida+='<tr><td>'+objDatosp.nm+'</td><td>'+objDatosp.ape+'</td><td>'+objDatosp.ced+'</td><td>'+objDatosp.edad+'</td></tr>';
    document.getElementById('cuerpo').innerHTML=salida;
}