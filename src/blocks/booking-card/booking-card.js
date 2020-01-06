import Calendar from '../calendar/calendar';


(function($) {
    Calendar({
        container: $('#booking_calendar'),
        inputs: $('#first_booking_date,#second_booking_date')
    })

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
