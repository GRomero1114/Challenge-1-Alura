const letraA = "ai";
const letraE = "enter";
const letraI = "imes";
const letraO = "ober";
const letraU = "ufat";

let textoAEncriptar= document.getElementById(textoA);
let textoUsuario_copia="";

//Botones
function boton_encriptar(){
    //Verificar si la caja esta vacia

        //remover imagen
    const padre = document.querySelector(".interfaz-derecha");
    const hijo = document.querySelector(".imagen-centro");
    if(hijo)
    {
        const throwawayNode = padre.removeChild(hijo);
    }
        // habilitar boton copiar
    habilitarBoton("copiar");
  
    //inicializar boton de encriptar con el texto dado
    let textoUsuario= document.getElementById("caja-texto-usuario").value;
    //ver si el boton esta funcionando
    document.getElementById("encriptar").innerHTML="Funciona";
    //Mandar texto de usuraio y texto de interfaz a la funcion
    encriptar_texto(textoUsuario, "textoA");
    document.getElementById("textoB").innerHTML="";
}

function boton_desencriptar()
{

   
    //eliminar imagen de texo y mostrar mensaje copiar
        //remover imagen si existe
    const padre = document.querySelector(".interfaz-derecha");
    const hijo = document.querySelector(".imagen-centro");
    if(hijo)
    {
        const throwawayNode = padre.removeChild(hijo);
    }
        // habilitar boton copiar
    habilitarBoton("copiar");

    let textoTomado= document.getElementById("caja-texto-usuario").value;
    console.log(textoTomado);
    document.getElementById("desencriptar").innerHTML="Funciona";
    desencriptar_texto(textoTomado, "textoA");
    document.getElementById("textoB").innerHTML="";
}

function boton_copiar()
{
    copiarTexto()
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
        console.log(textoRecibido+"    desencriptar letra A");
        textoRecibido=desencriptador(textoRecibido,letraE);
        console.log(textoRecibido+"    desencriptar letra E");
        textoRecibido=desencriptador(textoRecibido,letraI);
        console.log(textoRecibido+"    desencriptar letra I");
        textoRecibido=desencriptador(textoRecibido,letraO);
        console.log(textoRecibido+"    desencriptar letra O");
        textoRecibido=desencriptador(textoRecibido,letraU);
        console.log(textoRecibido+"    desencriptar letra U");
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