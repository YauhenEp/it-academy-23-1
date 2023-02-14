class Dealer {
    constructor() {
        this.customers = [];
    }

    orderAuto(customer, auto, info) {
        const name = customer.getName();
        console.log(`Order name: ${name}. Order auto ${auto}. Additional info ${info}`);
        this.addCustomerTolist(name);
    }

    addCustomerTolist(name) {
        this.customers.push(name);
    }

    getCustomerList() {
        return this.customers;
    }
}

class Customer {
    constructor(name, dealer) {
        this.name = name;
        this.dealer = dealer;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.dealer.orderAuto(this, auto, info);
    }
}

const mediator = new Dealer();

const yauhen = new Customer('Yauhen', mediator);
const yuri = new Customer('Yuri', mediator);

yauhen.makeOrder('Toyota', 'With parktronik');

yuri.makeOrder('Audi', 'With turbo');

console.log(mediator.getCustomerList());