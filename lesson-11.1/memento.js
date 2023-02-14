class Mememto {
    constructor(value) {
        this.value = value;
    }
}

const creator = {
    save: val => new Mememto(val),
    restore: mememto => mememto.value,
}

class StoreValues {
    constructor() {
        this.values = [];
    }

    addMemento(memento) {
        this.values.push(memento);
    }

    getMemento(index) {
        return this.values[index];
    }

    getLastMemento() {
        return this.values[this.values.length - 1];
    }
}

const storeValues = new StoreValues();

storeValues.addMemento(creator.save('This is car'));
storeValues.addMemento(creator.save('Hello world'));
storeValues.addMemento(creator.save('It academy'));
storeValues.addMemento(creator.save('Very hot'));
storeValues.addMemento(creator.save('Really difficult work with patterns'));

console.log(storeValues);
console.log(creator);
console.log(creator.restore(storeValues.getMemento(0)));
console.log(creator.restore(storeValues.getMemento(1)));
console.log(creator.restore(storeValues.getLastMemento()));
