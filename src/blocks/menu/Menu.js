class Menu {

    constructor() {
        $('.js-menu-button').on('click', this.onClickMenuButton.bind(this));
        $('.js-menu__submenu').on('click', this.onClickSubmenu.bind(this));
        $(document.body).not('.js-menu__submenu').on('click', this.onCloseMenu.bind(this));
    }

    onClickMenuButton(e) {
        $('.js-menu').toggleClass('menu--open');
    }

    onClickSubmenu(e) {
        $(e.currentTarget).children('.js-submenu').toggleClass('submenu--open');
    }

    onCloseMenu(e) {
        if (!$(e.target).is('.js-menu__submenu')) {
            let menu = $('.js-submenu');
            if (menu.hasClass('submenu--open')) {
                menu.removeClass('submenu--open');
            }
        }
    }
}

export { Menu }