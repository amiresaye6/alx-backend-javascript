// template letral
const name = `amir`
console.log(`hi ${name}`)

const userNamesList = {
    firstName: "amir",
    lastName: "alsayed",
    city: "alsharquia",
    age: 21,
    date: "552002"
}

let {firstName: fn, lastName: last} = userNamesList;
console.log(`${fn} ${last}`);

const [firstName, middleName] = ['amir', 'alsayed', 'abdulsamea'];
console.log([firstName]);
console.log([firstName, middleName]);
let txt = "";
for (const name in userNamesList) {
    txt += name + ' ';
}
console.log(txt);

console.log(txt);

let fullName = "amir Alsayed Abdulsamea";
for (const char of fullName) {
    console.log(char);
}

// spread operator
let example1 = [1,2,3,4,5,6,7,8,9];
let example2 = [...example1]; // unraps example1 values in example2 list

let classOne = {
    firstName_: "default",
    lastName_: "defaultt"
}

let amirAlsayed = {...classOne};
let ammm = {
    ...classOne
};
console.log(amirAlsayed.firstName_);
amirAlsayed.firstName_ = "amir";
console.log(amirAlsayed.firstName_);

function sumAll(...nums) { // rest operator userd if you dont know how many args are being bassed to the function
    let res = 0;
    for (const i of nums) {
        res += i;
    }
    return res;
}
//arrow function :anonimous:
function add (...nubers) {
    let total = nubers.reduce((x, y) => x + y);
    console.log(total);
}

//default paramters

function addd (arrayone = []) {
    let total = 0;
    arrayone.forEach((elment) => {
    total += elment;
    })
    console.log(total);
}

//includes
let nums = [1,2,3,4,5,6];
console.log(nums.includes(77)); // false
console.log(nums.includes(2)); // true

// import functions and stuff
import getSumOfHoods from './5-spread-operator';
let getSumOfHoods = new getSumOfHoods();


// classes

export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeSound(sound = "loud noise") {
        console.log(sound);
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    static return10() {
        return 10;
    }
}

export class Cat extends Animal{
    constructor(type, legs, tail) { //overload
        super(type, legs);
        this.tail = tail;
    }
    makeSound(sound = "aaaaa"){ //override
        console.log(sound);
    }
}

import { Animal }from `./notes.js`;

const cat = new Animal("cat", 4);

cat.legs = 16;
console.log(cat.makeSound());
Animal.return10();

const apiUrl = "https://random.api.com/get/any/data/you/want";

function getFirstThing() {
    fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
        console.log(json[0]);
    }).catch((error) => {
        console.log("failed to fetch:<");
    })
}
getFirstThing();


async function asyncFunction() {
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json[0]);
}
// unique values only.
const example = new set([1,1,1,2,1,3,4,5,6,7,7,7])
example.add(5); // if it is not at the set, it will be added
example.delete(1); // will return bolean if it was successfully deleted
example.clear()// clear the set
example.has("hi"); // return false, if found return true;
