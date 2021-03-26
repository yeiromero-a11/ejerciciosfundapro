var myArrayEst= new Array();
var oEst = {
    nom: null,
    ape : null,
    n1 : null,
    n2 : null,
    n3 : null,
}
/* boton de guardar*/
function guardar(){
    oEst.nom=document.getElementById('nom').value;
    oEst.ape=document.getElementById('ape').value;
    oEst.ced=document.getElementById('ced').value;
    oEst.n1=document.getElementById('n1').value;
    oEst.n2=document.getElementById('n2').value;
    oEst.n3=document.getElementById('n3').value;
    let resultado = JSON.parse(JSON.stringify(oEst)); //convierte un estring de objetos  a Notación de Objetos JavaScript 
    console.log(resultado);
    myArrayEst.push(resultado);
    console.log(myArrayEst);
    limpiarCajas();
    listarEstudiante();}

function limpiarCajas(){
    document.getElementById('nom').value='';
    document.getElementById('ape').value='';
    document.getElementById('ced').value='';
    document.getElementById('n1').value='';
    document.getElementById('n2').value='';
    document.getElementById('n3').value='';
    document.getElementById('nom').focus();
}
function listarEstudiante(){
    var salida='';
    for(i in myArrayEst){
        salida+='<tr><td>'+myArrayEst[i].nom+'</td><td>'+myArrayEst[i].ape+'</td><td>'+myArrayEst[i].ced+'</td><td>'+myArrayEst[i].n1+'</td><td>'+myArrayEst[i].n2+'</td><td>'+myArrayEst[i].n3+'</td><td>'
        +nf(myArrayEst[i].n1,myArrayEst[i].n2,myArrayEst[i].n3)+'</td><td>'+valoracion(myArrayEst[i].n1,myArrayEst[i].n2,myArrayEst[i].n3)+'</td><td>'+'<font color ="'+coloLetra(myArrayEst[i].n1,myArrayEst[i].n2,myArrayEst[i].n3)+'">'+aprobReprob(myArrayEst[i].n1,myArrayEst[i].n2,myArrayEst[i].n3)+'</font></td></tr>';
    }
      document.getElementById('cuerpo').innerHTML=salida;
}
/* funcion para la nota final*/
function nf(n1,n2,n3){
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    return (n1+n2+n3)/3;
}
/* funcion para la valoracion de las notas*/
function valoracion(n1,n2,n3){
    var notafinal= parseFloat(nf(n1,n2,n3));
    var valor;
    if(notafinal>= 0 && notafinal <= 1){
        valor= "<b>DEFICIENTE</b>";
    } else if(notafinal>= 1 && notafinal<= 3){
        valor= "<b>INSUFICIENTE</b>";
    }else if(notafinal>= 3 &&  notafinal<= 3.5){
        valor= "<b>BUENO</b>";
    }else if(notafinal>= 3.5 &&  notafinal <= 4){
        valor=  "<b>ACEPTABLE</b>";
    }else if(notafinal>= 4 &&  notafinal <= 4.5){
        valor= "<b>SOBRESALIENTE</b>";
    }else if(notafinal>= 4.5 &&  notafinal <= 5){
        valor= "<b>EXCELENTE</b>";
    }
    return valor;
} 
/* funcion que le da el color aprobado(azul)/reprobado(rojo)*/
function coloLetra(n1,n2,n3){
    if(nf(n1,n2,n3) >=3.0){
        return "#071AB6";
    }
    else{
        return "#B60707";
    }
}
/* funcion aprobado/reprobado*/
function aprobReprob(n1,n2,n3){
    var notafinal = parseFloat(nf(n1,n2,n3));
    if(notafinal >=3.0){
        return "<b>APROBADO</b>";
    }
    else{
        return "<b>REPROBADO</b>";
    }
}