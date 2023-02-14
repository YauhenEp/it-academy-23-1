class Parts {
    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}

class Cabin extends Parts {
    constructor() {
        super();
        this.setName('Cabin');
        this.setPrice(1000)
    }
}

class Transmission extends Parts {
    constructor() {
        super();
        this.setName('Transmission');
        this.setPrice(2500)
    }
}

class Interier extends Parts {
    constructor() {
        super();
        this.setName('Interier');
        this.setPrice(1800)
    }
}

class TurboEngine extends Parts {
    constructor() {
        super();
        this.setName('Turbo engine');
        this.setPrice(5000)
    }
}

class Composite extends Parts {
    constructor() {
        super();
        this.parts = [];
    }

    add(part) {
        this.parts.push(part);
    }

    getPrice() {
        return this.parts
            .map(part => part.getPrice())
            .reduce((a, b) => a + b)
    }
}

class Car extends Composite {
    constructor() {
        super();
        this.setName('WV');
    }

}

let car = new Car();
car.add(new Transmission());
car.add(new Cabin());
car.add(new Interier());

console.log(`${car.getName()} price is ${car.getPrice()}`)

let car1 = new Car();
car1.add(new Transmission());
car1.add(new Cabin());
car1.add(new Interier());
car1.add(new TurboEngine());

console.log(`${car1.getName()} price is ${car1.getPrice()}`)