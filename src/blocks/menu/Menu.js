class Menu {

    constructor() {
        this.initMenuButton();
        this.initSubmenuClick();
        this.initCloseMenu();
    }

    initMenuButton() {
        $('.js-menu-button').click(e => {
            $('.js-menu').toggleClass('menu--open');
        });
    }

    initSubmenuClick() {
        $('.js-menu__submenu').on('click', (e) => {
            $(e.currentTarget).children('.js-submenu').toggleClass('submenu--open');
        });
    }

    initCloseMenu() {
        $(document.body).not('.js-menu__submenu').click(e => {
            if (!$(e.target).is('.js-menu__submenu')) {
                let menu = $('.js-submenu');
                if (menu.hasClass('submenu--open')) {
                    menu.removeClass('submenu--open');
                }
            }
        });
    }
}

export { Menu }