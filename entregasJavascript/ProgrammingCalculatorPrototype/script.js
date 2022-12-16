let cadena="", conversion=0, transicion="";

function octal(){
    var octales =document.getElementById("octales").value
    if(octales){
        document.getElementById("uno");
        document.getElementById("dos");
        document.getElementById("tres");
        document.getElementById("cuatro");
        document.getElementById("cinco");
        document.getElementById("seis");
        document.getElementById("siete");
        document.getElementById("ocho");
        document.getElementById("nueve"); 
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


// if(cadena!=="0"){
//     document.getElementById("decimales").disabled=false;
//     console.log("Soy diferente de cero");
// }
function decimal(){
    let decimales = document.getElementById("decimales");
    if(decimales){
        document.getElementById("uno");
        document.getElementById("dos");
        document.getElementById("tres");
        document.getElementById("cuatro");
        document.getElementById("cinco");
        document.getElementById("seis");
        document.getElementById("siete");
        document.getElementById("ocho");
        document.getElementById("nueve");
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
    console.log("Entre a la operación!!!");
    var binarios =document.getElementById("binarios").value
    if(binarios){
        document.getElementById("uno");
        if(binarios != octales){
            document.getElementById("dos");
            document.getElementById("tres");
            document.getElementById("cuatro");
            document.getElementById("cinco");
            document.getElementById("seis");
            document.getElementById("siete");
            document.getElementById("ocho");
            document.getElementById("nueve");
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
    document.getElementById("txtDisplay").value="";
    cadena="";
}