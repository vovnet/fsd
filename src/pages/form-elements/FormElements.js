import Dropdown from '../../blocks/configuration-dropdown/dropdown/Dropdown';

class FormElements {

    constructor() {
        this.init();
    }

    init() {
        let guest = {
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

        let rooms = {
            text: 'Конфигурация',
            visibility: 'hide',
            buttons: true,
            items: [
                { name: 'Спальни', value: 2 },
                { name: 'Кровати', value: 2 },
                { name: 'Ванные комнаты', value: 0 },
            ],
        };

        let guestCloseElement = document.querySelector('.js-dropdown-guest-close');
        new Dropdown(guestCloseElement, guest);

        let roomCloseElement = document.querySelector('.js-dropdown-room-close');
        new Dropdown(roomCloseElement, rooms);

        rooms.visibility = '';
        let roomOpenElement = document.querySelector('.js-dropdown-room-open');
        new Dropdown(roomOpenElement, rooms);

        guest.visibility = '';
        let guestOpenElement = document.querySelector('.js-dropdown-guest-open');
        new Dropdown(guestOpenElement, guest);

        guest.items[0].value = 2;
        guest.items[1].value = 1;
        let guestOpenManyElement = document.querySelector('.js-dropdown-guest-open-many');
        new Dropdown(guestOpenManyElement, guest);
    }
}

export { FormElements }