let x = "";
let y = "";
let operator ="";

let doMultiplication = false;
let doAddition = false;
let doSubtraction = false;
let doDivision = false;
let doCalculation = false;
let isResult = false;



const numberButtons = document.querySelector("#buttons");
const display = document.querySelector("#display");
const multiply = document.querySelector("#multiply");
const equals = document.querySelector("#equals");
const calculation = document.querySelector(".calculation");
const backspace = document.querySelector("#backspace");
const clear = document.querySelector("#clear");

numberButtons.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("button")) {
            console.log(display.textContent.length);
        if (display.textContent.length < 10) {
            if (isResult === false) 
            {
                if (doCalculation === true) {
                    y+=e.target.textContent;
                    display.textContent = y;
                }
                else {
                x += e.target.textContent;
                display.textContent = x;
                }
            }
            else if (isResult === true) 
            {
                display.textContent ="";
                x="";
                x += e.target.textContent;
                display.textContent = x;
                }
            
        }
    }


});

numberButtons.addEventListener("click", (e) => {
    if (e.target.classList.contains("calculation")) {
        doCalculation = true;
        operator = e.target.textContent;
        display.textContent ="";
        if (operator =="X") {
            doMultiplication = true;
            doAddition = false;
            doSubtraction = false;
            doDivision = false;

        }
        else if (operator =="/") {
            doMultiplication = false;
            doAddition = false;
            doSubtraction = false;
            doDivision = true;
        }
        else if (operator =="+") {
            doMultiplication = false;
            doAddition = true;
            doSubtraction = false;
            doDivision = false;
        }
        else if (operator =="-") {
            doMultiplication = false;
            doAddition = false;
            doSubtraction = true;
            doDivision = false;
        }
        isResult = false;
    }
})

equals.addEventListener("click", (e) => {

    if (doMultiplication === true) {
        display.textContent = (x*y);
    }
    else if (doAddition === true) {
        x = parseFloat(x);
        y = parseFloat(y);
        display.textContent = (x+ y);
        console.log(typeof x)
    }
    else if (doSubtraction === true) {
        display.textContent = (x - y);
    }
    else if (doDivision === true) {
        if (y == 0) {
            display.textContent = "WOMP WOMP!";
        }
        else {
            if (x%y === 0) {
                display.textContent = (x/y);
            }
            else {
                display.textContent = (x/y).toFixed(3);
            }
        }
        
       
    }


    x = display.textContent;
    y="";
    let n =display.textContent.length;
    console.log(display.textContent);
    if (n> 10) {
        display.textContent = display.textContent/(Math.pow(10,n-1));
        display.textContent = display.textContent.slice(0,8) + "e" + (n-1);
        
    }

    doCalculation = false;
    isResult = true;


})

backspace.addEventListener("click", (e) => {
    if (isResult === false) {
    display.textContent = display.textContent.slice(0,-1);
        if (doCalculation === false) {
            x = display.textContent;
        }
        else {
            y = display.textContent;
        }
    }
})

clear.addEventListener("click", (e) => {
    display.textContent = "";
    x ="";
    y= "";
    isResult = false;
    doCalculation = false;
})

