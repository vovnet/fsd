class ItemView {

    constructor(id, name, value, parent, clickHandler) {
        this._parent = parent;
        this._id = id;
        this._clickHandler = clickHandler;

        this._container = $('<div class="configuration-dropdown__item">');
        this._name = $('<div class="configuration-dropdown__option">' + name + '</div>');
        this._value = $('<div class="configuration-dropdown__counter">' + value + '</div>')
        this._minusBtn = $('<div class="configuration-dropdown__button">-</div>');
        this._plusBtn = $('<div class="configuration-dropdown__button">+</div>');

        let controlls = $('<div class="configuration-dropdown__controlls">')
            .append(this._minusBtn)
            .append(this._value)
            .append(this._plusBtn);

        this._container
            .append(this._name)
            .append(controlls);

        $(parent).append(this._container);

        this._minusBtn.on('click', this.onClickMinus.bind(this));
        this._plusBtn.on('click', this.onClickPlus.bind(this));
    }

    update(name, value) {
        this._name.text(name);
        this._value.text(value);

        if (value <= 0) {
            this._minusBtn.addClass('configuration-dropdown__button--disabled');
        } else {
            this._minusBtn.removeClass('configuration-dropdown__button--disabled');
        }
    }

    onClickMinus() {
        let val = parseInt(this._value.text());
        this._clickHandler(this._id, --val);
    }

    onClickPlus() {
        let val = parseInt(this._value.text());
        this._clickHandler(this._id, ++val);
    }
}

export { ItemView }