#!/usr/bin/Node
module.exports = class Square extends require('./5-square.js') {
    charPrint (c) {
        if (c === undefined) {
            this.charPrint();
        }
        else {
            for (let i = 0; i < this.height; i++) console.log(c.repeat(this.width));
        }
    }
};