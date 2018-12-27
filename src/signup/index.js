const page = require('page')
const template = require('./template')

const main = document.getElementById('main-container')

page('/signup', function(ctx, next){
	main.innerHTML = ''
  main.appendChild(template)
})
