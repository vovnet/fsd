let options = [
    { id: 'room', data: 0, view: 'спальни'},
    { id: 'bad', data: 0, view: 'кровати'},
    { id: 'badroom', data: 0, view: 'ванные комнаты'}
];

const MAX_LENGTH = 20;


$('#dropdown_header').click(e => {
    $('#dropdown_content').toggleClass('configuration-dropdown__content--hide');
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