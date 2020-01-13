$(document).ready(function() {
    let guest = {
        text: 'Сколько гостей',
        visibility: 'hide',
        words: ['гость', 'гостя', 'гостей'],
        items: [
            {
                name: 'Взрослые',
                value: 0
            },
            {
                name: 'Дети',
                value: 0
            },
            {
                name: 'Младенцы',
                value: 0
            }
        ],
    };

    let rooms = {
        text: 'Конфигурация',
        visibility: 'hide',
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
        ],
    };

    $('.js-dropdown-guest-close').dropdown(guest);
    $('.js-dropdown-room-close').dropdown(rooms);

    rooms.visibility = '';
    $('.js-dropdown-room-open').dropdown(rooms);

    guest.visibility = '';
    $('.js-dropdown-guest-open').dropdown(guest);

    guest.items[0].value = 2;
    guest.items[1].value = 1;
    $('.js-dropdown-guest-open-many').dropdown(guest);
});
