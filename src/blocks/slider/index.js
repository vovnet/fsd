// import './slider.scss';
import 'ion-rangeslider';


let slider = $('.slider').ionRangeSlider({
    min: 1000,
    max: 20000,
    type: 'double',
    from: 5000,
    to: 10000,
    hide_from_to: true,
    onChange: function(data) {
        updateLabel(data);
    },
    onStart: data => {
        data.slider.append('<div class="slider__min-max">');
        updateLabel(data);
    }
});

function updateLabel(data) {
    $(data.slider).find('.slider__min-max').html(data.from_pretty + '&#8381; - ' + data.to_pretty + '&#8381;');
}