// Chain of Responsibility 
class Profile {
    pay(orderSum) {
        if(this.canPay(orderSum)) {
            console.log(`Paid ${orderSum} using ${this.name}`)
        } else if(this.incomer) {
            console.log(`Connot pay with ${this.name}`);
            this.incomer.pay(orderSum);
        } else {
            console.log(`Not enough money on ${this.name}`)
        }
    }

    canPay(sum) {
        return this.balance >= sum;
    }

    setNext(profile) {
        this.incomer = profile;
    }

    show() {
        console.log(this)
    }
}

class Visa extends Profile {
    constructor(balance) {
        super();
        this.name = 'Visa';
        this.balance = balance;
    }
}

class YandexMoney extends Profile {
    constructor(balance) {
        super();
        this.name = 'Yandex Money';
        this.balance = balance;
    }
}

class Maestro extends Profile {
    constructor(balance) {
        super();
        this.name = 'Maestro';
        this.balance = balance;
    }
}

const visa = new Visa(5000);
const maestro = new Maestro(6500);
const yandexMoney = new YandexMoney(7000);

visa.setNext(maestro);
maestro.setNext(yandexMoney);

visa.pay(7100);

visa.show();
