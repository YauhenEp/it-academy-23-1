const MainPage = require('./mainPage');

class PageFactory {
    static 'Main Page' = new MainPage();
    static 'Home Page';
}

module.exports = PageFactory;