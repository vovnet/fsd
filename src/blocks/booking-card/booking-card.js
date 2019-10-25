import './booking-card.scss';
import '../card-canvas/card-canvas';
import '../apartment-info/apartment-info';
import '../price/price';
import '../range-dates/range-dates';
import '../configuration-dropdown/configuration-dropdown';
import '../long-button/long-button';
import '../invoice/invoidce';
import Calendar from '../calendar/calendar';

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