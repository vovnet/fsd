import { Donut } from './Donut';

const pie = document.querySelectorAll('.js-donut'); 

for (let item of pie) {
    new Donut(item).draw();
}