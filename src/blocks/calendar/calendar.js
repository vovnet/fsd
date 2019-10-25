import './calendar.scss';
import 'air-datepicker/dist/js/datepicker';

export default function makeCalendar(data) {
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

    let datepicker = data.container.datepicker(options).data('datepicker');

    data.inputs.click( () => {
        datepicker.show();
    });

    $('.datepicker').each(function() {
        if ($(this).find('.datepicker--btn-container').length === 0) {
            let clearButton = $('<span class="simple-button simple-button--disabled">Очистить</span>');
            let applyButton = $('<span class="simple-button">Применить</span></div>');
            let btnContainer = $('<div class="datepicker--btn-container">').append(clearButton).append(applyButton);
            $(this).append(btnContainer);

            clearButton.click(() => {
                dates = null;
                datepicker.clear();
                data.inputs.val('');
            });

            applyButton.click(() => {
                if (dates.length > 1) {
                    if (data.inputs.length > 1) {
                        $(data.inputs[0]).val(dates[0]);
                        $(data.inputs[1]).val(dates[1]);
                    } else {
                        // пишем в одну строку 2 даты через дефис
                    }
                }
                datepicker.hide();
            });
        }
    });


    

}