class Dropdown {
    init() {
        $.fn.dropdown = function (options) {

            var Item = {};
            /**
             * Observer
             */
            let observer = function () {
                let observers = [];

                let addObserver = function (obs) {
                    for (let i = 0, len = observers.length; i < len; i++) {
                        let tmpObs = observers[i];
                        if (tmpObs === obs) {
                            throw new Error('Observer already exists!');
                        }
                    }
                    observers.push(obs);
                };

                let removeObserver = function (obs) {
                    for (let i = 0, len = observers.length; i < len; i++) {
                        let tmpObs = observers[i];
                        if (tmpObs === obs) {
                            observers.splice(i, 1);
                            return;
                        }
                    }
                    throw new Error('Observer not found!');
                };

                let notify = function (data) {
                    let snap = observers.slice(0);
                    for (let i = 0, len = snap.length; i < len; i++) {
                        snap[i](data);
                    }
                };

                return {
                    addObserver: addObserver,
                    removeObserver: removeObserver,
                    notify: notify
                };
            };

            Item.Model = function (data) {
                let that = this;
                this.observer = observer();
                let item = data;

                this.addItem = function () {
                    item.value++;
                    that.observer.notify(true);
                }

                this.removeItem = function () {
                    if (item.value > 0) {
                        item.value--;
                        that.observer.notify(false);
                    }
                }

                this.setItem = function (val) {
                    item.value = val;
                    that.observer.notify();
                }

                this.getItems = function () {
                    return item.value;
                }

                this.getTitle = function () {
                    return item.title;
                }
            };

            Item.View = function (model, root) {
                let that = this;
                that.item = $('<div class="configuration-dropdown__item"></div>').appendTo(root);
                that.option = $('<div class="configuration-dropdown__option">' + model.getTitle() + '</div>').appendTo(that.item);
                that.controlls = $('<div class="configuration-dropdown__controlls"></div>').appendTo(that.item);
                let disable = model.getItems() < 1 ? 'configuration-dropdown__button--disabled' : '';
                that.buttonMinus = $('<div class="configuration-dropdown__button ' + disable + '">-</div>').appendTo(that.controlls);
                that.counter = $('<div class="configuration-dropdown__counter">' + model.getItems() + '</div>').appendTo(that.controlls);
                that.buttonPlus = $('<div class="configuration-dropdown__button">+</div>').appendTo(that.controlls);

                model.observer.addObserver(function () {
                    that.counter.html(model.getItems());
                    if (model.getItems() > 0) {
                        that.buttonMinus[0].classList.remove('configuration-dropdown__button--disabled');
                    } else {
                        that.buttonMinus[0].classList.add('configuration-dropdown__button--disabled');
                    }
                });
            };


            Item.Controller = function (model, view) {
                view.buttonPlus.bind('click', function () {
                    model.addItem();
                });

                view.buttonMinus.bind('click', function () {
                    model.removeItem();
                });
            };

            let settings = $.extend({
                singular: true,
                buttons: true,
                show: true,
                title: 'title',
                placeholder: 'place',
                mapNames: [],
                elements: [
                    {
                        title: 'element title',
                        value: 0
                    },
                    {
                        title: 'more',
                        value: 10
                    }
                ]
            }, options);


            let that = this;
            let container = $('<div class="configuration-dropdown"></div>').appendTo(this);
            if (settings.title) {
                $('<div class="configuration-dropdown__label">' + settings.title + '</div>').appendTo(container);
            }
            let defaultHide = settings.show === true ? '' : 'configuration-dropdown__content--hide';
            let placeholder = $('<div class="configuration-dropdown__header">' + settings.placeholder + '</div>').appendTo(container);
            let body = $('<div class="configuration-dropdown__content ' + defaultHide + '">').appendTo(container);

            placeholder.bind('click', function () {
                body.toggleClass('configuration-dropdown__content--hide');
            });

            let models = [];
            for (let i of settings.elements) {
                let model = new Item.Model(i);
                models.push(model);
                let view = new Item.View(model, body);
                let controller = new Item.Controller(model, view);
                model.observer.addObserver(function () {
                    return function (sign) {
                        if (!settings.buttons) {
                            // генерируем строку заголовка
                            placeholder.html(printPlaceholder(settings.elements));
                        }
                    };
                }());
            }

            if (settings.buttons) {
                let footer = $('<div class="configuration-dropdown__footer">').appendTo(body);

                let clearButton = $('<div class="simple-button simple-button--disabled">Очистить</div>').appendTo(footer);
                let applyButton = $('<div class="simple-button">Применить</div>').appendTo(footer);

                clearButton.bind('click', apply);

                applyButton.bind('click', function () {
                    placeholder.html(printPlaceholder(settings.elements));
                    clearButton.removeClass('configuration-dropdown__footer-button--hide');
                });
            }

            function apply() {
                for (let i of models) {
                    i.setItem(0);
                }
                placeholder.html(settings.placeholder);
                clearButton.addClass('configuration-dropdown__footer-button--hide');
            }

            function printPlaceholder(data) {
                if (settings.singular) {
                    return getSingularPlaceholder(data);
                } else {
                    let result = '';
                    for (let i of data) {
                        result += i.value + ' ' + i.title + ', ';
                    }
                    return result;
                }
            }

            function getSingularPlaceholder(data) {
                let sum = 0;
                for (let item of data) {
                    sum += item.value;
                }
                return sum + ' ' + settings.mapNames[mapNames(sum)];
            }

            function mapNames(val) {
                switch (val) {
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

        };
    }
}

export { Dropdown };