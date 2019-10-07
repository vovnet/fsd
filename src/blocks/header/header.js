import './header.scss';
import '../menu/menu';
import '../rounded-button/rounded-button';
import '../button/button';
import '../menu-toggle/menu-toggle';

$('#menu_toggle').click( e => {
    $('.menu').toggleClass('menu--open');
});
