class Car {
    constructor() {
        this.parktronic = false;
        this.price = 20000;
        this.model = 'Car';
        this.color = 'white';
    }

    getColor() {
        return this.color;
    }

    getPrice() {
        return this.price;
    }

    getModel() {
        return this.model;
    }

    addAutopilot() {
        this.car.autopilot = false;
    }

    addParctronic() {
        this.car.parctronic = false;
    }

    getDescription() {
        return this.model;
    }
} 

class WV extends Car {
    constructor() {
        super();
        this.price = 50000;
        this.model = 'WV'
    }
}

class Parktronic {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 1000;
    }

    addParctronic() {
        this.car.parktronic = true;
    }

    getDescription() {
        return `${this.car.getDescription()} + parktronic `
    }
}

class Autopilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 3000;
    }

    addAutopilot() {
        this.car.autopilot = true;
    }

    getDescription() {
        return `${this.car.getDescription()} + autopilot `
    }
}

let car = new WV();
console.log(car.getDescription())
car = new Autopilot(car);
car = new Parktronic(car);
// //
console.log(car.getPrice(), car.getDescription());
//
// // console.log(car)
//
// let car1 = new WV();
// car1 = new Parktronic(car1);
//
// console.log(car1.getPrice(), car1.getDescription(), car1.addParctronic(true));
//
// console.log(car1);
