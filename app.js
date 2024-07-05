let numeroSecreto = 0;
let cont=0;
let listaNuerosSorteados=[];
let numeroMax =10;


function verificarIntento(){
    let numeroUsuario =parseInt(document.getElementById('valorUsuario').value);//getElementById obtiene el valor de la Id o nombre de la Id
    

    // el "===" no solo compara valores sino tambien el tipo de dato
    if (numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${cont} ${(cont===1) ? 'intento' :'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if (numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }
        else{
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }
        cont++;
        limpiarCaja ();
    }
    
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    return;
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function generarNumeroSecreto() {
    let numGenerado=Math.floor(Math.random()*numeroMax)+1;
    
    //si ya sorteamos todos los numeros
    if (listaNuerosSorteados.length == numeroMax){
        asignarTextoElemento ('p','Ya se sortearon todos los números posibles');
    }else {

    //si el numero generado esta en la lista
    if (listaNuerosSorteados.includes(numGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNuerosSorteados.push(numGenerado);
        return numGenerado;
    }
        
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMax}`);
    asignarTextoElemento('y','indica el numero máx a jugar');
    numeroSecreto=generarNumeroSecreto();
    cont=1;
}

function reinicarJuego(){
    limpiarCaja(); //limpiar caja
    //indicar mensaje de intervalo de numeros
     //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego 
    document.getElementById('reiniciar').setAttribute('disabled','true'); 
}

condicionesIniciales();