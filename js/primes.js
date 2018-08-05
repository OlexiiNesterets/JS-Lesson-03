"use strict";

function primes() {

    var start = Number(prompt('Введите нижнюю границу поиска'));
    var limit = Number(prompt('Введите верхнюю границу поиска'));

    if ((start > 1) &&
        (start <= limit) &&
        (Number.isInteger(start)) &&
        (Number.isInteger(limit))) {

        var primesList = [];
        var listIndex = 0;
        var potentialPrime = start;

        while (potentialPrime <= limit) {

            if ((potentialPrime === 2) || (potentialPrime === 3)) {
                primesList[listIndex++] = potentialPrime;
            }

            var checkingLimit = Math.sqrt(potentialPrime);

            for (var i = 2; i <= checkingLimit; i++) {
                var result = potentialPrime / i;
                if (Number.isInteger(result)) {
                    break;
                } else if ((i + 1) > checkingLimit) {
                    primesList[listIndex++] = potentialPrime;
                }
            }
            potentialPrime++;
        }
        alert(primesList);
    } else {
        alert('Допущена ошибка в исходных данных');
    }
}

primes();
