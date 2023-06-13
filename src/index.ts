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

// Objects
type User = {
    id: number
    name: string
  }
  
  const user: User = {
    id: 1,
    name: 'Mickey',
  }
  
  // Type Assertion
  let cid: any = 1
  // let customerId = <number>cid
  let customerId = cid as number
  
  // Functions
  function addNum(x: number, y: number): number {
    return x + y
  }
  
  // Void
  function log(message: string | number): void {
    console.log(message)
  }
  
  // Interfaces
  interface UserInterface {
    readonly id: number
    name: string
    age?: number
  }
  
  const user1: UserInterface = {
    id: 1,
    name: 'Pajalone',
  }
  
  interface MathFunc {
    (x: number, y: number): number
  }
  
  const add: MathFunc = (x: number, y: number): number => x + y
  const sub: MathFunc = (x: number, y: number): number => x - y
  
  interface PersonInterface {
    id: number
    name: string
    register(): string
  }
  
  // Classes
  class Person implements PersonInterface {
    id: number
    name: string
  
    constructor(id: number, name: string) {
      this.id = id
      this.name = name
    }
  
    register() {
      return `${this.name} is now registered`
    }
  }
  
  const brad = new Person(1, 'Mikcey Coding')
  const mike = new Person(2, 'Pajalone Mikic')
  
  // Subclasses
  class Employee extends Person {
    position: string
  
    constructor(id: number, name: string, position: string) {
      super(id, name)
      this.position = position
    }
  }
  
  const emp = new Employee(3, 'Sofi', 'Developer')
  
  // Generics
  function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
  }
  
  let numArray = getArray<number>([1, 2, 3, 4])
  let strArray = getArray<string>(['brad', 'John', 'Jill'])
  
  numArray.push(1);