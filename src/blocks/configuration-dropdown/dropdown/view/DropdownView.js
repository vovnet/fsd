import { ItemView } from "./ItemView";

class DropdownView {

    constructor(input, props, controller) {
        this._controller = controller;
        this._input = input;
        this._value = props.value;
        this._items = [];
        this._itemsContainer = $('<div class="configuration-dropdown__content">');

        if (props.visibility === 'hide') {
            this._itemsContainer.addClass('configuration-dropdown__content--hide');
        }
        
        $(input)
            .addClass('configuration-dropdown__header')
            .val(props.text);

        let container = $('<div class="configuration-dropdown">');

        // hide dropdown when user click anywhere
        container.click((e) => e.stopPropagation());
        $(document).click(() => $(this._itemsContainer).addClass('configuration-dropdown__content--hide'));

        $(input).wrap(container);
        this._icon = $('<i class="material-icons configuration-dropdown__header-icon">keyboard_arrow_down</i>');
        $(input).after(this._icon);
        $(input).after(this._itemsContainer);
        $(input).attr('readonly', 'readonly');

        props.items.forEach((element, index) => {
            let item = new ItemView(
                index, 
                element.name, 
                element.value, 
                this._itemsContainer, 
                this._controller.onChange.bind(this._controller)
            );

            this._items.push(item);
        });

        if (props.buttons) {
            let footer = $('<div class="configuration-dropdown__footer">');
            this._clearButton = $('<div class="simple-button simple-button--disabled">Очистить</div>');
            let applyButton = $('<div class="simple-button">Применить</div>');
            footer
                .append(this._clearButton)
                .append(applyButton);
            this._itemsContainer.append(footer);

            this._clearButton.click(this._controller.onClear.bind(this._controller));
        }

        $(input).click(this.onClick.bind(this));
        $(this._icon).click(this.onClick.bind(this));
    }

    update(data) {
        data.items.forEach((item, index) => {
            this._items[index].update(item.name, item.value);
        });

        const length = 20;
        let text = data.text.substring(0, length);
        if(data.text.length > length) {
            text += '...';
        }

        $(this._input).val(text);
        
        if(data.hideClearButton) {
            $(this._clearButton).css('visibility', 'hidden');
        } else {
            $(this._clearButton).css('visibility', 'visible');
        }
    }

    onClick() {
        $(this._itemsContainer).toggleClass('configuration-dropdown__content--hide');
    }

}

export { DropdownView }