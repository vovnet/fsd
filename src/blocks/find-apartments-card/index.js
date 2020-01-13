$(document).ready(function() {
    $('.js-dropdown-find-apartments').dropdown({
        text: 'Сколько гостей',
        visibility: 'hide',
        words: ['гость', 'гостя', 'гостей'],
        items: [
            {
                name: 'Взрослых',
                value: 0
            },
            {
                name: 'Детей',
                value: 0
            }
        ],
    });
});
