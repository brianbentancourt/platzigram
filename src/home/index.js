const page = require('page')
const title = require('title')
const home = require('./template')

const main = document.getElementById('main-container')

page('/', function(ctx, next){
    title('Platzigram')
    main.appendChild(home)
})