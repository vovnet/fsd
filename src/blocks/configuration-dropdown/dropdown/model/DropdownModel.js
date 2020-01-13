import { ItemModel } from './ItemModel';

class DropdownModel {
    
    constructor(props) {
        this._text = props.text;
        this._type = props.type;
        this._items = [];
        this._listeners = [];
        this._buttons = props.buttons;
        this._words = props.words;
        this._defaultText = props.text;

        this._sum = 0;

        props.items.forEach(element => {
            let item = new ItemModel(element.name, element.value);
            this._items.push(item);
        });
    }

    setValue(id, value) {
        if (value < 0) {
            value = 0;
        }
        this._items[id].value = value;

        this.emmit();
    }

    get text() {
        this._sum = 0;
        this._items.forEach(item => {
            this._sum += item.value;
        });

        if (this._sum <= 0) {
            return this._defaultText;
        }

        if (this._words) {
            this.generateSimpleText();
        } else {
            this.generateConmbinedText();
        }

        return this._text;
    }

    clear() {
        this._items.forEach(item => {
            item.value = 0;
        });

        this.emmit();
    }

    generateSimpleText() {
        const index = mapNames(this._sum);

        this._text = this._sum + ' ' + this._words[index];
        
        function mapNames(val) {
            switch (val) {
                case 0:
                    return 2;
                case 1:
                    return 0;
                case 2:
                case 3:
                case 4:
                    return 1;
                default:
                    if (val > 20) {
                        if (val > 99) {
                            return mapNames(val % 100);
                        }
                        return mapNames(val % 10);
                    }
                    return 2;
            }
        }
    }

    generateConmbinedText() {
        this._text = '';
        this._items.forEach(item => {
            if (item.value !== 0) {
                this._text += item.value + ' ' + item.name.toLowerCase() + ', ';
            }
        });
        this._text = this._text.substring(0, this._text.length-2);
    }

    addUpdateListener(fn) {
        this._listeners.push(fn);
        this.emmit();
    }

    emmit() {
        let items = [];
        this._items.forEach(item => {
            items.push({ name: item.name, value: item.value });
        });
        
        let data = { 
            items: items,
            text: this.text,
            hideClearButton: this._sum <= 0,
        };

        this._listeners.forEach((val) => {
            val(data);
        });
    }
}

export { DropdownModel }