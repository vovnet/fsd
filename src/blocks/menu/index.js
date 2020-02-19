/* global $ */
import Menu from './Menu';

$(document).ready(() => {
  // eslint-disable-next-line no-new
  $('.js-menu').each((index, element) => new Menu(element));
});
