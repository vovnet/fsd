import { Dropdown } from '../configuration-dropdown/dropdown/Dropdown';

class BookingCard {
    
    constructor() {
        this.init();
    }

    init() {
        let element = document.querySelector('.js-dropdown-booking');

        new Dropdown(element, {
            text: 'Сколько гостей',
            visibility: 'hide',
            words: ['гость', 'гостя', 'гостей'],
            buttons: true,
            items: [
                {
                    name: 'Взрослых',
                    value: 2
                },
                {
                    name: 'Детей',
                    value: 1
                },
                {
                    name: 'Младенцев',
                    value: 0
                }
            ],
        });

    }
}

export { BookingCard }