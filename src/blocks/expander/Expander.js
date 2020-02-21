/* global $ */

class Expander {
  constructor() {
    const expander = $('.js-expander');
    expander.on('click', this.onClick.bind(this));
  }

  // eslint-disable-next-line class-methods-use-this
  onClick(e) {
    e.currentTarget.classList.toggle('expander__header--open');
    $(e.currentTarget).next()[0].classList.toggle('expander__list--hided');
  }
}

export default Expander;
