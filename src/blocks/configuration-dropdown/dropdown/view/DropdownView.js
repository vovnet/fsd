import { ItemView } from './ItemView';

class DropdownView {

    constructor(input, props, controller) {
        this._controller = controller;
        this._input = input;
        this._value = props.value;
        this._items = [];
        this._$itemsContainer = $('<div class="configuration-dropdown__content">');

        if (props.visibility === 'hide') {
            this._$itemsContainer.addClass('configuration-dropdown__content--hide');
        }
        
        $(input)
            .addClass('configuration-dropdown__header')
            .val(props.text);

        let $container = $('<div class="configuration-dropdown">');

        // hide dropdown when user click anywhere
        $container.on('click', this.onContainerClick.bind(this));
        $(document).on('click', this.onDocumentClick.bind(this));

        $(input).wrap($container);
        this._$icon = $('<i class="material-icons configuration-dropdown__header-icon">keyboard_arrow_down</i>');
        $(input).after(this._$icon);
        $(input).after(this._$itemsContainer);
        $(input).attr('readonly', 'readonly');

        props.items.forEach((element, index) => {
            let item = new ItemView(
                index, 
                element.name, 
                element.value, 
                this._$itemsContainer, 
                this._controller.onChange.bind(this._controller)
            );

            this._items.push(item);
        });

        if (props.buttons) {
            let $footer = $('<div class="configuration-dropdown__footer">');
            this._$clearButton = $('<div class="simple-button simple-button--disabled">Очистить</div>');
            let $applyButton = $('<div class="simple-button">Применить</div>');
            $footer
                .append(this._$clearButton)
                .append($applyButton);
            this._$itemsContainer.append($footer);

            this._$clearButton.on('click', this._controller.onClear.bind(this._controller));
        }

        $(input).on('click', this.onClick.bind(this));
        $(this._$icon).on('click', this.onClick.bind(this));
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
            $(this._$clearButton).css('visibility', 'hidden');
        } else {
            $(this._$clearButton).css('visibility', 'visible');
        }
    }

    onClick() {
        $(this._$itemsContainer).toggleClass('configuration-dropdown__content--hide');
    }

    onContainerClick(e) {
        e.stopPropagation();
    }

    onDocumentClick(e) {
        $(this._$itemsContainer).addClass('configuration-dropdown__content--hide')
    }

}

export { DropdownView }