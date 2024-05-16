class Animal {
    species; //mezők 
    subspecies;
    color;
    weight;
    legNumbers;
    wingNumbers;

    /*
    A kontruktor egy speciális metódus, minden példányosítás alkalmával lefut.
    Nincs visszatérési értéke. 
    Fogadhat paramétereket 
    */
    constructor(species, subspecies, color, weight, legNumbers, wingNumbers) {
        /*
        itt adunk értéket a field-eknek és mindig a field kulcsszóval fogunk rá hivatkozni 
        most az lesz az értéke, hogy amit itt megadtunk a contructor-ban, mert majd meghívásnál 
        meg fogjuk adni neki ezt az értéket 
        de projecteknél nem adunk meg a constructor-nak paramétereket 
        hanem itt a rögtön megadunk neki értéket és nem a meghívásnál!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        pl. this.btn1 = document.querySelector("#btn-1");
        de jelen esetben megadjuk neki értékként, amit majd meghívásnál megadunk neki 
        */
        this.species = species; //ez pl. a meghívásnál egy kutya lesz 
        this.subspecies = subspecies;
        this.color = color;
        this.weight = weight;
        this.legNumbers = legNumbers;
        this.wingNumbers = wingNumbers;
    }
    /*
    ugyanugy mint egy objektumban itt is lehet function-ök és hivatkozni a field-ekre a this.-vel lehet 
    */
    eat(food) {
        console.log(`A(z) ${this.species} fajú és ${this.subspecies} alfajú állat ${food} eszik`);
    }

    drink(drink) {
        console.log(`A(z) ${this.species} fajú és ${this.subspecies} alfajú állat ${drink} iszik`);
    }
}

/*
fontos különbség, hogy itt a mzőket nem választjuk el ,-vel mint az objektumoknál
*/

//const dog = new Animal(); példányósítás 
/*itt megadjuk neki, hogy mik lesznek a mezők 
mivel ez a példányosítás arról szól, hogy ez a dog az rendelkezni, fog az összes mezővel, metódussal mint az class Animals
fontos, hogyha példányosítani akarunk akkor kell a new meg a () is!!!! 
*/
// dog.species = "kutya";
// dog.subspecies = "Vizsla";
// dog.color = "barna";
// dog.weight = 30;
// dog.legNumbers = 4;
// dog.wingNumbers = 0;
// dog.eat("kutyaeledelt");
// dog.drink("vizet");

// console.log(dog);
/*
{species: 'kutya', subspecies: 'Vizsla', color: 'barna', weight: 30,  legNumbers: 4, wingNumbers: 0}
    color: "barna"
    legNumbers: 4
    species: "kutya"
    subspecies: "Vizsla"
    weight: 30
    wingNumbers: 0
    [[Prototype]]: Object
*/
/*
de ezt lehet úgy is, mivel megvannak ezek a constructor-ben ezek a dologok és úgy is értéket adhatunk neki, hogy 
*/ 
const dog = new Animal("kutya", "Vizsla", "barna", 30, 4, 0);
dog.eat("kutyaeledelt");
dog.drink("vizet");
console.log(dog);
//teljesen ugyanaz jött ki mint az elöbb, csak így sokkal könnyebb, hogy egy sort kellett írni 
/*
ha meg nem akarnánk példányosítani, akkor ezeket az értékeket rögtön meg lehetne adni neki 
a constructor-ben 
this.species = "kutya";
this.subspecies = "Vizsla"
csak akkor így már nem tudunk példányosítani, hiszen azok az értékek fix-ek 
*/

/*
de lehet az Animal-ből ugy akármennyi példány, attól függően, hogy mi mit adunk meg a field-ek értékének, de viszont a field-ek az állandó 
szóval ez a class egy állatra készült és nem egy autóra 
de viszont lehet egy cat 
*/
// const cat = new Animal();
// cat.species = "macska";
// cat.subspecies = "házi";
// cat.color = "fehér-fekete foltos";
// cat.weight = 5;
// cat.legNumbers = 4;
// cat.wingNumbers = 0;

//vagy ugye a másik metódussal amikor rögtön a new Animal-nek a ()-ba adjuk meg az értékeket, mint függvénymeghíváskor 
const cat = new Animal("macska", "házi", "fehér-fekete foltos", 5, 4, 0);
cat.eat("Whiskas");
cat.drink("vizet");
console.log(cat);
/*
és akkor ebből csinált mint az elöbb egy objektumot 
{species: 'macska', subspecies: 'házi', color: 'fehér-fekete foltos', weight: 5, legNumbers: 4, wingNumbers: 0};
    species: "macska"
    subspecies: "házi"
    color: "fehér-fekete foltos"
    weight: 5
    legNumbers: 4
    wingNumbers: 0
    [[Prototype]]: Object
        constructor: class Animal 
        drink: f drink(drink)
        eat: f eat(food)
        [[Prototype]]: Object

Nagyon fontos, hogy ez egy object, de mivel ez a class Animal-ből származtatható ezért rendelkezni fog pl. az összes metódusával 
*/
/*
!!!!!!!!!!!!
Az öröklödés által a leszármazott osztály örökli a szülő osztály mezőit és metódusait 

tehát itt nem páldányosítunk hanem csinálunk egy másik osztályt
és majd ez az osztály örökölni fogja az Animals osztálytól a mezőket és a metódusokat 
Nagyon fontos az extends!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

és ennek is csinálunk egy constructor-t de viszont itt nem teljesen úgy, mint az Animals-ben 
a species mezőt azt ki szereténk hagyni ezért meg kell hívni a super-t!!!!!!!!!!!!!!
ami az ősosztálynak a constructor-ra és ott bele kell égetni amit itt már nem szeretnénk, mintha ott megadtuk volna az értékét 
az ő konstruktorában!!!! 
*/
//ez nagyon fontos!!!!!! 

