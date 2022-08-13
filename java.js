let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let result = document.querySelector('#result');
let live = document.querySelector('#live');
let allClear = document.querySelector('#clear');
let del = document.querySelector('#delete');
let equals = document.querySelector('#equals');
let prevValue = '';
let currentValue = '';
let answer = undefined;
var operation= undefined;

numbers.forEach(number => {
    number.addEventListener('click',click)
})
function click(){
    if(this.innerText === '.' && result.innerText.includes('.')) return;
    if(result.innerText.length<=20){
    if(operation == undefined){
        live.innerText= '';
        result.innerText += this.innerText;
        prevValue =result.innerText;
    }
    else{
        result.innerText += this.innerText;
        currentValue = result.innerText;
    }}
}

operators.forEach(operator => {
    operator.addEventListener('click', operate)
})
function operate(){
    if(prevValue == '' && currentValue == '' ) return
    if(result.innerText != '' && live.innerText != answer) {
        equalsTo()
    }
    if(prevValue==undefined)return
    result.innerText = ''
    operation = this.innerText;
    live.innerText = prevValue + ' ' + operation;
}

equals.addEventListener('click', equalsTo);
function equalsTo(){
    if(prevValue == '' || currentValue == '' ) return
    prevValue = Number(prevValue);
    currentValue = Number(currentValue);
   switch(operation){
    case '*':
        answer = prevValue * currentValue
        break;
    case '+':
        answer = prevValue + currentValue
        break;
    case '-':
        answer = prevValue - currentValue
        break;
    case '÷':
        answer = prevValue / currentValue
        break;
    case ('÷' && currentValue == 0):
        answer = 'lol'
        break;    
    default:
         return
   }
   result.innerText = '';
   prevValue = answer;
   currentValue = ''
   live.innerText= answer;
   operation = undefined
}

allClear.addEventListener('click', clear);
function clear(){
    prevValue = '';
    currentValue = '';
    answer = undefined;
    operation = undefined;
    result.innerText = '';
    live.innerText = '';

}


del.addEventListener('click',remove);
function remove(){
    if(operation == undefined){
        console.log(typeof(prevValue));
        result.innerText= prevValue.slice(0,-1) ;
        prevValue = result.innerText;
        console.log(prevValue)
    }
    else{
        result.innerText = currentValue.slice(0,-1);
        currentValue = result.innerText
    }
}
