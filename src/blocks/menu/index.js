$(document).ready(function() {
    $('.js-menu').click(e => {
        $('.menu').toggleClass('menu--open');
    });

    $('.menu__submenu').on('click', (e) => {
        $(e.currentTarget).children('.submenu').toggleClass('submenu--open');
    });

    $(document.body).not('.menu__submenu').click(e => {
        if (!$(e.target).is('.menu__submenu')) {
            let menu = $('.submenu');
            if (menu.hasClass('submenu--open')) {
                menu.removeClass('submenu--open');
            }
        }
    });
});
