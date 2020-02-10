/* global $ */
import 'ion-rangeslider';

class Slider {
  constructor() {
    this.init();
  }

  init() {
    const element = $('.js-slider');

    this.slider = element.ionRangeSlider({
      min: 1000,
      max: 20000,
      type: 'double',
      from: 5000,
      to: 10000,
      hide_from_to: true,
      onChange: this.updateLabel.bind(this),
      onStart: this.onStart.bind(this),
    });
  }

  updateLabel(data) {
    this.html = `${data.from_pretty} &#8381; - ${data.to_pretty} &#8381;`;
    $(data.slider).find('.slider__min-max').html(this.html);
  }

  onStart(data) {
    data.slider.append('<div class="slider__min-max">');
    this.updateLabel(data);
  }
}

export default Slider;