class Dog extends Animal {
    /*
    kontruktor felüldefiniálás
    Ha öröklünk és felüldefiniáljuk az ősosztály konstruktorát, akkor muszály meghívni a super-t!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    */
    constructor(subspecies, color, weight, legNumbers, wingNumbers){
        super("kutya", subspecies, color, weight, legNumbers, wingNumbers)
    }
    /*
    Metódusokat is felül tudjuk definiálni, de itt nem kell csinálni semmit, csak átírni 
    */
   eat(food) {
    console.log(`A(z) ${this.subspecies} alfajú kutya ${food} eszik.`);
   }

   drink(drink) {
    console.log(`A(z) ${this.subspecies} alfajú kutya ${drink} eszik.`);
   }
}

//és itt meg ezt osztályt, ami már örökölt, tehát származtattuk egy másik osztályból, ezt példányosítjuk

const dog2 = new Dog("Labrador", "brown", 25, 4, 0);
dog2.eat("macskaeledelt");//a labrador alfajú kutya macskaeledelt eszik 
console.log(dog2);
/*
{species: 'kutya', subpecies: 'Labrador', color:'brown', weight: 25, legNumbers: 4, wingNumbers: 0}
    color: "brown"
    legNumbers: 4
    species: "kutya"
    subspecies: "Labrador"
    weight: 25
    wingNumbers: 0
    [[Prototype]]: Animal 
        constructor: class Dog
        drink: f drink(drink)
        eat: f eat(food)
        [[Prototype]]: Object
            constructor: class Animal
            drink: f drink(drink)
            eat: f eat(food)
            [[Prototype]]: Object

és akkor ez már két helyről is örökölt dolgokat a Dog-tól közvetlen meg a Animal-től közvetetten is 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

function Animal2() {
    this.doSomething = function() {
        console.log("Az állat valamit csinál");
    }
}

const animals = new Animal2();
animals.doSomething(); //az állat valamit csinál
/*
function-öknél is van ez a öröklödás meg példányosítás 
itt ebből az Animal2-ből is annyi példányt hozhatnánk létre amennyit szeretnénk és mindegyik rendelkezni fog ezzel a doSomething metódussal

Nagyon fontos a this. a doSomething elött 
ez olyan, mint a class-nak a construktorában a dolgok 
*/
console.log(animals);
/*

Animal2 {doSomething: ƒ}
doSomething: ƒ ()
[[Prototype]]: Object
    constructor: ƒ Animal2()
    [[Prototype]]: Object
        constructor: ƒ Object()
        hasOwnProperty: ƒ hasOwnProperty()
        isPrototypeOf: ƒ isPrototypeOf()
        propertyIsEnumerable: ƒ propertyIsEnumerable()
        toLocaleString: ƒ toLocaleString()
        toString: ƒ toString()
        valueOf: ƒ valueOf()
        __defineGetter__: ƒ __defineGetter__()
        __defineSetter__: ƒ __defineSetter__()
        __lookupGetter__: ƒ __lookupGetter__()
        __lookupSetter__: ƒ __lookupSetter__()
        __proto__: (...)
        get __proto__: ƒ __proto__()
        set __proto__: ƒ __proto__()  
*/
/*
és ugyanígy meg lehet csinálni function-ből is példányokat nem csak class-ból 
*/ 

function Cat(subspecies, color, weight, legNumbers, wingNumbers) {
    this.subspecies = subspecies;
    this.color = color;
    this.weight = weight;
    this.legNumbers = legNumbers;
    this.wingNumbers = wingNumbers;

    this.eat = function(food) {
        console.log(`A(z) ${this.subspecies} alfajú macska ${food} eszik`);
    }
}
//nagyon fontos, hogy itt viszont this-vel kell a függvény is, mert olyan mintha a class constructor-ében lenne 
/*
ezt a function-t is tudjuk példányosítani, teljesen ugyanugy, mint a class-nál 
*/ 

const cat2 = new Cat("Maine Coon", "barna", 5, 4, 0); 
cat2.eat("csirkecsontot");
console.log(cat2);
/*
Ez is megkapta a dolgokat a function Cat-től 
*/ 
/*
Nagyon fontos, hogy nem csak öröklödéssel hanem mi is megadhatjuk a prototype-ot és akkor rendelkezni fog azokkal metódusokkal meg mezőkkel 
*/ 
Object.setPrototypeOf(Cat, Animal2);
console.log(cat2);

//így lehet prototype-ot settelni 
function Animal2() {
    this.doSomething = function() {
        console.log("Az állat valamit csinál");
    }
}

function Cat(subspecies, color, weight, legNumbers, wingNumbers) {
    Animal2.call(this); // Call Animal2 constructor function to initialize properties and methods

    this.subspecies = subspecies;
    this.color = color;
    this.weight = weight;
    this.legNumbers = legNumbers;
    this.wingNumbers = wingNumbers;

    this.eat = function(food) {
        console.log(`A(z) ${this.subspecies} alfajú macska ${food} eszik`);
    }
}

const cat2 = new Cat("Maine Coon", "barna", 5, 4, 0); 
cat2.eat("csirkecsontot");
cat2.doSomething(); // This will throw an error unless Animal2's prototype is set to Cat

Object.setPrototypeOf(Cat.prototype, Animal2.prototype); // Setting Cat's prototype to Animal2's prototype

// Now you can call doSomething method on cat2
cat2.doSomething();


