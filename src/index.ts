let broj: number = 5;
console.log('broj:', broj);
console.log(`broj je ${broj}`);

// Basic Types
let id: number = 5;
let company: string = 'Mickey Coding';
let isPublished: boolean = true;
let x: any = 'Good Morning';
x = true; // x is now boolean
let age: number;
age = 30;

//this tells that this is an array of numbers
let ids: number[] = [1, 2, 3, 4, 5];
// ids.push('paja'); this gives an error
let persons: string[] = ['Mickey', 'Coding', 'Cat'];
let arrayNew: any[] = [1, true, 'Mickey'];

// Tuple (array which has has different types of data in it )
let person: [number, string, boolean] = [1, 'Mickey', true];

//Tuple Array
let employee: [number, string][];
employee = [
    [1, 'Mickey'],
    [2, 'Cat'],
    [3, 'Cow']
];

//Union, can be set as one of each
let pId: string | number;
pId = 22;

//Enum, their numers starts from 0, or how you tell
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
};

console.log(Direction1.Up);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
};

console.log(Direction2.Up);