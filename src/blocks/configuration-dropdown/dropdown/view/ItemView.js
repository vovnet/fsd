class ItemView {

    constructor(id, name, value, parent, clickHandler) {
        this._parent = parent;
        this._id = id;
        this._clickHandler = clickHandler;

        this._$container = $('<div class="configuration-dropdown__item">');
        this._$name = $('<div class="configuration-dropdown__option">' + name + '</div>');
        this._$value = $('<div class="configuration-dropdown__counter">' + value + '</div>')
        this._$minusBtn = $('<div class="configuration-dropdown__button">-</div>');
        this._$plusBtn = $('<div class="configuration-dropdown__button">+</div>');

        let $controlls = $('<div class="configuration-dropdown__controlls">')
            .append(this._$minusBtn)
            .append(this._$value)
            .append(this._$plusBtn);

        this._$container
            .append(this._$name)
            .append($controlls);

        $(parent).append(this._$container);

        this._$minusBtn.on('click', this.onClickMinus.bind(this));
        this._$plusBtn.on('click', this.onClickPlus.bind(this));
    }

    update(name, value) {
        this._$name.text(name);
        this._$value.text(value);

        if (value <= 0) {
            this._$minusBtn.addClass('configuration-dropdown__button--disabled');
        } else {
            this._$minusBtn.removeClass('configuration-dropdown__button--disabled');
        }
    }

    onClickMinus() {
        let val = parseInt(this._$value.text());
        this._clickHandler(this._id, --val);
    }

    onClickPlus() {
        let val = parseInt(this._$value.text());
        this._clickHandler(this._id, ++val);
    }
}

export { ItemView }