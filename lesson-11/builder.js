class VW {
    constructor() {
        this.parktronic = false;
        this.signal = false;
        this.model = 'Polo';
        this.color = 'white';
    }
} 

class CarBuilder {
    constructor() {
        this.car = new VW();
    }

    addParktronic(parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }

    addSignal(signal) {
        this.car.signal = signal;
        return this;
    }

    changeModel(model) {
        this.car.model = model;
        return this;
    }

    changeColor(color) {
        this.car.color = color;
        return this;
    }

    addAutopilot(autopilot) {
        this.car.autipilot = autopilot;
        return this;
    }

    build() {
        return this.car;
    }
}

let car = new CarBuilder().addParktronic(true).changeColor('black').addAutopilot('newAutopilot').build();

console.log(car);

let car1 = new CarBuilder().changeModel('Passat').addSignal(true).changeColor('pink').addAutopilot('Super new').build();

console.log(car1);

let car2 = new CarBuilder().changeModel('Jetta').changeColor('silver').build();
console.log(car2);
