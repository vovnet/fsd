import { DatePicker } from './DatePicker';

class Calendar {

    constructor() {
        this.init();
    }

    init() {
        let element = $('.js-calendar');
        
        element.each((i, element) => {
            new DatePicker(element);
        });
    }
}

export { Calendar }