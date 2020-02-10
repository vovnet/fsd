/* global $ */
class Menu {
  constructor() {
    this.menu = $('.js-menu');

    const menuButton = $('.js-menu-button');
    const submenu = $('.js-menu__submenu');
    const body = $(document.body).not('.js-menu__submenu');

    menuButton.on('click', this.onClickMenuButton.bind(this));
    submenu.on('click', this.onClickSubmenu.bind(this));
    body.on('click', this.onCloseMenu.bind(this));
  }

  toggleSbumenu() {
    if (this.submenu) {
      $(this.submenu).children('.js-submenu').toggleClass('submenu--open');
      this.submenu = null;
    }
  }

  onClickMenuButton() {
    this.menu.toggleClass('menu--open');
  }

  onClickSubmenu(e) {
    this.submenu = e.currentTarget;
    this.toggleSbumenu();
  }

  // eslint-disable-next-line class-methods-use-this
  onCloseMenu(e) {
    if (!$(e.target).is('.js-menu__submenu')) {
      const submenu = $('.js-submenu');
      if (submenu.hasClass('submenu--open')) {
        submenu.removeClass('submenu--open');
      }
    }
  }
}

export default Menu;
