import fse from 'fs-extra';

fse.ensureDir('./One');

let a: number = 25;
let s: string = 'str';
let b: boolean = true;
let n: null = null;
let un: undefined;
let obj: object = {};
let arr: string[] = ['str', '12'];
let arr1: number[] = [5, 12];
let any1: any = 'string';
let any2: any[] = ['string', 12, true];

function add(value1: number, value2: number): number {
    return value1 + value2;
}
//
// console.log(add(2, 4))
//
// enum Color {
//     red = 'red', green = 2, blue = 3
// }
//
// let color = Color.red;
// console.log(color);
// console.log(Color.green);

function print(message: string): void {
    console.log(message);
}

const arrTuple: [string, boolean, null, number, string] = ['str', true, null, 15, 'str'];

let newVar: number | string | boolean = 14;
newVar = 'str';

// add(2);
function returnMessage(greet: string, name: string, age: number, aditionalMessage?: string): string {
    return `${greet}, ${name}!!! Are you ${age} years old? ${aditionalMessage || ' '}`
}

// console.log(returnMessage('Hello', 'Dasha', 18));

function overload(value: string, value1: string): string;
function overload(value: number, value1: number): number;

function overload(value, value1) {
    return value + value1;
}

// console.log(overload('str', 'str'));
// console.log(overload(10, 14));

function consoleMessage<T>(message: T): string {
    console.log(typeof message);
    return typeof message;
}

// consoleMessage('Hello');
// consoleMessage(123);
// consoleMessage(true);
// consoleMessage(null);

class Vehicle {
    private async greet(): Promise<string> {
        console.log('Hello')
        return 'Hello'
    };

    protected async add(): Promise<number> {
        console.log(2 + 3)
        return 2 + 3;
    }

    public async addOne(): Promise<boolean> {
        console.log(true)
        return true;
    }

    public async resolveFunction() {
        await this.greet();
        await this.add();
        await this.addOne();
    }
}

class Car extends Vehicle {
    public variable;
    private sum;
    protected newSum;
    readonly hello = 'Hello';
    constructor() {
        super();
    }

    public async resultFunction() {
        await this.add();
        await this.addOne()
    }
}

// const vehicle = new Vehicle();
// vehicle.addOne();
// vehicle.resolveFunction();

const car = new Car();

// car.hello = 'new';

abstract class Person {
    static move() {
        return 'I am running'
    }
}

// const person = new Person();

Person.move();

interface CarInterface {
    model: string,
    speed: number,
    color: string,
    transmission: TransmissionInterface,
    parktronicType?: string,
    signalType?: string
}

interface NewCarInterface {
    model: string,
    speed: number,
    color: string,
    transmission: TransmissionInterface,
    kuzow: string,
    weight: number
}

const toyota: CarInterface = {
    model: 'Camry',
    speed: 220,
    color: 'white',
    transmission: {
        automatic: true,
        numberOfSpeeds: 6
    },
}

type CarType = {
    model: string,
    speed: number,
    color: string,
    transmission: TransmissionInterface,
    parktronicType?: string
}

interface TransmissionInterface {
    automatic: boolean,
    numberOfSpeeds: number
}

const honda: CarType = {
    model: 'civic',
    speed: 200,
    color: 'silver',
    transmission: {
        automatic: false,
        numberOfSpeeds: 6
    },
}

type NewCarType = CarInterface | NewCarInterface;

const audi: NewCarType = {
    model: 'Camry',
    speed: 220,
    color: 'white',
    transmission: {
        automatic: true,
        numberOfSpeeds: 6
    },
    kuzow: 'string',
    weight: 3000,
    parktronicType: 'str'
}


let age = 17;
// if(age > 18) {
//     console.log('Hello')
// } else {
//     console.log('GO away')
// }

let result = age > 18 ? 'Hello' : 'Go away';
console.log(result)

export { toyota, audi };