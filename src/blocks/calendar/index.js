/* eslint-disable no-new */
/* global $ */
import Calendar from './Calendar';

const calendarContainers = $('.js-calendar');

calendarContainers.each((i, element) => {
  new Calendar(element);
});
