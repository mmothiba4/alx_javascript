#!/usr/bin/node
//A fike that modifies the value of myVar to 333.

const myVar = 89
require('./100_let_me_const')
console.log(myVar);
module.exports = function(){
    require('./100_main')
    myVar = 333;
}