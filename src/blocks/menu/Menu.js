class Menu {

    constructor() {
        this.menu = $('.js-menu');

        let menuButton = $('.js-menu-button');
        let submenu = $('.js-menu__submenu');
        let body = $(document.body).not('.js-menu__submenu');

        menuButton.on('click', this.onClickMenuButton.bind(this));
        submenu.on('click', this.onClickSubmenu.bind(this));
        body.on('click', this.onCloseMenu.bind(this));
    }

    onClickMenuButton(e) {
        this.menu.toggleClass('menu--open');
    }

    onClickSubmenu(e) {
        $(e.currentTarget).children('.js-submenu').toggleClass('submenu--open');
    }

    onCloseMenu(e) {
        if (!$(e.target).is('.js-menu__submenu')) {
            let submenu = $('.js-submenu');
            if (submenu.hasClass('submenu--open')) {
                submenu.removeClass('submenu--open');
            }
        }
    }
}

export { Menu }