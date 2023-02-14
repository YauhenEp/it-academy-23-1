class SimpleEngine {
    simpleEngineInterface() {
        console.log(`Simple Engine`)
    }
}

class TurboEngine {
    turboEngineInterface() {
        console.log(`Turbo Engine`)
    }
}

class TurboEngineAdapter {
    constructor(engine) {
        this.engine = engine;
    }

    simpleEngineInterface() {
        this.engine.turboEngineInterface();
    }
}

class Car {
    startEngine(engine) {
        engine.simpleEngineInterface();
    }
}

let car = new Car();
let simpleEngine = new SimpleEngine();
car.startEngine(simpleEngine);

// let turbo = new TurboEngine();
// car.startEngine(turbo);

let turboEngine = new TurboEngineAdapter(new TurboEngine());
car.startEngine(turboEngine);
