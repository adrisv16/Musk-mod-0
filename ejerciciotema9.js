const crypto = require('crypto');

const lista = Array.from({length: 100000}, () => Math.floor(Math.random() * 100000));
let listaBurbuja = lista.slice();
console.time("El algoritmo bubble sort ha tardado");
for (let i = 0; i < listaBurbuja.length - 1; i++){
    for(let j = 0; j < listaBurbuja.length - 1 - i; j++){
        if (listaBurbuja[j] > listaBurbuja[j +1]){
            const aux = listaBurbuja[j];
            listaBurbuja[j] = listaBurbuja[j + 1];
            listaBurbuja[j + 1] = aux;
        }
    }

}
console.timeEnd("El algoritmo bubble sort ha tardado"); 