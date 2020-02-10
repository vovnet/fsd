import Donut from './Donut';

const pie = document.querySelectorAll('.js-donut');

// eslint-disable-next-line no-restricted-syntax
for (const item of pie) {
  new Donut(item).draw();
}
