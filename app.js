const letraA = "ai";
const letraE = "enter";
const letraI = "imes";
const letraO = "ober";
const letraU = "ufat";

let textoAEncriptar= document.getElementById(textoA);
let textoUsuario_copia="";

//Botones
function boton_encriptar(){
        //remover imagen
    const padre = document.querySelector(".interfaz-derecha");
    const hijo = document.querySelector(".imagen-centro");
    if(hijo)
    {
        const throwawayNode = padre.removeChild(hijo);
    }
        // habilitar boton copiar
    habilitarBoton("copiar");
    disenioResponsivo();
    //inicializar variable a encriptar con el texto dado
    let textoUsuario= document.getElementById("caja-texto-usuario").value;
    //Mandar texto de usuraio y texto de interfaz a la funcion
    console.log(textoUsuario);
    encriptar_texto(textoUsuario, "textoA");
    document.getElementById("textoB").innerHTML="";
    textoUsuario="";//No entiendo por que no deja la caja vacia esta linea
    document.getElementById("caja-texto-usuario").value="";
    window.scroll({
        top: -100,
        behavior: "smooth",
      });
}

function boton_desencriptar()
{
    //Aplicar cambios para el diseño responsivo
    disenioResponsivo();
    //remover imagen si existe
    const padre = document.querySelector(".interfaz-derecha");
    const hijo = document.querySelector(".imagen-centro");
    if(hijo)
    {
        const throwawayNode = padre.removeChild(hijo);
    }
    // habilitar boton copiar
    habilitarBoton("copiar");
    //inicializar variable a encriptar con el texto dado
    let textoTomado= document.getElementById("caja-texto-usuario").value;
    desencriptar_texto(textoTomado, "textoA");
    document.getElementById("textoB").innerHTML="";
    textoTomado="";
}

function boton_copiar()
{
    copiarTexto();
}


//Funciones de los botonos
function encriptar_texto(textoAEncriptar, textoInterfaz){

    textoUsuario_copia=textoAEncriptar;

    //encriptar
    for (let indice = 0; indice < textoAEncriptar.length; indice++) {
        if (textoAEncriptar[indice]== "a")
        { 
            nuevo_texto= textoAEncriptar.substring(0,indice) +letraA;
            textoAEncriptar= nuevo_texto +textoAEncriptar.substring(indice+1);
            indice= indice+letraA.length-1;
        }else if (textoAEncriptar[indice]== "e"){
            nuevo_texto= textoAEncriptar.substring(0,indice) +letraE;
            textoAEncriptar= nuevo_texto +textoAEncriptar.substring(indice+1);
            indice= indice+letraE.length-1;
        }else  if (textoAEncriptar[indice]== "i"){
            nuevo_texto= textoAEncriptar.substring(0,indice) +letraI;
            textoAEncriptar= nuevo_texto +textoAEncriptar.substring(indice+1);
            indice= indice+letraI.length-1;
        }else  if (textoAEncriptar[indice]== "o"){
            nuevo_texto= textoAEncriptar.substring(0,indice) +letraO;
            textoAEncriptar= nuevo_texto +textoAEncriptar.substring(indice+1);
            indice= indice+letraU.length-1;
        }else if(textoAEncriptar[indice]== "u")
        {
            nuevo_texto= textoAEncriptar.substring(0,indice) +letraU;
            textoAEncriptar= nuevo_texto +textoAEncriptar.substring(indice+1);
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

    //
  
  }

  function habilitarBoton(NewButton){
    document.querySelector(".textos").setAttribute("style","height:100%");
    let boton = document.getElementById(NewButton);
    if (boton.disabled== true) {
        boton.removeAttribute("disabled");
        boton.removeAttribute("style");
    }
  }

  function disenioResponsivo()
  {
    if (window.screen.width<=780) {
        document.querySelector(".interfaz-derecha").setAttribute("style","opacity: 1; scale:1; position:relative;display:block; margin: 2em 1em; width:auto;");
        //document.querySelector(".interfaz-derecha").setAttribute("style","opacity: 1; scale:1; position:relative;display:block; margin: 1em 2em 0 2em; width:auto;padding:0");
    }
  }