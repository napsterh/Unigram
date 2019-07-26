var page = require('page');
var moment = require('moment');

require('moment/locale/es');

moment.locale('es');

require('./homepage');
require('./signup');
require('./signin');

page();