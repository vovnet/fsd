import { Dropdown } from '../configuration-dropdown/dropdown/Dropdown';

class Apartments {

    constructor() {
        this.init();
    }

    init() {
        let element = document.querySelector('.js-dropdown-find-apartments');

        new Dropdown(element, {
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

export { Apartments }