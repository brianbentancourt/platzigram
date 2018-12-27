const yo = require('yo-yo')
const layout = require('../layout')
const picture = require('../picture-card')

module.exports = pictures => {
    let el = yo`
    <div class="container timeline"> 
        <div class="row">
            <div class="col s12 m10 offset-m1 l6 offset-l3">
                ${
                    pictures.map(pic => {
                        return picture(pic)
                    })
                }
            </div>
        </div>
    </div>
    `
    return layout(el)
} 
