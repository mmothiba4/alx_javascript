#!/usr/bin/Node
module.exports = class Square extends requestAnimationFrame('./4-Rectangle.js') {
    constructor (size) {
        super(size, size);
    }
};