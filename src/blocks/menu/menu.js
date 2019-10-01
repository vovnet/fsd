import $ from 'jquery';

$('.menu__menu-toggle').click( e => {
    $('.menu').toggleClass('menu--open');
})

$('#services_menu').click( () => {
    $('#services_submenu').toggleClass('submenu--open')
})