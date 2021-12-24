// Observables y Suscripcion

const { from, of } = require("rxjs");
const { delay, concatMap } = require("rxjs/operators");


const frutas = ["pera", "sandia", "manzana", "naranja"];

// nuestro observable
const frutasObs = from(frutas).pipe(
    concatMap(item => of(item).pipe(delay(1000))) // 1 segundo
);

console.log("Voy a comprar frutas");

frutasObs.subscribe((fruta) => {
    console.log(`Me llegó una ${fruta}`);
});

console.log("Ya compré frutas");
