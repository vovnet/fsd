(function($) {
    $('#booking_dropdown').dropdown({
        title: 'гости',
        show: false,
        placeholder: '3 гостя',
        buttons: false,
        mapNames: ['гость', 'гостя', 'гостей'],
        elements: [
            { title: 'взрослых', value: 3 },
            { title: 'детей', value: 0 }
        ]
    });
})(jQuery);
