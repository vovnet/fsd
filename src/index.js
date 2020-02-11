/* global $ */
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery.maskedinput/src/jquery.maskedinput';


function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context('../src/', true, /\.js$|\.scss$/));
