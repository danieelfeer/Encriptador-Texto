/* 
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

function BtnEncriptar(){
    
    var textoEntrada = document.getElementById("input-text");
    var textoSaida = document.getElementById("output-text");

    
    var textoEncriptado = Encriptar(textoEntrada.value);
    textoSaida.value = textoEncriptado;
    textoEntrada.value = "";


    textoSaida.style.display = 'block';
    var btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.style.display = 'block';

    const iconeCadeado = document.getElementById('ico-cadeado-fechado');
    iconeCadeado.style.opacity = 0;
    iconeCadeado.style.visibility = 'hidden';

}


function Encriptar(stringEncriptada){
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function BtnDesencriptar(){

    var textoEntrada = document.getElementById("input-text");
    var textoSaida = document.getElementById("output-text");


    var textoDesencriptado = Desencriptar(textoEntrada.value);
    textoSaida.value = textoDesencriptado;
    textoEntrada.value = "";
   

    textoSaida.style.display = "block";
    var btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.style.display = 'block';

   

    const iconeCadeado = document.getElementById('ico-cadeado-fechado');
    iconeCadeado.style.opacity = 0;
    iconeCadeado.style.visibility = 'hidden';

}


function Desencriptar(stringDesencriptada){
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function BtnCopiar(){
    var copiarTexto = document.getElementById("output-text");

    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(copiarTexto.value);

}

