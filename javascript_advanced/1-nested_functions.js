#!/usr/bin/node
const globalVariable = "Welcome"
function outer() {
    alert(globalVariable());

const course = "Holberton"
function inner() {
    alert('globalVariable' + course)
}

const exclamation = !
function inception() {
    alert(globalVariable, + course + exclamation);
    console.log(globalVariable);
}
console.log(course);

}
console.log(outer);