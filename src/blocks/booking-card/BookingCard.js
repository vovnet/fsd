class BookingCard {
    
    constructor() {
        this.init();
    }

    init() {
        $('.js-dropdown-booking').dropdown({
            text: 'Сколько гостей',
            visibility: 'hide',
            words: ['гость', 'гостя', 'гостей'],
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