class Room {

    constructor() {
        this.init();
    }

    init() {
        $('.js-dropdown-guests').dropdown({
            text: 'Сколько гостей',
            visibility: 'hide',
            items: [
                {
                    name: 'Гостя',
                    value: 3
                },
                {
                    name: 'Младенец',
                    value: 1
                }
            ]
        });

        $('.js-dropdown-search-room').dropdown({
            text: 'Конфигурация',
            visibility: 'hide',
            buttons: false,
            items: [
                {
                    name: 'Спальни',
                    value: 2
                },
                {
                    name: 'Кровати',
                    value: 2
                },
                {
                    name: 'Ванные комнаты',
                    value: 0
                }
            ]
        });
    }
}

export { Room }