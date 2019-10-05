import $ from 'jquery';
import './menu.scss';

$('.menu__menu-toggle').click( e => {
    $('.menu').toggleClass('menu--open');
})

$('#services_menu').click( () => {
    $('#services_submenu').toggleClass('submenu--open')
})