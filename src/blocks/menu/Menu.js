/* global $ */
class Menu {
  constructor(element) {
    this.menu = element;
    this.menuButton = $(this.menu).find('.js-menu__button');
    this.menuContainer = $(this.menu).find('.js-menu-container');
    this.menuButton.on('click', this.onClickMenuButton.bind(this));
    const expanders = $(this.menuContainer).find('.js-menu-expander');
    expanders.each(this.addClickListenersToExpanders.bind(this));
  }

  onClickMenuButton() {
    this.menuContainer.toggleClass('menu__container_visible');
  }

  addClickListenersToExpanders(index, element) {
    $(element).on('click', this.onClickExpander.bind(this));
  }

  // eslint-disable-next-line class-methods-use-this
  onClickExpander(e) {
    const submenu = $(e.currentTarget).parent().find('.js-submenu');
    submenu.toggleClass('menu__submenu_visible');
  }
}

export default Menu;
