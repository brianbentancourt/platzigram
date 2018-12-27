const page = require('page')

const main = document.getElementById('main-container')

page('/', function(ctx, next){
    main.innerHTML = 'Home'
})