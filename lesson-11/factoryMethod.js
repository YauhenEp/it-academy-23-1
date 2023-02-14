class Car {
    constructor(model, numberOfDoor, speed) {
        this.model = model,
        this.numberOfDoor = numberOfDoor,
        this.speed = speed
    }
} 

class CarFactory {
    createCar(model) {
        if(model.toLowerCase() === 'bmw') {
            return new Car(model, 2, 220)
        } 
        if(model.toLowerCase() === 'toyota') {
            return new Car(model, 4, 190)
        } 
        if(model.toLowerCase() === 'nissan') {
            return new Car(model, 4, 195)
        } 
    }
}

const factory = new CarFactory();

const bmw = factory.createCar('BMW');
const bmw1 = factory.createCar('BMW');
const toyota = factory.createCar('Toyota');
const nissan = factory.createCar('Nissan');

console.log(bmw);
console.log(bmw1);
console.log(toyota);
console.log(nissan);
