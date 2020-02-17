/* global $ */
import 'ion-rangeslider';

class Slider {
  constructor() {
    this.init();
  }

  init() {
    const element = $('.js-slider');
    this.minMax = element.parent().find('.slider__min-max');

    this.slider = element.ionRangeSlider({
      min: 500,
      max: 15000,
      type: 'double',
      from: 5000,
      to: 10000,
      hide_from_to: true,
      onChange: this.updateLabel.bind(this),
      onStart: this.onStart.bind(this),
    });
  }

  updateLabel(data) {
    $(this.minMax).html(`${data.from_pretty}&#8381; - ${data.to_pretty}&#8381;`);
  }

  onStart(data) {
    this.updateLabel(data);
  }
}

export default Slider;
