$('#birthday').mask('99.99.9999');

$('#dd').dropdown({
    title: '',
    placeholder: '2 спальни, 2 кровати...',
    buttons: false,
    show: false,
    elements: []
});

$('#dd2').dropdown({
    title: '',
    placeholder: '2 спальни, 2 кровати...',
    singular: false,
    buttons: false,
    elements: [
        {
            title: 'спальни',
            value: 2
        },
        {
            title: 'кровати',
            value: 2
        },
        {
            title: 'ванные комнаты',
            value: 0
        }
    ]
});

$('#dd3').dropdown({
    title: '',
    placeholder: 'Сколько гостей',
    singular: true,
    buttons: true,
    mapNames: ['гость', 'гостя', 'гостей'],
    elements: [
        {
            title: 'взрослые',
            value: 0
        },
        {
            title: 'дети',
            value: 0
        },
        {
            title: 'младенцы',
            value: 0
        }
    ]
});

$('#dd4').dropdown({
    title: '',
    placeholder: 'Сколько гостей',
    singular: true,
    buttons: true,
    mapNames: ['гость', 'гостя', 'гостей'],
    elements: [
        {
            title: 'взрослые',
            value: 2
        },
        {
            title: 'дети',
            value: 1
        },
        {
            title: 'младенцы',
            value: 0
        }
    ]
});
