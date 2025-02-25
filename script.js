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
    vals = [];
    op=null;
    return "You really tried it huh.";
}
let vals = [];
let op = null;

function operate(x1,x2,op,val){
    switch(op){
        case "AC":
            vals = [];
            op=null;
            return 0;
        case "%":
            return x1/100;
        case "+/-":
            return x1*-1;
        case "=":
            return val;
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
let displayVal = 0;
const display = document.querySelector("#display");
display.textContent = displayVal;
counter = 12;
for (let i = 0; i<20; ++i){
    const button = document.createElement("button");
    button.classList.toggle("number");
    button.id = "" + (i+1).toString();
    if (i<3){
        button.classList.toggle("number");
        button.classList.toggle("operation");
        switch (i){
            case (0):
                button.textContent = "AC";
                break;
            case (1):
                button.textContent = "%";
                break;
            case (2):
                button.textContent = "+/-";
        }
    }
    else{
        button.textContent = counter;
    }
    if ((i+1)%4===0){
        button.classList.toggle("number");
        button.classList.toggle("operation");
        switch ((i+1)/4){
                case (1):
                    button.textContent = "/";
                    break;
                case (2):
                    button.textContent = "*";
                    break;
                case (3):
                    button.textContent = "-";
                    break;
                case (4):
                    button.textContent = "+";
                    break;
                case (5):
                    button.textContent = "=";
        }
    }
    else if(counter === -2){
        button.textContent = ".";
        button.classList.toggle("operation");
        button.classList.toggle("number");
        --counter;
    }
    else{
        --counter;
    }
    button.style.borderRadius = "90px";
    container.appendChild(button);
}

const digitBtns = document.querySelectorAll(".number");
digitBtns.forEach((button)=>{
    button.addEventListener("click",()=>{
        displayVal = displayVal*10 + +button.textContent;
        display.textContent = displayVal;
    })
});
const opBtns = document.querySelectorAll(".operations");
opBtns.forEach((button)=>{
    button.addEventListener("click",()=>{
        if (vals.length === 2){
            display.textContent = operate(vals[0],vals[1],op,displayVal);
        }
        else{
            vals.push(displayVal);
        }
        op = button.textContent;
    })
})


