import 'air-datepicker/dist/js/datepicker';


$('.js-calendar').each(function() {
    let inputs = $(this).parent().find('input').not('.js-hidden');

    let dates;

    const options = {
        range: true,
        multipleDates: true,
        onSelect: (formattedDate, date, inst) => {
            dates = date;
        },
        prevHtml: '<i class="material-icons">arrow_back</i>',
        nextHtml: '<i class="material-icons">arrow_forward</i>',
        navTitles: {
            days: 'MM yyyy'
        },
    };

    let datepicker = $(this).datepicker(options).data('datepicker');

    let clearButton = $('<span class="simple-button simple-button--disabled">Очистить</span>');
    let applyButton = $('<span class="simple-button">Применить</span></div>');
    let btnContainer = $('<div class="datepicker--btn-container">')
        .append(clearButton)
        .append(applyButton);
        
    $(datepicker.$datepicker).append(btnContainer);

    clearButton.click(() => {
        inputs.each(function () {
            this.value = '';
        });

        datepicker.clear();
    });

    applyButton.click(() => {
        inputs.each((i, el) => {
            $(el).val(dates[i].toLocaleDateString());
        });
        
        datepicker.hide();
    });    

    inputs.click(() => {
        datepicker.show();
    });
});