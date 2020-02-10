import Dropdown from '../../blocks/configuration-dropdown/dropdown/Dropdown';

class Room {

    constructor() {
        this.init();
    }

    init() {
        let guestOptions = {
            text: 'Сколько гостей',
            visibility: 'hide',
            buttons: true,
            items: [
                { name: 'Гостя', value: 3 },
                { name: 'Младенец', value: 1 },
            ]
        };

        let roomOptions = {
            text: 'Конфигурация',
            visibility: 'hide',
            items: [
                { name: 'Спальни', value: 2 },
                { name: 'Кровати', value: 2 },
                { name: 'Ванные комнаты', value: 0 },
            ]
        };

        let guestsElement = document.querySelector('.js-dropdown-guests');
        let roomElement = document.querySelector('.js-dropdown-search-room');

        new Dropdown(guestsElement, guestOptions);
        new Dropdown(roomElement, roomOptions)
    }
}

export { Room }