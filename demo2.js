// Transformar un Observable
// Observable 1 con "frutas" pasara por un "pipe" para Observable 2 y asi tener "frutas picadas"

const { from, of } = require("rxjs");
const { delay, concatMap, map } = require("rxjs/operators");


const frutas = ["pera", "sandia", "manzana", "naranja"];

// Observable 1
const frutasObs = from(frutas).pipe(
    concatMap(item => of(item).pipe(delay(1000))) // 1 segundo
);

// Function
const picarFruta = (fruta) => {
    return `${fruta} picada`;
};

// Observable 2
const frutasPicadasObs = frutasObs.pipe(map(picarFruta));


// Nuestro suscriptor
frutasPicadasObs.subscribe((fruta) => {
    console.log(`Me llegó una ${fruta}`);
});

