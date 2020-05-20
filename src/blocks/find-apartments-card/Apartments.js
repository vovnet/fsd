import Dropdown from '../configuration-dropdown/dropdown/Dropdown';

class Apartments {
  constructor() {
    this.init();
  }

  init() {
    const element = document.querySelector('.js-find-apartments-card__dropdown');

    if (element) {
      this.dropdown = new Dropdown(element, {
        text: 'Сколько гостей',
        visibility: 'hide',
        buttons: true,
        words: ['гость', 'гостя', 'гостей'],
        items: [
          { name: 'Взрослых', value: 0 },
          { name: 'Детей', value: 0 },
        ],
      });
    }
  }
}

export default Apartments;
