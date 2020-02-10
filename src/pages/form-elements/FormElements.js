/* eslint-disable no-new */
import Dropdown from '../../blocks/configuration-dropdown/dropdown/Dropdown';

class FormElements {
  constructor() {
    this.init();
  }

  init() {
    this.guest = {
      text: 'Сколько гостей',
      visibility: 'hide',
      buttons: true,
      words: ['гость', 'гостя', 'гостей'],
      items: [
        { name: 'Взрослые', value: 0 },
        { name: 'Дети', value: 0 },
        { name: 'Младенцы', value: 0 },
      ],
    };

    this.rooms = {
      text: 'Конфигурация',
      visibility: 'hide',
      buttons: true,
      items: [
        { name: 'Спальни', value: 2 },
        { name: 'Кровати', value: 2 },
        { name: 'Ванные комнаты', value: 0 },
      ],
    };

    const guestCloseElement = document.querySelector('.js-dropdown-guest-close');
    new Dropdown(guestCloseElement, this.guest);

    const roomCloseElement = document.querySelector('.js-dropdown-room-close');
    new Dropdown(roomCloseElement, this.rooms);

    this.rooms.visibility = '';
    const roomOpenElement = document.querySelector('.js-dropdown-room-open');
    new Dropdown(roomOpenElement, this.rooms);

    this.guest.visibility = '';
    const guestOpenElement = document.querySelector('.js-dropdown-guest-open');
    new Dropdown(guestOpenElement, this.guest);

    this.guest.items[0].value = 2;
    this.guest.items[1].value = 1;
    const guestOpenManyElement = document.querySelector('.js-dropdown-guest-open-many');
    new Dropdown(guestOpenManyElement, this.guest);
  }
}

export default FormElements;
