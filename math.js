/*
pow -> hatványozás
sqrt -> négyzetgyök 
floor -> lefele 
ceil -> felfele 
round -> matematika szabályai szerint 
*/
const number = Math.random();
console.log(number);
/*
ez visszaad egy számot 0-1 között 
*/

const number2 = Math.floor(Math.random());
console.log(number2); //ez mindig nulla lesz, mert a Math.random visszaad egy számot 0-1 között és azt lefele kerekítjük 

const number3 = Math.floor(Math.random() * 2);
console.log(number3); // ez visszad egy számot 0-1 között
/*
ha a Math.random egy olyan számot ad vissza, ami kisebb mint 0.5 akkor azt * 2 -vel és még kisebb lesz, mint 1 akkor lefelé kerekítve nulla lesz 
ha meg nagyobb lesz * 2-vel a szám, akkor lefele kerekítve mindig 1 lesz 

az a lényeg, hogy így ha beszorozzuk valamivel, akkor mindig 0 és az a szám, amivel beszoroztuk -1 között kapunk egy egész számot!! 
*/ 

const number4 = Math.floor(Math.random() * 11);
console.log(number4); // visszakapunk egy számot 0 és 10 között 

const number5 = Math.floor(Math.random() * 10) + 1;
console.log(number5);
/*
Visszakapunk egy számot 1-10 között, mert ha nem lenne a + 1, akkor visszakapnánk egy számot 0-9 között, de mivel hozzáadtunk 1-et, ezért 
1-10-ig  
*/

const add = (from, to)=> Math.floor(Math.random() * (to-from + 1))+ from;
const add1 = add(10,16);
console.log(add1);

/*
from az, hogy honnan induljon, olyan, mint itt előbb hozzáadtunk egyet és akkor onnan indul!!! 
Math.random-ot meg mindig egyel többel kell megszorozni!!!! 
********************************************************************************************************************************************
*/

/*
N tizedesre való kerekítés 
*/

const roundN = (number, digits)=> Math.round(number * 10**digits)/10**digits;
console.log(roundN(5.234325, 2));

const round = Math.round(58.3234456);
console.log(round); //58

const roundA = Math.round(58.3234456 * 100)/100;
console.log(roundA); //58.32

/*
Ugye round az a matematika szabályai szerint kerekít egész számra 
58.3234456 -> 58
de ha viszont két tizedesjegy pontossággal szeretnénk ezt megkapni akkor be kell szorozni 100-val majd az a round lekerekíti és a végén 
elosztani 100-val 

58.3234456 * 100 -> 5832.34456 -> most jön a Math.round -> 5832 -> elosztjuk 100-val 58.32

const roundN = (number, digits)=> Math.round(number * 10**digits)/10**digits;

itt meg a digits, hogy hányadikra emeljük a 10-et utána azt Math.random, majd elosztjuk ugyanannyivel, tehát 10**digits-vel 
és akkor mindig annyi tizedes lesz, mint a digits!!!!! 
*/

//itt meg kerekítünk egész számot 
const roundEnd = (number, end)=> Math.round(number / end) * end;
console.log(roundEnd(123, 4));//mindig olyan oszthatóval kerekítünk, mint az end!! -> 124
console.log(roundEnd(121, 5));//120
/*
123/4 = 30.75 -> Math.round -> 31 -> 31 * 4 = 124
121/5 = 24.2 -> Math.round -> 24 -> 24 * 5 = 120
*/


/*
nagyon fontos, hogyha 
1. kerekíteni akarunk tizedesjegyre akkor a 10 hatványaival szorzunk -> Math.round -> 10 hatványaival osztunk 
2. hogyha egy bizonyos számra akarunk kerekíteni
számot elosztjuk annyival amennyivel kerekíteni szeretnénk Math.round megszorozzuk amennyire kerekíteni szeretnénk
*/ 

const d = new Date();
const hour = d.getHours();
const minute = d.getMinutes()
const second = d.getSeconds()


function clock() {
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes()
    let second = d.getSeconds()

    second++;
    if(second === 60) {
        second = 0;
        minute++;
        if(minute === 60) {
            minute = 0;
            hour++;
            if(hour === 24)
                hour = 0;
        }
    }

    hour = hour.toString().padStart(2, "0");
    minute = minute.toString().padStart(2, "0");
    second = second.toString().padStart(2, "0");

    return `${hour}:${minute}:${second}`;
}

console.log(clock());


/*
1. létre kell hozni egy új változóban ezt a new Date()-t 
majd ennek vannak különböző metodusai a Date-nek 
getHours, getMinutes, getSeconds

nagyon fontos, hogy ez egy number-t ad vissza értékként és ha mi azt szeretnénk, hogy padStart-val elé rakjunk egy 0-át a minutes és seconds-hoz
hogy ne így nézzen ki 12:1:2 hanem így 12:01:02
ezt toString-elni, kell, mert a padStart egy string metódus, ami csak string-eknél müködik 

const d = new Date();
const hour = d.getHours();
const minute = d.getMinutes().toString().padStart(2, "0");
const second = d.getSeconds().toString().padStart(2, "0");
console.log(`${hour}:${minute}:${second}`); //16:05:34


*/



