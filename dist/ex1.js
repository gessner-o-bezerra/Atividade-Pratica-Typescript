"use strict";
function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    return {
        media,
        aprovado: media >= 6,
    };
}
console.log(calcularMedia(7, 5));
