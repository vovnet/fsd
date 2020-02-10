/* global $ */
import 'air-datepicker/dist/js/datepicker';

class DatePicker {
  constructor(element) {
    this.element = element;

    this.makeDatepicker();
    this.addHandlers();
  }

  makeDatepicker() {
    this.inputs = $(this.element).parent().find('input').not('.js-hidden');

    const options = {
      range: true,
      multipleDates: true,
      onSelect: this.onSelect.bind(this),
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      navTitles: {
        days: 'MM yyyy',
      },
    };

    this.datepicker = $(this.element).datepicker(options).data('datepicker');

    this.$clearButton = $('<span class="simple-button simple-button--disabled">Очистить</span>');
    this.$applyButton = $('<span class="simple-button">Применить</span></div>');
    const $btnContainer = $('<div class="datepicker--btn-container">')
      .append(this.$clearButton)
      .append(this.$applyButton);

    $(this.datepicker.$datepicker).append($btnContainer);
  }

  addHandlers() {
    this.$clearButton.on('click', this.onClickClear.bind(this));
    this.$applyButton.on('click', this.onClickApply.bind(this));
    this.inputs.on('click', this.onClickInput.bind(this));
  }

  clearInputs() {
    this.inputs.each(function () {
      this.value = '';
    });
  }

  onSelect(formattedDate, date) {
    this.dates = date;
  }

  onClickClear() {
    this.clearInputs();
    this.datepicker.clear();
  }

  onClickInput() {
    this.datepicker.show();
  }

  onClickApply() {
    this.inputs.each((i, el) => {
      $(el).val(this.dates[i].toLocaleDateString());
    });

    this.datepicker.hide();
  }
}

export default DatePicker;
