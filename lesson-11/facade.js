class Car {
    setCabin() {
        console.log(`Cabine is ready`);
    }

    setEngine() {
        console.log(`Engine is ready`);
    }

    setTransmission() {
        console.log(`Transmission is ready`)
    }

    setInterier() {
        console.log(`Interier is ready`);
    }

    paintCar() {
        console.log(`Car is painted`)
    }

    setWheels() {
        console.log(`Wheels is setted`)
    }
}

class CarFacade {
    constructor(car) {
        this.car = car;
    }
    buildCar() {
        this.car.setCabin();
        this.car.setEngine();
        this.car.setTransmission();
        this.car.setInterier();
        this.car.paintCar();
        this.car.setWheels();
    }

    buildCabrio() {
        this.car.setEngine();
        this.car.setTransmission();
        this.car.setInterier();
        this.car.paintCar();
        this.car.setWheels();
    }

    buildSimpleCar() {
        this.car.setEngine();
        this.car.setTransmission();
        this.car.setWheels();
    }
}

let car = new CarFacade(new Car());
// car.buildCar();
car.buildCabrio();
car.buildSimpleCar();

// console.log(buildCar)

// let car1 = new CarFacade(new Car());
// let buildCar1 = car1.buildCabrio();
//
//
// let car2 = new CarFacade(new Car());
// let buildCar2 = car1.buildSimpleCar();
