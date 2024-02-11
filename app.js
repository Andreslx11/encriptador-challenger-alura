
let caracteresPermitidos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "  ", "   "];
let advertencia = "    Advertencia  solo letras minúsculas sin signos  especiales ";

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function encriptar() {
  let texto = document.getElementById("textarea1Id").value;
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  console.log(textoCifrado)
  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);


    let verificación = caracteresPermitidos.includes(letra);

    if (verificación == false) {
      document.getElementById("textarea2Id").value = advertencia;
      asignarTextoElemento("h1", "Error");

    } else {
      document.getElementById("textarea2Id").value = textoCifrado;
      asignarTextoElemento("h1", "ENCRIPTADO");
    }
  }
}


function desencriptar() {
  let texto = document.getElementById("textarea1Id").value;
  let textPlano = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);
    let verificación = caracteresPermitidos.includes(letra);
    console.log(verificación)
    if (verificación == false) {
      document.getElementById("textarea2Id").value = advertencia;
      asignarTextoElemento("h1", "Error");
      break;
    } else {
      document.getElementById("textarea2Id").value = textPlano;
      asignarTextoElemento("h1", "texto desencriptado con exito");
    }
  }
}












