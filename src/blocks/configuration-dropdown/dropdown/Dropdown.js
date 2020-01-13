import { ItemView } from './view/ItemView';
import { DropdownView } from './view/DropdownView';
import { DropdownModel } from './model/DropdownModel';

class Dropdown {

    constructor(input, options) {
        this.model = new DropdownModel(options);
        
        options.text = this.model.text;
        this.view = new DropdownView(input, options, this);
        this.model.addUpdateListener(this.update.bind(this));
    }

    update(data) {
        this.view.update(data);
    }

    onChange(id, value) {
        this.model.setValue(id, value);
    }

    onClear() {
        this.model.clear();
    }
    
}

export { Dropdown }