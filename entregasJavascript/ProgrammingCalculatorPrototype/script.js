let cadena="", conversion=0, transicion="";

function octal(){
    var octales =document.getElementById("octales").value
    if(octales){
        document.getElementById("uno").disabled = false;
        document.getElementById("dos").disabled = false;
        document.getElementById("tres").disabled = false;
        document.getElementById("cuatro").disabled = false;
        document.getElementById("cinco").disabled = false;
        document.getElementById("seis").disabled = false;
        document.getElementById("siete").disabled = false;
        if (octales != decimales){
           document.getElementById("ocho").disabled=true;
           document.getElementById("nueve").disabled=true; 
        }
    } 
    var entero = document.getElementById("txtDisplay").value;
    let octal = (entero % 8).toString();
    ( entero > 1);{
        entero = parseInt(entero / 8);
        octal =(entero % 8)+(octal);
    }
    document.getElementById("txtDisplay").value = octal;

    transicion = "octales";
}

function decimal(){
    document.getElementById("decimales").disabled=false;
    var decimales = document.getElementById("decimales").value
    if(decimales){
        document.getElementById("uno").disabled = false;
        document.getElementById("dos").disabled = false;
        document.getElementById("tres").disabled = false;
        document.getElementById("cuatro").disabled = false;
        document.getElementById("cinco").disabled = false;
        document.getElementById("seis").disabled = false;
        document.getElementById("siete").disabled = false;
        document.getElementById("ocho").disabled = false;
        document.getElementById("nueve").disabled = false;
    } 
    let number = document.getElementById("txtDisplay").value;
    let sumaBin = 0;
    for (let i = 0 ; i < number.length; i++ ){
        sumaBin += (number[i] *2) ** (number.length - 1 - i);
    }
    document.getElementById("txtDisplay").value =sumaBin;
    transicion = "decimales";
}


function binario(){

    var binarios =document.getElementById("binarios").value
    if(binarios){
        document.getElementById("uno").disabled = false;
        if(binarios != octales){
            document.getElementById("dos").disabled = true;
            document.getElementById("tres").disabled = true;
            document.getElementById("cuatro").disabled = true;
            document.getElementById("cinco").disabled = true;
            document.getElementById("seis").disabled = true;
            document.getElementById("siete").disabled = true;
            document.getElementById("ocho").disabled = true;
            document.getElementById("nueve").disabled = true;
        }
    }
    var numBin = document.getElementById("txtDisplay").value;
    let binary = (numBin % 2).toString();
    for (; numBin > 1;){
        numBin = parseInt(numBin / 2);
        binary = (numBin % 2)+(binary);
    }
    document.getElementById("txtDisplay").value = binary;
    transicion = "binarios";
}

function agregar(num){

    cadena += ""+ num;
    document.getElementById("txtDisplay").value = cadena;
    
}
function limpiar(){
    // limpiar2();
    document.getElementById("txtDisplay").value="0";
}