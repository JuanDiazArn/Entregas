function envio(peso, distancia){

let preciototal = peso * distancia;

if (distancia >0 && distancia <=50){
  if (peso >0 && peso <=100){
    preciototal = preciototal + 10;
  }else{
    preciototal = preciototal + 20;
  }
} else if (distancia > 50 && distancia <=100){
  if (peso >0 && peso <=100){
    preciototal = preciototal + 20;
  }else{
    preciototal = preciototal + 30;
  }
} else {
  preciototal = preciototal + 50;
}

return preciototal;

}

let confirmacion = true;



do {

let pesoActual = parseFloat(prompt("Ingrece el peso del producto (kg)"));
let distanciaActual = parseFloat(prompt("Ingrese su distancia del local (km)")) ;

if (pesoActual > 0 && distanciaActual >0){
  let precioFlete = envio(pesoActual, distanciaActual);
  alert ("el costo del envio es " + precioFlete);
  let respuesta = prompt("desea calcular otro envio?");
  if(respuesta == "no") {
      confirmacion = false;
  }
}else {
  alert ("Ingrese numeros mayores a cero");
}



} while (confirmacion);




