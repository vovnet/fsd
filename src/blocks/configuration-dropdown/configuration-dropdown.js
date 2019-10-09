import './configuration-dropdown.scss';
import '../simple-button/simple-button';

let options = [
    { id: 'room', data: 0, view: 'спальни'},
    { id: 'bad', data: 0, view: 'кровати'},
    { id: 'badroom', data: 0, view: 'ванные комнаты'},
    { id: 'guest', data: 0, view: 'взрослых'},
    { id: 'children', data: 0, view: 'детей'},
    { id: 'baby', data: 0, view: 'младенцев' }
];

const MAX_LENGTH = 20;


$('.configuration-dropdown__header').click(e => {
    $('.configuration-dropdown__content').toggleClass('configuration-dropdown__content--hide');
});

$('.configuration-dropdown__button').click(function() {

    let id = this.getAttribute('data-id');
    let sign = this.getAttribute('data-type');

    options.forEach( (val) => {
        if (val.id === id) {

            if (sign === 'inc') {
                val.data++;
            } else {
                if (val.data > 0) {
                    val.data--;
                }
            }
            
        }
    });

    updateFields();
    updateHeader();
});


function updateFields() {
    options.forEach(val => {
        $('#' + val.id + '_field').text(val.data);
        if (val.data === 0) {
            $('#' + val.id).addClass('configuration-dropdown__button--disabled');
        } else {
            $('#' + val.id).removeClass('configuration-dropdown__button--disabled');
        }
    });
}

function updateHeader() {
    let result = '';
    options.forEach(val => {
        result += val.data + ' ' + val.view + ', ';
    });
    $('#dropdown_header').text(result.slice(0, MAX_LENGTH) + '...');
}

updateFields();


// guest

$('#apply_guest').click( e => {
    setGuestHeader();
});

$('.configuration-dropdown__button').click( e => {
    $('.configuration-dropdown__footer-button--hide').removeClass('configuration-dropdown__footer-button--hide')
});

function setGuestHeader() {
    let guests = options[3].data + options[4].data + options[5].data;
    const names = ['гость', 'гостя', 'гостей'];
    $('#guest_header').text(guests + ' ' + names[mapNames(guests)]);
}

function mapNames(val) {
    switch(val) {
        case 0:
            return 2;
        case 1:
            return 0;
        case 2:
        case 3:
        case 4:
            return 1;
        default: 
            if (val > 20) {
                if (val > 99) {
                    return mapNames(val % 100);
                }
                return mapNames(val % 10);
            }
            return 2;
    }
}