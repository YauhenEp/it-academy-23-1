const SearchComponent = require('./components/searchComponent')

class MainPage {
    constructor() {
        this['Search Component'] = new SearchComponent();
    }
}

module.exports = MainPage;