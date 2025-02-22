function add(x1, x2){
    return x1+x2;
}

function subtract(x1, x2){
    return x1-x2;
}

function multiply(x1, x2){
    return x1*x2;
}

function divide(x1, x2){
    if (x2 !== 0)
        return x1/x2;
    return NaN;
}

function aTest(x1, x2, expected){
    return expected === add(x1,x2);
}

function sTest(x1, x2, expected){
    return expected === subtract(x1,x2);
}

function mTest(x1, x2, expected){
    return expected === multiply(x1,x2);
}

function dTest(x1, x2, expected){
    return expected === divide(x1,x2);
}
let x1=x2=op=null;

function operate(x1,x2,op){
    switch(op){
        case "+":
            return add(x1,x2);
        case "-":
            return subtract(x1,x2);
        case "*":
            return multiply(x1,x2);
        case "/":
            return divide(x1,x2);
    }
}
const container = document.querySelector("#buttons");
for (let i = 0; i<16; ++i){
    const button = document.createElement("button");
    button.id = (i+1).toString();
    button.textContent = i+1;
    container.appendChild(button);
}