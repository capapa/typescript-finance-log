"use strict";
let greet;
greet = () => {
    console.log('hello!');
};
const add = (a, b, c, d = 10) => {
    console.log(a + b);
    console.log(c);
    console.log(d);
};
add(5, 7);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 2);
