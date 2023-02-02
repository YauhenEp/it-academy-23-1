const person = {
    name: 'Ya',
    surname: 'Bi',
    car: 'Toyota',
    age: 30,
    _isMarried: true,
    nation: 'Bel',
    voice: function () {
        console.log(`Hello, ${this.name} ${this.surname}`);
    },
    family: {
        isKidding: true,
        numberOfChildren: 1,
        firstKid: {

        }
    },
    getName: function () {
        return this.name;
    },
    setName: function (newName) {
        this.name = newName;
    },
    array: [],
    toString: function () {
        return 'String';
    }
}

// console.log(person.#nation)

// console.log(person.age);
// console.log(person['car']);
// person.voice();

person.car = 'Tesla'
// console.log(person['car']);
person.age = 31;

// for(let key in person) {
//     console.log(person[key])
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))
// console.log(person.toString())
// console.log(person.valueOf())

// console.log(Object.getOwnPropertyDescriptor(person, 'name'))

// Object.defineProperty(person, 'name', {
//     writable: false
// })
//
// console.log(Object.getOwnPropertyDescriptor(person, 'name'))
//
// person.name = 'Masha'

Object.defineProperty(person, 'name', {
    enumerable: false
});

Object.defineProperty(person, 'name', {
    configurable: false
})
person.name = 'Masha'
// for(let key in person) {
//     console.log(person[key])
// }
// console.log(person);
// console.log(person.getName());


// Object.defineProperty(person, 'name', {
//     writable: false
// });

// person.setName('Natasha');
// console.log(person.getName())
// console.log(person.toString())

person._isMarried = false;
console.log(person._isMarried);

const obj1 = Object.create({});
const obj2 = {prop: 'Property'};
const obj3 = Object.create(obj2);

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// console.log(obj3.prop);
// console.log(obj2.isPrototypeOf(obj1))
// console.log(obj2.isPrototypeOf(obj3))

obj2.car = 'R'
console.log(obj3.car);

const car = {
    init: function (color, model) {
        this.color = color;
        this.model = model;
    },

    setColor: function (color) {
        this.color = color
    }
}
// const newCar = Object.create(car);
// const newNewCar = Object.create(car);
// newCar.init('Red', 'S')
// newCar.init('Green', 'M')
// console.log(newCar);
// console.log(newCar.color);
// console.log(newCar.model);


function Car(model, color) {
    this.model = model;
    this.color = color;
}

const bmv = new Car('BMV', 'Black')
const toyota = new Car('Toyota', 'Green')

Car.prototype.getModel = function () {
    return this.model
}

Car.prototype.setModel = function (model) {
    this.model = model
}

Car.prototype.getColor = function () {
    return this.color
}

Car.prototype.setColor = function (color) {
    this.color = color
}

// console.log(bmv.getColor())
// bmv.setColor('White')
// console.log(bmv.getColor())

class Animal {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.mamel = true;
    }

    voice() {
        console.log('Voice')
    }
}

// const bear = new Animal('bear', 'brown')
// console.log(bear);
// const cat = new Animal('cat', 'white')
// console.log(cat);
// cat.voice();

class Predator extends Animal {
    #bearChild = false;
    bearWife = true;
    constructor(type, color, eyes) {
        super(type, color);
        this.predator = true;
        this.eyes = eyes
    }

    startHunt() {
        return 'Predator start hunt';
    }

    voice() {
        console.log('Bear Voice')
    }

    get() {
        return this.#bearChild;
    }

    set(status) {
        this.#bearChild = status;
    }
}

const bear = new Predator('bear', 'brown', 'green')

bear.voice();
console.log(bear);
console.log(bear.startHunt());

console.log(bear.bearWife);
// console.log(bear.#bearChild);
// console.log(bear.bearChild);
console.log(bear.get());
console.log(bear.set(true));
console.log(bear.get());