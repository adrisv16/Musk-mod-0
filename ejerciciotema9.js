const crypto = require('crypto');

const heroes = [
  'Cloud', 'Tifa', 'Aerith', 'Sephiroth', 'Squall', 'Zidane', 'Yuna', 'Tidus', 'Lightning'
];

const listaHeroes = heroes.map(hero => ({
  nombre: hero,
  nivelPoder: Math.floor(Math.random() * 100) 
}));

console.log("Lista de héroes sin ordenar:");
console.table(listaHeroes);

let listaOrdenada = listaHeroes.slice();
console.time("Tiempo de batalla (ordenamiento Bubble Sort)");


for (let i = 0; i < listaOrdenada.length - 1; i++) {
  for (let j = 0; j < listaOrdenada.length - 1 - i; j++) {
    if (listaOrdenada[j].nivelPoder < listaOrdenada[j + 1].nivelPoder) { 
      console.log(`¡Combate entre ${listaOrdenada[j].nombre} y ${listaOrdenada[j + 1].nombre}!`);

      const aux = listaOrdenada[j];
      listaOrdenada[j] = listaOrdenada[j + 1];
      listaOrdenada[j + 1] = aux;
    }
  }
}

console.timeEnd("Tiempo de batalla (ordenamiento Bubble Sort)");
console.log("Lista de héroes ordenada por nivel de poder:");
console.table(listaOrdenada);
