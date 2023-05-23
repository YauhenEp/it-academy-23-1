const SearchComponent = require('./components/searchComponent')

class MainPage {
    constructor() {
        this['Search Component'] = new SearchComponent();
    }

    async getNewTab( ) {

    }
}

module.exports = MainPage;