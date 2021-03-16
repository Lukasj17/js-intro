const nuo = 10;
const iki = 0;
let suma = 0;

if (nuo <= iki) {
    for (let i = nuo; i <= iki; i++) {
        suma += i
    }
} else {
    for (let i = iki; i <= nuo; i++) {
    suma += i;
    }
}

const ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`;

console.log(ats);