"use strict";
let broj = 5;
console.log('broj:', broj);
console.log(`broj je ${broj}`);
// Basic Types
let id = 5;
let company = 'Mickey Coding';
let isPublished = true;
let x = 'Good Morning';
x = true; // x is now boolean
let age;
age = 30;
//this tells that this is an array of numbers
let ids = [1, 2, 3, 4, 5];
// ids.push('paja'); this gives an error
let persons = ['Mickey', 'Coding', 'Cat'];
let arrayNew = [1, true, 'Mickey'];
// Tuple (array which has has different types of data in it )
let person = [1, 'Mickey', true];
//Tuple Array
let employee;
employee = [
    [1, 'Mickey'],
    [2, 'Cat'],
    [3, 'Cow']
];
//Union, can be set as one of each
let pId;
pId = 22;
//Enum, their numers starts from 0, or how you tell
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
;
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
;
console.log(Direction2.Up);
const user = {
    id: 1,
    name: 'Mickey',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Pajalone',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Mikcey Coding');
const mike = new Person(2, 'Pajalone Mikic');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Sofi', 'Developer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'John', 'Jill']);
numArray.push(1);
