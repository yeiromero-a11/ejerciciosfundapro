
var objDatosp =[];
var objDatosp=new Object();
function guardardatos(){ 
  objDatosp.nom=document.getElementById('nombres').value;
  objDatosp.ape=document.getElementById('apellidos').value;
  objDatosp.ced=document.getElementById('cedula').value;
  objDatosp.edad=document.getElementById('edad').value;
  document.getElementById("salida2").innerHTML ="<tr><b d>NOMBRES:</b>" +objDatosp.nom+ "     <td></td><b>APELLIDOS:</b>"+
  objDatosp.ape+"     <td></td><b>CEDULA:</b>" +objDatosp.ced+"     <td></td><b>EDAD:</b>" +objDatosp.edad+"</tr>";
}
function modificar(){ 
  var tip = document.getElementById("camo").value;
  switch (tip) {
      case "1":
        objDatosp.nom=document.getElementById("nd").value;
        document.getElementById("resultados").innerHTML = "<tr><b>NOMBRES</b>:"+objDatosp.nom+"     <td></td><b>APELLIDOS</b>:" +
        objDatosp.ape+"     <td></td><b>CEDULA:</b>" +objDatosp.ced+"     <td></td><b>EDAD:</b>" +objDatosp.edad+"</tr>";
      break;
  
      case "2":
        objDatosp.ape=document.getElementById("nd").value;
        document.getElementById("resultados").innerHTML="<tr><b>NOMBRES:</b>"+objDatosp.nom+"     <td></td><b>APELLIDOS:</b>"+
        objDatosp.ape+"     <td></td><b>CEDULA:</b>"+objDatosp.ced+"     <td></td><b>EDAD:</b>"+objDatosp.edad+"</tr>";
      break;

      case "3":
        objDatosp.ced=document.getElementById("nd").value;
        document.getElementById("resultados").innerHTML = "<tr><b>NOMBRES</b>"+objDatosp.nom+"     <td></td><b>APELLIDOS:</b>"+
        objDatosp.ape+"     <td></td><b>CEDULA:</b>"+objDatosp.ced+"     <td></td><b>EDAD:</b>"+objDatosp.edad+"</tr>";
      break;

      case "4":
        objDatosp.edad=document.getElementById("nd").value;
        document.getElementById("resultados").innerHTML = "<tr><b>NOMBRES:</b>"+objDatosp.nom+"     <td></td><b>APELLIDOS:</b>"+
        objDatosp.ape+"     <td></td><b>CEDULA:</b>"+objDatosp.ced+"     <td></td><b>EDAD:</b>"+objDatosp.edad+"</tr>";
      break;

      default:
          break;
  }
  
}