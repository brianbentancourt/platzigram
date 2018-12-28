const yo = require('yo-yo')
const translate = require('../translate')

module.exports = content =>{
    return yo`
        <div class="content">
            ${content}
        </div>
    `
}
