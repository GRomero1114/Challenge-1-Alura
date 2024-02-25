textoInicialCaja=localStorage.getItem("textocopiado")

encriptar_texto(textoInicialCaja,"textoA");
if (textoInicialCaja=="") {
    document.getElementById("textoA").innerHTML="Ningún mensaje fue encontrado";      
}
localStorage.setItem("textocopiado","");