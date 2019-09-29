import expander from '../blocks/expander/expander';
import conf from '../blocks/configuration-dropdown/configuration-dropdown';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery.maskedinput/src/jquery.maskedinput';

$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Пред',
    nextText: 'След',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
    'Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Нед',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''};
$.datepicker.setDefaults($.datepicker.regional['ru']);  

let options = {
    showOtherMonths: true,
    showButtonPanel: true,
    prevText: '<i class="material-icons">arrow_back</i>',
    nextText: '<i class="material-icons">arrow_forward</i>'
};

$('#first_date').datepicker(options);
$('#second_date').datepicker(options);

$('#birthday').mask('99.99.9999');