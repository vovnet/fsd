import './form-elements.scss';
import '../../blocks/logo/logo';
import '../../blocks/text-field/text-field';
import '../../blocks/configuration-dropdown/configuration-dropdown';
import 'jquery.maskedinput/src/jquery.maskedinput';
import '../../blocks/comment/comment';
import '../../blocks/expander/expander';
import '../../blocks/additions/additions';
import '../../blocks/checkbox/checkbox';
import '../../blocks/radio/radio';
import '../../blocks/pagination/pagination';
import '../../blocks/toggle/toggle';
import '../../blocks/like/like';
import '../../blocks/rating/rating';
import '../../blocks/range-dates/range-dates';
import '../../blocks/subscription/subscription';
import '../../blocks/button/button';
import '../../blocks/simple-button/simple-button';
import '../../blocks/long-button/long-button';
import '../../blocks/rounded-button/rounded-button';
import '../../blocks/bullet/bullet';

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
