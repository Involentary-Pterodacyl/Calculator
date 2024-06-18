const p = document.querySelector("p");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const devide = document.getElementById("/");
const mult = document.getElementById("*");
const equal = document.getElementById("=")
const clear = document.getElementById("clear")
const b9 = document.getElementById("9")
const b8 = document.getElementById("8")
const b7 = document.getElementById("7")
const b6 = document.getElementById("6")
const b5 = document.getElementById("5")
const b4 = document.getElementById("4")
const b3 = document.getElementById("3")
const b2 = document.getElementById("2")
const b1 = document.getElementById("1")
const b0 = document.getElementById("0")
let operator 
let num1 = 0;

function addOperator(op) {
    operator = op;
    num1 = Number(p.innerText);
    p.innerText = "";
}
function addNum(num) {
    p.innerText += num;
}
plus.onclick = function() {
    addOperator("+");
}
minus.onclick = function() {
    addOperator("-");
}
devide.onclick = function() {
    addOperator("/");
}
mult.onclick = function() {
    addOperator("*");
}
b0.onclick = function() {
    addNum("0")
}
b1.onclick = function() {
    addNum("1")
}
b2.onclick = function() {
    addNum("2")
}
b3.onclick = function() {
    addNum("3")
}
b4.onclick = function() {
    addNum("4")
}
b5.onclick = function() {
    addNum("5")
}
b6.onclick = function() {
    addNum("6")
}
b7.onclick = function() {
    addNum("7")
}
b8.onclick = function() {
    addNum("8")
}
b9.onclick = function() {
    addNum("9")
}
clear.onclick = function() {
    p.innerText = ""
}

equal.onclick = function() {
    let num = Number(p.innerText);
   if (operator == "+") {
       p.innerText = num1 + num;
   }
    if (operator == "-") {
        p.innerText = num1 - num;
    }
    if (operator == "/") {
        p.innerText = num1 / num;
    }
    if (operator == "*") {
        p.innerText = num1 * num
    }
}














// const add = function(num1, num2) {

//     return num1 + num2
// };

// const subtract = function(num1, num2) {

//   return num1-num2
// };

// const sum = function(array) {
//     len = array.length
//   let finalNum = 0
//   for (let x = 0; x < len; x++) {
//     finalNum += array.at(x)
//   }

//   return finalNum
// };

// const multiply = function(array) {
//   len = array.length
//   let finalNum = array.at(0) * array.at(1)
//   if (len < 3) {
//     return finalNum
//   } else {
//   for (let x = 2; x < len; x++) {
//     finalNum *= array.at(x)
//   }
//   console.log(finalNum)
//   return finalNum
// }

// };

// const power = function(num1, num2) {
//   let finalNum = num1
//     for (let x = 1; x < num2; x++) {
//     finalNum *= num1
//   }

//   return finalNum
// };

// const factorial = function(num) {
//   let finalNum = 1
//     if (num == 0) {
//     return finalNum
//   } else {
//     for( let x = 2; x <= num; x++){
//       finalNum *= x
//     }
//     return finalNum
//   }
// };