if (window.screen.width<=480) {
    document.querySelector(".interfaz-derecha").setAttribute("style","opacity: 1; scale:1; position:relative;display:block; margin: 1em 2em 0 2em; width:auto;padding:0");
}

if (window.screen.width<=720) {

    document.querySelector(".interfaz-derecha").setAttribute("style","opacity: 1; scale:1; position:relative;display:block; margin: 1em 2em 0 2em; width:auto;padding:0");
}

textoInicialCaja=localStorage.getItem("textocopiado")

encriptar_texto(textoInicialCaja,"textoA");
if (textoInicialCaja=="") {
    document.getElementById("textoA").innerHTML="Ningún mensaje fue encontrado";      
}
localStorage.setItem("textocopiado","");