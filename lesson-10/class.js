class Person {
    constructor(eyesColor, skinColor) {
        this.numberOfLegs = 2;
        this.eyesColor = eyesColor;
        this.skinColor = skinColor
    }
}

class Girl extends Person {
    constructor(eyesColor, skinColor) {
        super(eyesColor, skinColor);
        this.sex = 'female';

    }
}

class Baby extends Girl {
    constructor(eyesColor, skinColor, numberOfMonth) {
        super(eyesColor, skinColor);
        this.numberOfMonth = numberOfMonth;
    }

    async move() {
        console.log('Moving')
    }

    static async cry() {
        console.log('Crying')
    }
}

const girl = new Girl('green', 'white')
const girl1 = new Girl('green', 'white')
console.log(girl);
const baby = new Baby('green', 'white', 6)
console.log(baby);

baby.move()
Baby.cry();
console.log(Baby.toString())