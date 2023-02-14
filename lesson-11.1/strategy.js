function basePrice(amount) {
    return amount;
}

function premiumDiscount(amount) {
    return amount * 0.9;
}

function platinumDiscount(amount) {
    return amount * 0.8;
}

class Car {
    constructor(discount) {
        this.discount = discount;
        this.price = 0;
    }

    checkout() {
        return this.discount(this.price);
    }

    setPrice(price) {
        this.price = price;
    }
}

const customer = new Car(basePrice);
const premiumCustomer = new Car(premiumDiscount);
const platinumCustomer = new Car(platinumDiscount);

customer.setPrice(5000);
console.log(customer.checkout())
premiumCustomer.setPrice(5000);
console.log(premiumCustomer.checkout())
platinumCustomer.setPrice(5000);
console.log(platinumCustomer.checkout())