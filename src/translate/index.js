if(!window.Intl){
    window.Intl = require('intl');
    require('intl/locale-data/jsonp/en-US.js');
    require('intl/locale-data/jsonp/es.js');
}

var IntlRelativeTimeFormat = window.IntlRelativeTimeFormat = require('intl-relative-time-format'); //cambiar formato de fecha
var IntlMessageFormat = require('intl-messageformat');//cambiar formato de los mensajes y textos

require('intl-relative-time-format/locale-data/en');
require('intl-relative-time-format/locale-data/es');

//var rf = new IntlRelativeFormat('es');

var es = require('./es');
var en = require('./en-US');

var MESSAGES = {};
MESSAGES.es = es;
MESSAGES['en-US'] = en;

var locale = localStorage.locale || 'es';

module.exports = {
    message: function (text, opts = {}){
        var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);
        return msg.format(opts);
    }
}
