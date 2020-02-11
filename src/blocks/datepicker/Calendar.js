/* global $ */
import DatePicker from './DatePicker';

class Calendar {
  constructor() {
    this.init();
  }

  init() {
    this.element = $('.js-calendar');

    this.element.each((i, element) => {
      // eslint-disable-next-line no-new
      new DatePicker(element);
    });
  }
}

export default Calendar;
