"use strict";

var mainNumber = 100;

function biggerThan(mainNumber) {

    var customNumber;

    while (customNumber < mainNumber || isNaN(customNumber)) {
        customNumber = prompt('Введи число не меньше ' + mainNumber);
        if (customNumber === null) {
            return;
        } else {
            customNumber = Number(customNumber);
        }
    }
}

biggerThan(mainNumber);
