window.IntlRelativeFormat = require('intl-relativeformat')
window.IntlMessageFormat = require('intl-messageFormat')

require('intl-relativeformat/dist/locale-data/en.js')
require('intl-relativeformat/dist/locale-data/es.js')

if(!window.Intl){ // si no esta definido, lo definimos abajo
    window.Intl = require('intl')
    require('intl/locale-data/jsonp/en-US.js')
    require('intl/locale-data/jsonp/es.js')
}

const es = require('./es')
const en = require('./en-US')

const Messages = {}
Messages.es = es
Messages['en-US'] = en

const locale = localStorage.locale || 'es'


module.exports = {
    message: (text, options) =>{
        options = options || {} //si es null le carga un objeto vacío
        const msg = new IntlMessageFormat(Messages[locale][text], locale)
        return msg.format(options)
    },
    date: new IntlRelativeFormat(locale)
}





