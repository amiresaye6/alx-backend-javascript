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
