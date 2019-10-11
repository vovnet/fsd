import './calendar.scss';
import 'air-datepicker/dist/js/datepicker';

let dates;

const options = {
    range: true,
    onSelect: (formattedDate, date, inst) => {
        if (date.length > 1) {
            dates = [];
            dates.push(date[0].toLocaleDateString())
            dates.push(date[1].toLocaleDateString());
            
        }
    },
    prevHtml: '<i class="material-icons">arrow_back</i>',
    nextHtml: '<i class="material-icons">arrow_forward</i>',
    navTitles: {
        days: 'MM yyyy'
    },
};

let datepicker = $('#calendar').datepicker(options).data('datepicker');

$('#first_date,#second_date').click( () => {
    datepicker.show();
});

$('.datepicker').append('<div class="datepicker--btn-container"><span class="simple-button simple-button--disabled" id="clear_calendar">Очистить</span><span class="simple-button" id="apply_calendar">Применить</span></div>');

$('#clear_calendar').click(() => {
    dates = null;
    datepicker.clear();
    $('#first_date').val('');
    $('#second_date').val('');
});

$('#apply_calendar').click(() => {
    if (dates.length > 1) {
        $('#first_date').val(dates[0]);
        $('#second_date').val(dates[1]);
    }
    datepicker.hide();
});