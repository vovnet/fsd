document.getElementById('expander-header').onclick = e => {
    e.target.classList.toggle('expander__header--open');
    document.getElementById('expander-list').classList.toggle('expander__list--hide');
};