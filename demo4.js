// Disposables
// Observable 1 con "frutas" y Observable 2 "verduras" pasara por un "pipe" para Observable 3 y asi tener Combinacion

const { from, of, zip } = require("rxjs");
const { delay, concatMap, map } = require("rxjs/operators");


const frutas = ["pera", "sandia", "manzana", "naranja"];
const verduras = ["lechuga", "acelga", "apio", "espinaca", "zanahoria"];

// Observable 1
const frutasObs = from(frutas).pipe(
    concatMap(item => of(item).pipe(delay(1000))) // 1 segundo
);

// Observable 2
const verdurasObs = from(verduras);

// Observable 3 - Combinacion
const frutasYVerdurasObs = zip(frutasObs, verdurasObs);

// Nuestro suscriptor
const disposable = frutasYVerdurasObs.subscribe(frutaYVerdura => {
    console.log(`Me llegó una ${frutaYVerdura}`);
});

// Liberar memoria
setTimeout(() => {
    console.log("Terminando suscripcion");
    disposable.unsubscribe();
}, 5000);

