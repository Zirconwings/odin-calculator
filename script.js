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
        return Math.round(x1/x2*10**12)/10**12;
    return "You really tried it huh.";
}
let vals = [];
let op = null;
let arith1 = null;

function operate(op){
    if (op === "AC"){
        ans = 0;
        arith1 = null;
        displayVal = 0;
        vals = [];
        return 0;
    }
    if (op === "."){
        displayVal = displayVal.toString() + ".";
    }
    if (op === "%"){
        ans /= 100;
        displayVal /= 100;
        vals.pop();
        return ans;
    }
    if (op === "+/-"){
        ans *= -1;
        displayVal *=-1;
        vals.pop();
        return ans;
    }
    if (arith1 === null || arith1 === "="){
        arith1 = op;
        displayVal = 0;
        return vals[0];
    }
    if (op === "+" || op === "-" || op === "*" || op === "/"){
        if (typeof vals[0] === "number" && typeof vals[1] === "number"){
            ans = operations(vals[0],vals[1],arith1);
        }
        else{
            ans = NaN;
        }
        arith1 = op;
        displayVal = 0;
        vals = [ans];
        return ans;
    }
    if (op === "="){
        if (typeof vals[0] === "number" && typeof vals[1] === "number"){
            ans = operations(vals[0],vals[1],arith1);
        }
        else{
            ans = NaN;
        }
        arith1 = "=";
        displayVal = 0;
        vals = [];
        return ans;
    }
}

function operations(x1,x2,op){
    switch (op){
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
let ans = 0;
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
        displayVal = Number(displayVal + button.textContent);
        ans = displayVal;
        display.textContent = displayVal;
    })
});
const opBtns = document.querySelectorAll(".operation");
opBtns.forEach((button)=>{
    button.addEventListener("click",()=>{
        vals.push(ans);
        console.log(vals);
        console.log(ans);
        display.textContent = operate(button.textContent);
        console.log(vals);
    })
})


