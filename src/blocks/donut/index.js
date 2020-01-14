import { Donut } from './donut';

const pie = document.getElementsByClassName('js-donut'); 

for (let item of pie) {
    new Donut(item).draw();
}