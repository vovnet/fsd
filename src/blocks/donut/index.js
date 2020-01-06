import { Donut } from './donut';

const pie = document.getElementsByClassName('donut');

for (let item of pie) {
    new Donut(item).draw();
}