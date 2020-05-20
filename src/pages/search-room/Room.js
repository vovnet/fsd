import Dropdown from '../../blocks/configuration-dropdown/dropdown/Dropdown';

class Room {
  constructor() {
    this.init();
  }

  init() {
    this.guestOptions = {
      text: 'Сколько гостей',
      visibility: 'hide',
      buttons: true,
      items: [
        { name: 'Гостя', value: 3 },
        { name: 'Младенец', value: 1 },
      ],
    };

    this.roomOptions = {
      text: 'Конфигурация',
      visibility: 'hide',
      items: [
        { name: 'Спальни', value: 2 },
        { name: 'Кровати', value: 2 },
        { name: 'Ванные комнаты', value: 0 },
      ],
    };

    const guestsElement = document.querySelector('.js-search-room__guest-dropdown');
    const roomElement = document.querySelector('.js-search-room__room-dropdown');

    if (guestsElement) {
      new Dropdown(guestsElement, this.guestOptions);
    }
    
    if (roomElement) {
      new Dropdown(roomElement, this.roomOptions);
    }
    
  }
}

export default Room;
