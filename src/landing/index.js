const yo = require('yo-yo')

module.exports = box => {
    return yo`
    <div class="container">
        <div class="row">
            <div class="col s10 push-s1">
                <div class="row">
                <div class="col m5 hide-on-small-only">
                    <img class="iphone" src="./iphone.png" />
                </div>
                    ${box}
                </div>
            </div>
        </div>
    </div>
    `
} 