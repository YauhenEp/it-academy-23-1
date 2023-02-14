function carProducer(kind) {
    if(kind === 'sedan') {
        return buildSedan;
    } 
    if(kind === 'universal') {
        return buildUniversal;
    } 
    if(kind === 'sport') {
        return buildSport;
    }
}

function buildSedan() {
    return new Sedan();
}

function buildUniversal() {
    return new Universal();
}

function buildSport() {
    return new Sport();
}

class Sedan {
    getCar() {
        console.log(`This is Sedan`);
    }
}

class Universal {
    getCar() {
        console.log(`This is Universal`);
    }
}

class Sport {
    getCar() {
        console.log(`This is Sport`);
    }
}

let produceSedan = carProducer('sedan');
let sedan = new produceSedan();
let sedan1 = new produceSedan();

let produceUniversal = carProducer('universal');
let universal = new produceUniversal();

let produceSport = carProducer('sport');
let sport = new produceSport();

sedan.getCar();
universal.getCar();
sport.getCar();

sedan1.getCar();