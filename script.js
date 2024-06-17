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

function addOperator(op) {
    p.innerText += " " + op + "  ";
}
function addNum(num) {
    p.innerText += num
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
    p.innerText = eval(p.innerText);
}
