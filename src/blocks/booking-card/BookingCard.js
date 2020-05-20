import Dropdown from '../configuration-dropdown/dropdown/Dropdown';

class BookingCard {
  constructor() {
    this.init();
  }

  init() {
    this.element = document.querySelector('.js-booking-card__dropdown');

    if (this.element) {
      this.dropdown = new Dropdown(this.element, {
        text: 'Сколько гостей',
        visibility: 'hide',
        words: ['гость', 'гостя', 'гостей'],
        buttons: true,
        items: [
          {
            name: 'Взрослых',
            value: 2,
          },
          {
            name: 'Детей',
            value: 1,
          },
          {
            name: 'Младенцев',
            value: 0,
          },
        ],
      });
    }
  }
}

export default BookingCard;
