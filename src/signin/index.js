const page = require('page')
const template = require('./template')

const main = document.getElementById('main-container')

page('/signin', function(ctx, next){
	main.innerHTML = ''
    main.appendChild(template)
})