class SearchComponent {
    get 'Fast Search'() {
        return '.fast-search__input';
    }

    get 'Product Links'() {
        return '.result__item.result__item_product .product__title a.product__title-link'
    }
}

module.exports = SearchComponent;