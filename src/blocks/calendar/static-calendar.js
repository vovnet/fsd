import './calendar.scss';
import 'air-datepicker/dist/js/datepicker';

const options = {
    range: true,
    prevHtml: '<i class="material-icons">arrow_back</i>',
    nextHtml: '<i class="material-icons">arrow_forward</i>',
    navTitles: {
        days: 'MM yyyy'
    },
};

let datepicker = $('#static-calendar').datepicker(options).data('datepicker');
$('#static-calendar .datepicker').append('<div class="datepicker--btn-container"><span class="simple-button simple-button--disabled" id="clear_calendar">Очистить</span><span class="simple-button" id="apply_calendar">Применить</span></div>');
