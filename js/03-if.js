/*
IF STATEMENT

logikos sablonai


palyginimo operatoriai
- visi: <, >, =, <=, >=, ===, !==, !=, ==
-naudotini:  <, >, =, <=, >=, ===, !==
-nenaudotini: ==, != (nes nera tikrinimas reiksmiu tipas)
*/



const c = 8;
const d = 4;

if (c < d) {
    const cdMaziau = `${c} yra maziau uz ${d}`;
    console.log (cdMaziau);
}   else {
    const cdNeMaziau = `${c} yra NE maziau uz ${d}`;
    console.log (cdNeMaziau);
    }


console.log('--------------------------------------')

const cookiesAgreed = false;

if (true) {
    console.log('Ismetame cookies sutikimo bloka');
}