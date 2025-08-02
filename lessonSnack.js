/* Snack 1,
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

const cars = [
    {
        marca: "Fiat",
        modello: "Punto",
        alimentazione: "Benzina"
    },
    {
        marca: "Renault",
        modello: "106",
        alimentazione: "diesel"
    },
    {
        marca: "Fiat",
        modello: "Panda",
        alimentazione: " metano"
    },
    {
        marca: "Fiat",
        modello: "Uno",
        alimentazione: "gpl"
    },
    {
        marca: "Renault",
        modello: "208",
        alimentazione: "elettrico"
    },
    {
        marca: "Alfa Romeo",
        modello: "Giulia",
        alimentazione: "gpl"
    },
    {
        marca: "Renault",
        modello: "308",
        alimentazione: "Benzina"
    },
    {
        marca: "Fiat",
        modello: "Tipo",
        alimentazione: "gpl"
    },
    {
        marca: "Fiat",
        modello: "500",
        alimentazione: "diesel"
    },
    {
        marca: "Alfa Romeo",
        modello: "GTV",
        alimentazione: "elettrico"
    }
]

const autoBenzina = cars.filter(car => car.alimentazione === "Benzina");
const autoDiesel = cars.filter(car => car.alimentazione === "diesel");
const autoMiste = cars.filter(car => car.alimentazione != "diesel" & car.alimentazione != "Benzina");

console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoMiste);




/* Snack 2,
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola. */

const names_2 = ["giordania", "atlanta", "marte"];

const formattedNames = names_2.map(name => {
    return name[0].toUpperCase() + name.slice(1)
})


console.log(formattedNames);

/* Snack 3,
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi */






/* Snack 4,
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */