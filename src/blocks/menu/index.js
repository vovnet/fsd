/* global $ */
import Menu from './Menu';

$(document).ready(() => {
  $('.js-menu').each((_, element) => new Menu(element));
});
