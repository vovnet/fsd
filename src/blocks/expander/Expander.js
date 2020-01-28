class Expander {
    constructor() {
        let expander = $('.js-expander');
        expander.on('click', this.onClick.bind(this));
    }

    onClick(e) {
        e.currentTarget.classList.toggle('expander__header--open');
        $(e.currentTarget).next()[0].classList.toggle('expander__list--hide');
    }
}

export { Expander }