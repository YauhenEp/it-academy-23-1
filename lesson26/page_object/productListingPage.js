const ProductPage = require('./productPage');
const element = require('../helpers/baseElements')

class ProductListingPage extends ProductPage {
    constructor() {
        super();
    }
}

module.exports = new ProductListingPage();