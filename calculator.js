const display = document.getElementById("display");
let result = 0;
let input = 0;
let temp = [];

// Addition
function addition() {
    console.log("Addition");
}

// Subtraction
function subtraction() {
    console.log("Subtraction");
}

// Multiplication
function multiplication() {
    console.log("Multiplication");
}

// Division
function division() {
    console.log("Division");
}

// Clear
function clear() {
    result = 0;
    temp = [];
    input = 0;
    display.innerText = 0;
}

// Backspace
function backspace() {
    // Check to see if temp's first value is empty, if it is not then proceed with backspace
    temp.pop();
    if (temp[0] != null )
        display.innerText = temp.join('');
    else
        display.innerText = 0;
}

// Equals
function equals() {
    console.log("Equals");
}

// Update Display
function updateDisplay(text) {

    /*
        Check that the click event's inner html is NaN. Bug seems
        to happen when a user spam clicks the buttons trigger a
        NaN value. 
    */
    
    if (!isNaN(text) && display.innerText == 0) {
        temp.push(Number(text));
        display.innerText = temp.join('');
        input = Number(temp.join(''));
        console.log("input: "+input);
    } 
    else if (!isNaN(text)) {
        temp.push(Number(text));
        display.innerText = temp.join('');
        input = Number(temp.join(''));
        console.log("input: "+input);
    }
    else {
        console.log("NaN caught");
    }
}

// Listen for button events and fire requested function

document.querySelector("#keypad").addEventListener('click', function(event) {
    // Switch to select function

    // Test for NaN 

    switch (event.target.innerText) {
        case '+':
            addition();
            break;
        case '-':
            subtraction();
            break;
        case 'x':
            multiplication();
            break;
        case '÷':
            division();
            break;
        case 'C':
            clear();
            break;
        case '←':
            backspace();
            break;
        case '=':
            equals();
            break;
        default:
            updateDisplay(event.target.innerText);          
    }

});