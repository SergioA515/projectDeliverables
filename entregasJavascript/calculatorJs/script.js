//value display
var display = document.querySelector('input.value')

        //
const back = document.querySelector('button.back')
const clear = document.querySelector('button.btn-clear')
const btnigual = document.querySelector('button.btn-equal')
const btnsNumbers = document.querySelectorAll('button[data-num]')
const btnsOperators = document.querySelectorAll('button[data-opr]')
var operStatus = false
//action
clear.onclick=()=> {
    display.value=''
    operStatus=false

}
back.onclick=()=> {
    deletLastValue()
}
btnigual.onclick=()=> {
    igual()
}
//activation click event in all numbers and operators
for (let i = 0; i < btnsNumbers.length; i++) {
    btnsNumbers[i].onclick =function() {
    addToDisplay(this.getAttribute('data-num'))
    operStatus=true
};

};
for (let i = 0; i < btnsOperators.length; i++) {
    btnsOperators[i].onclick = function() {
        if (operStatus) {
            addToDisplay(this.getAttribute('data-opr'))
            operStatus=false
    }
}
}
//events
document.onkeyup = (evt) => {
//alert(evt.keyCode)
    switch (evt.code) {
    case 8:
        deletLastValue()
    case 96:
    case 48:
        display.value += 0
    break;
    case 97:
    case 49:
        display.value += 1
    break;
    case 98:
    case 50:
        display.value += 2
    break;
    case 99:
    case 51:
        display.value += 3
    break;
    case 100:
    case 52:
        display.value += 4
    break;
    case 101:
        display.value += 5
    break;
    case 53:
        if (evt.shiftKey) {
            display.value+='%'
            break;
        } else {
            display.value += 5
            break;
    }
    case 102:
    case 54:
    display.value += 6
    break;
    case 103:
    case 55:
    display.value += 7
    break;
    case 104:
    case 56:
    display.value += 8
    break;
    case 105:
    case 57:
        display.value += 9
    break;
    case 222:
        if(evt.altKey){
            display.value +='^'
        }
    break;
    default:
    break;
    }
}       
//function
function deletLastValue() {
display.value= display.value.slice(0,-1)
if ((isNaN(display.value.slice(-1)))) {
operStatus=false
}
else {
operStatus=true
}
// display.value= display.value.slice(0,-1)
// if ((isNaN(display.value.slice(-1)))) {
//     operStatus=false
// }
// else {
//     operStatus=true
// }
}
function validateLength() {
            if(display.value.length < 55 ){
                return true
            }
            return false
        };
function addToDisplay(c) {
            if(validateLength()) {
                display.value+=c
            }
        };
function clearDisplay(){
            display.value=''
            operStatus=false
        }
function igual() {
            display.value=(eval(display.value))
        }
    