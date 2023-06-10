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
