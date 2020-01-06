$('.expander__header').click( e => {
    e.currentTarget.classList.toggle('expander__header--open');
    $(e.currentTarget).next()[0].classList.toggle('expander__list--hide');
});