
var myArrayNumeros= Array();
function registarNumero(){
    var num= parseInt(document.getElementById('num').value);
    myArrayNumeros.push(num);
    console.log(myArrayNumeros);
    document.getElementById('num').value='';
    document.getElementById('num').focus();
    listarNumero();
    operaciones();
}

function listarNumero(){
    var salida='';
    for(var pos=0; pos<=myArrayNumeros.length-1; pos++){
        salida+='<tr><td>'+myArrayNumeros[pos]+'</td></tr>';
        console.log(salida);
    }
    document.getElementById('cuerpo').innerHTML=salida;
}
/* funcion de operaciones*/
function operaciones(){
    var salida1='';
    salida1+='<tr><td>'+'<b>Suma de números</b>'+'</td><td>'+suma()+ '</td></tr>';
    salida1+='<tr><td>'+'<b>Cantidad de elementos</b>'+'</td><td>'+myArrayNumeros.length+ '</td></tr>'; 
    salida1+='<tr><td>'+'<b>Número mayor</b>'+'</td><td>'+mayor_menor()[0]+'</td><tr>';
    salida1+='<tr><td>'+'<b>Número menor</b>'+'</td><td>'+mayor_menor()[1]+'</td><tr>';
    salida1+='<tr><td>'+'<b>Números de pares'+'</td><td>'+par_impar()[0]+'</td><tr>';
    salida1+='<tr><td>'+'<b>Número de impares</b>'+'</td><td>'+par_impar()[1]+'</td><tr>';
    salida1+='<tr><td>'+'<b>Multiplos de "5"</b>'+'</td><td>'+mult5()+'</td><tr>';
    salida1+='<tr><td>'+'<b>Promedio</b>'+'</td><td>'+promedio()+'</td><tr>';
    document.getElementById('cuerpo1').innerHTML=salida1;
}  
/* funcion de sumas numericas*/
function suma(){
var sum=0;
for(i in myArrayNumeros) sum+=myArrayNumeros[i]; 
return sum;
}

/* funciones de numero mayor y menor*/
function mayor_menor(){
    var ma=null;
    for(var i=0; i< myArrayNumeros.length; i++){
        if(ma < myArrayNumeros[i]){
            ma= myArrayNumeros[i];
        }
    }
    var me=20000000000;
    for( var i=0; i<10; i++){
        if(me > myArrayNumeros[i]){
            me= myArrayNumeros[i];
        }
    }
   return [ma,me];
}

/* funciones de los numero pares e impares*/
function par_impar(){
    var contpar=0;
    var contimpar=0;
    mm=myArrayNumeros
    for(i in mm ){
        if(mm[i] %2 ==0){
            contpar++;
            
        }else{
            contimpar++;
        }
    }
    return [contpar,contimpar]; 
}

/* funcion de multiplos de "5"*/
function mult5(){
    var cont=0;
    for(i in myArrayNumeros){
        if(myArrayNumeros[i] % 5 ==0)
            cont++;
    }
    return cont;
}

/* funcion de promedios numericos*/
function promedio(){
    return suma() /myArrayNumeros.length;
}