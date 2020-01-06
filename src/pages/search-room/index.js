$('#guest').dropdown({
    title: 'гости',
    show: false,
    singular: false,
    placeholder: '3 гостя, 1 младенец',
    elements: [
        {
            title: 'взрослые',
            value: 3
        },
        {
            title: 'младенцы',
            value: 1
        }
    ]
});

$('#comfort').dropdown({
    title: 'удобства номера',
    show: false,
    singular: false,
    buttons: false,
    placeholder: '2 спальни, 2 кровати...',
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