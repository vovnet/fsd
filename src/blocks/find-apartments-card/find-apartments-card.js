import './find-apartments-card.scss';
import '../card-canvas/card-canvas';
import '../range-dates/range-dates';
import '../configuration-dropdown/configuration-dropdown';
import '../long-button/long-button';
import Calendar from '../calendar/calendar';

Calendar({
    container: $('#calendar'),
    inputs: $('#first_date,#second_date')
})