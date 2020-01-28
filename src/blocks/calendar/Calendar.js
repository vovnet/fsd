import { DatePicker } from './DatePicker';

class Calendar {

    constructor() {
        this.init();
    }

    init() {
        $('.js-calendar').each((i, element) => {
            new DatePicker(element);
        });
    }
}

export { Calendar }