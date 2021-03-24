/*
JS galimi ciklai ir cikliskos funkcijos/metodai

-for
-for-in
-for-on
-while
-do-while
-foreach
-map
-filter
-reduce
-sort

*/


const list = [1, -5, 78, 2, 11, -15, 0, -3];

// FOR
// break: nutraukia ciklo darba 
// continue: eiti i sekancia ciklo operacija, jei tokia yra

for (let i = 0; i<list.length; i++) {
    const item = list[i];
    if (item > 0) {
        continue;
    }
    console.log(item);
}


// FOR-IN

for (const index in list) {
    console.log(list);
}

// FOR-OF
for (const item of list) {
    console.log(item);
}
console.clear();


let randomNumber = 0;
let randomNumberCount = 0;

while (randomNumber < 0.9) {
randomNumber = Math.random();
    randomNumberCount++
    console.log(randomNumberCount, randomNumber);
}
