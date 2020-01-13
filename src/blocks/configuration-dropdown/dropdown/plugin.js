import { Dropdown } from "./Dropdown";

/**
 * @param {string} props.visibility Set 'hide' | empty string.
 * @param {boolean} props.buttons If true, then clear and apply buttons will be shown.
 * @param {string} props.text Default text for input.
 * @param {array} props.words Array of names for items to display in the input.
 * @param {array} props.items Array of items with objects { name: 'item', value: 3 }.
 */
$.fn.dropdown = function(props) {
    let settings = $.extend({
        visibility: '',
        buttons: true,
        text: 'How match items',
        //words: ['item', 'items', 'items'],
        items: [
            {
                name: 'Item',
                value: 3
            },
        ],
    }, props);

    this.each((i, elem) => new Dropdown(elem, settings));
}
