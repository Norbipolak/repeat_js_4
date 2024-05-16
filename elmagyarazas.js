/*
Class példányosítása 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.

fontos, constructor-ban meg kell adni paramétereket!!!!!!!!!!!!!!!!!!!4
ennek az értéke mindig az lesz, hogy this...

mindig a new-val kell meghívni () itt meg mint egy függvénymeghívásnál megadjuk neki az értékeket egy változóban 
a függvényeket meg külön kell meghívni aszerint, hogy melyikre legyen
const person1 = new Person("Alice", 30);
-> 
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
és akkor így lesz Alice meg 30 years old
*/

/*

Constructor Function:

In JavaScript, a constructor function is a special type of function that is used to create objects. 
When you create an object using a constructor function with the new keyword, the function is invoked as a constructor, 
and a new object is created with its own set of properties and methods.

Here's a simple example of a constructor function:
*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Alice", 30);
console.log(person1.name); // Output: Alice
/*
In this example, Person is a constructor function. When you create an instance of Person using new Person("Alice", 30), 
a new object is created with the name and age properties set to the values provided.
************************************************************************************************************************************
Prototype:

In JavaScript, each object has an internal property called [[Prototype]] (also known as __proto__), 
which points to another object called its prototype. The prototype is an object that the instance inherits properties and methods from.

When you access a property or method on an object, JavaScript first checks if that property or method exists on the object itself. 
If it doesn't find it, it looks up the prototype chain until it finds the property or method or 
reaches the end of the chain (usually the Object.prototype).

Inheritance:

In JavaScript, inheritance is achieved through the prototype chain. 
When you set the prototype of one constructor function to the prototype of another constructor function, 
you establish a relationship where objects created by the former constructor inherit properties and methods 
from the latter constructor's prototype.

Here's an example of inheritance using constructor functions:
*/
function Animal() {
    this.sound = "Animal sound";
}

Animal.prototype.makeSound = function() {
    console.log(this.sound);
};

function Cat() {
    Animal.call(this); // Call Animal constructor to initialize properties
    this.sound = "Meow";
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

const cat = new Cat();
cat.makeSound(); // Output: Meow
/*
In this example:

Animal is a constructor function that defines the sound property and a method makeSound.
Cat is another constructor function that inherits from Animal. 
It first calls Animal constructor to initialize properties using Animal.call(this), 
then sets its prototype to a new object created by Object.create(Animal.prototype).

Instances of Cat inherit the makeSound method from Animal.
This way, inheritance allows you to create a hierarchy of objects, 
where each object inherits properties and methods from its prototype, facilitating code reuse and promoting a cleaner design.
*/