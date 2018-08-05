"use strict";

var first = prompt("Введи первое число", "");
var second = prompt("Введи второе число", "");

function min (first, second) {
    return (first > second) ? second : first;
}

alert( min(first, second) );




