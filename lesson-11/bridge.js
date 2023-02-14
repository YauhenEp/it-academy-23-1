class Model {
    constructor(color) {
        this.color = color;
    }
}

class Color {
    constructor(value) {
        this.model = value;
    }

    getColor() {
        return this.model;
    }
}

class WhiteColor extends Color {
    constructor() {
        super('White');
    }
}

class BlueColor extends Color {
    constructor() {
        super('Blue');
    }
}

class WV extends Model {
    constructor(color) {
        super(color);
    }

    paintCar() {
        return `WV with color ${this.color.getColor()}`
    }
}

class Toyota extends Model {
    constructor(color) {
        super(color);
    }

    paintCar() {
        return `Toyota with color ${this.color.getColor()}`
    }
}

const blueWV = new WV(new BlueColor());
const whiteWV = new WV(new WhiteColor());
const blueToyota = new Toyota(new BlueColor());
const whiteToyota = new Toyota(new WhiteColor());

console.log(blueWV.paintCar())
console.log(whiteWV.paintCar())
console.log(blueToyota.paintCar())
console.log(whiteToyota.paintCar())