#!/usr/bin/node
function divideBy(firstNumber){
    return function(secondNumber){
        console.log(parseInt(secondNumber)/parseInt(firstNumber));
    }
}

function addBy(firstNumber) {
    return function(secondNumber){
        return(firstNumber + secondNumber)
    }

    const addBy100 = (function() {
        let counter = 0
        return function () {counter += 100; return counter}
    })();
}

const addBy1000 = ( function () {
    let counter = 1000
    return function () {counter+=1000; return counter}
})();

const divideBy10 = ( function () {
    let counter = 10
    return function () {counter+=10; return counter}
})();

const divideBy1000 = ( function () {
    let counter = 1000
    return function () {counter+=1000; return counter}
})();
