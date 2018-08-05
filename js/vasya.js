"use strict";

var word = prompt("Введи слово");

function ucFirst(str) {
    if (str !== "") {
        return str.replace(str[0], str[0].toUpperCase());
    }
}

alert(ucFirst(word));