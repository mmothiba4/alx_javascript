#!usr/bin/node
const myObject = {
    type: 'object'
    value: 12
};
console.log(myObject);

function incr() {
    this.value++;
};

myObject.incr(13);
console.log(myObject);
myObject.incr(14);
console.log(myObject);
myObject.incr(15);
console.log(myObject);