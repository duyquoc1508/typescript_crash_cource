// Basic type
let id: number = 5;
let str: string = 'Hello';
let isPublished: boolean = true;
let x: any = 'any';

let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, 'haha', '343'];

// Tuple
let person: [number, string, boolean] = [1, 'An', true];
// Tupple array
let employee: [number, string][];
employee = [
  [1, 'Nguyen Van A'],
  [2, 'Ngo Thi B']
]

// Union
let pid: string | number;
pid = 1;

// Enum
enum Direction {
  Up,
  Down,
  Right,
  Left
}
console.log(Direction.Left)

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Right = 'Right',
  Left = 'Left',
}

// Object
type User = {
  id: number,
  name: string
}
const user: User = {
  id: 1,
  name: 'Nguyen Van A'
}


// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number
console.log(customerId)

// Function
function addNum(x: number, y: number): number {
  return x + y
}

// void
function log(message: string | number): void {
  console.log(message)
}

// Interface
interface UserInterface {
  readonly id: number
  name: string,
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'Nguyen Van A',
  // age: 23
}


interface MathFnc {
  (x: number, y: number): number
}

const add: MathFnc = (x: number, y: number): number =>  x + y;
const sub: MathFnc = (x: number, y: number): number =>  x - y;

interface PersonInterface {
  id: number
  name: string,
  register(): string
}

// Class
class Person implements PersonInterface {
  id: number // public, private, protected
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`
  }
}
const data = new Person(1 , 'Nguyen Van A');
// console.log(data.id)
console.log(data.register())

// subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }

  setPosition(position: string):void {
    this.position = position
  }
}

const emp = new Employee(3, 'Quoc', 'Developer');
console.log(emp.register())
emp.setPosition('Director');
console.log(emp)

// Generic
// function getArray(item: any[]): any[] { // if u want all item in array is same dynamic typeof. number[], string[] => usr generic
//   return new Array().concat(item);
// }

// let numArr = getArray([1,2,3,4,5,6]);
// let strArr = getArray(['hello', 'my', 'name', 'is'])

function getArray<T>(item: T[]): T[] { // if u want all item in array is same dynamic typeof. number[], string[] => usr generic
  return new Array().concat(item);
}

let numArr = getArray<number>([1,2,3,4,5,6]);
let strArr = getArray<string>(['hello', 'my', 'name', 'is']) 