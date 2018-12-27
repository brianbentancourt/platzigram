const page = require('page')
const template = require('./template')
const title = require('title')

const main = document.getElementById('main-container')

page('/signin', function(ctx, next){
    title('Platzigram - Signin')
	main.innerHTML = ''
    main.appendChild(template)
})