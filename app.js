const letraA = "ai";
const letraE = "enter";
const letraI = "imes";
const letraO = "ober";
const letraU = "ufat";

var textoInicialCaja="";

let textoAEncriptar= document.getElementById(textoA);

//Botones
function boton_encriptar(){
    //Obtener el texto
    let textoUsuario= document.getElementById("caja-texto-usuario").value;
    //Hacer una copia del texto en el localStorage
    localStorage.setItem("textocopiado",textoUsuario);
    //Mandar texto de usuraio y texto de interfaz a la funcion
    encriptar_texto(textoUsuario, "textoA");
    window.location.href=("encriptar.html");
    //document.querySelector(".interfaz-derecha").setAttribute("style","opacity: 1; scale:1; position:relative;display:block");
}

function boton_desencriptar()
{
    //Obtener el texto
    let textoTomado= document.getElementById("caja-texto-usuario").value;
    localStorage.setItem("textocopiado",textoTomado);
    document.getElementById("desencriptar").innerHTML="Funciona";
    desencriptar_texto(textoTomado, "textoA");    
    window.location.href=("desencriptar.html");
   // document.querySelector(".interfaz-derecha").setAttribute("style","opacity: 1; scale:1; position:relative;display:block");
}

function boton_copiar()
{
    copiarTexto()
}


//Funciones de los botonos
function encriptar_texto(textoAEncriptar, textoInterfaz){
    //encriptar
    for (let indice = 0; indice < textoAEncriptar.length; indice++) {
        if (textoAEncriptar[indice]== "a")
        { 
            nuevo_texto= textoAEncriptar.substring(0,indice) +letraA;
            textoAEncriptar= nuevo_texto +textoAEncriptar.substring(indice+1);
            console.log(textoAEncriptar);
            indice= indice+letraA.length-1;
        }else if (textoAEncriptar[indice]== "e"){
            nuevo_texto= textoAEncriptar.substring(0,indice) +letraE;
            textoAEncriptar= nuevo_texto +textoAEncriptar.substring(indice+1);
            console.log(textoAEncriptar);
            indice= indice+letraE.length-1;
        }else  if (textoAEncriptar[indice]== "i"){
            nuevo_texto= textoAEncriptar.substring(0,indice) +letraI;
            textoAEncriptar= nuevo_texto +textoAEncriptar.substring(indice+1);
            console.log(textoAEncriptar);
            indice= indice+letraI.length-1;
        }else  if (textoAEncriptar[indice]== "o"){
            nuevo_texto= textoAEncriptar.substring(0,indice) +letraO;
            textoAEncriptar= nuevo_texto +textoAEncriptar.substring(indice+1);
            console.log(textoAEncriptar);
            indice= indice+letraU.length-1;
        }else if(textoAEncriptar[indice]== "u")
        {
            nuevo_texto= textoAEncriptar.substring(0,indice) +letraU;
            textoAEncriptar= nuevo_texto +textoAEncriptar.substring(indice+1);
            console.log(textoAEncriptar);
            indice= indice+letraU.length-1;
        }
    }    
    //reemplazar en la interfez
    document.getElementById(textoInterfaz).innerHTML = textoAEncriptar;
}



function desencriptar_texto(textoRecibido,textoInterfaz)
{
    let texto_aux=textoRecibido;
    let texto_desencriptado="";

    for (let index = 0; index < texto_aux.length; index++) {
        textoRecibido=desencriptador(textoRecibido,letraA);
        textoRecibido=desencriptador(textoRecibido,letraE);
        textoRecibido=desencriptador(textoRecibido,letraI);
        textoRecibido=desencriptador(textoRecibido,letraO);
        textoRecibido=desencriptador(textoRecibido,letraU);
    }

    texto_desencriptado=textoRecibido;
    document.getElementById(textoInterfaz).innerHTML = texto_desencriptado;
}

function desencriptador(textoRecibido,letraRecibida)
{
    if(letraRecibida==letraA && textoRecibido.indexOf(letraRecibida)!=-1)
    {
        textoRecibido= textoRecibido.substring(0,textoRecibido.indexOf(letraRecibida))+"a"+textoRecibido.substring(textoRecibido.indexOf(letraRecibida)+letraRecibida.length);
    }else if(letraRecibida==letraE && textoRecibido.indexOf(letraRecibida)!=-1)
    {
        textoRecibido= textoRecibido.substring(0,textoRecibido.indexOf(letraRecibida))+"e"+textoRecibido.substring(textoRecibido.indexOf(letraRecibida)+letraRecibida.length);
    }else if(letraRecibida==letraI && textoRecibido.indexOf(letraRecibida)!=-1)
    {
        textoRecibido= textoRecibido.substring(0,textoRecibido.indexOf(letraRecibida))+"i"+textoRecibido.substring(textoRecibido.indexOf(letraRecibida)+letraRecibida.length);
    }else if(letraRecibida==letraO && textoRecibido.indexOf(letraRecibida)!=-1)
    {
        textoRecibido= textoRecibido.substring(0,textoRecibido.indexOf(letraRecibida))+"o"+textoRecibido.substring(textoRecibido.indexOf(letraRecibida)+letraRecibida.length);
    }else if(letraRecibida==letraU && textoRecibido.indexOf(letraRecibida)!=-1)
    {
        textoRecibido= textoRecibido.substring(0,textoRecibido.indexOf(letraRecibida))+"u"+textoRecibido.substring(textoRecibido.indexOf(letraRecibida)+letraRecibida.length);
    }

    return textoRecibido
}

function copiarTexto() {

    let texto = document.getElementById("textoA").innerText;
  
    let elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
  
    elementoTemporal.style.position = "fixed";
    elementoTemporal.style.opacity = 0;
  
    document.body.appendChild(elementoTemporal);
  
    elementoTemporal.select();
    document.execCommand("copy");
  
    document.body.removeChild(elementoTemporal);
  
  }

  function cambiarPaginas()
  {
    boton_encriptar();
    
  }