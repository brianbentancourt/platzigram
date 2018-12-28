var express = require('express');

var app = express();
var port = process.env.PORT || 3000

app.set('view engine', 'pug');

app.use(express.static('public'));


////verifico si el usuario esta logueado antes de permitir ingresar al home
// const restrict = (req, res, next) =>{
// 	if(req.user) return next()
// 	res.redirect('/signup')
// }

// app.get('/', restrict, function(req, res){
// 	res.render('index', { title: 'Platzigram'});
// })

app.get('/', function (req, res) {
	res.render('index', { title: 'Platzigram' });
})

app.get('/signup', function (req, res) {
	res.render('index', { title: 'Platzigram - Signup' });
})

app.get('/signin', function (req, res) {
	res.render('index', { title: 'Platzigram - Signin' });
})

app.get('/api/pictures', function (req, res) {
	const pictures = [
		{
			user: {
				username: 'persona',
				avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png'
			},
			url: 'https://materializecss.com/images/office.jpg',
			likes: 1,
			liked: true,
			createdAt: +new Date()
		},
		{
			user: {
				username: 'persona2',
				avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHupn-XlRYsE46-K8HW8UFD1xHjoYSuiSDWVX4k5xHFMvo9nc'
			},
			url: 'http://oi41.tinypic.com/5piw7o.jpg',
			likes: 0,
			liked: false,
			createdAt: +new Date().setDate(new Date().getDate() - 10)
		},
		{
			user: {
				username: 'alguien',
				avatar: 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png'
			},
			url: 'https://www.telegraph.co.uk/content/dam/Travel/2018/September/tipperary-mountains-GettyImages-590231949.jpg',
			likes: 5,
			liked: false,
			createdAt: +new Date().setDate(new Date().getDate() - 5)
		}
	]

	setTimeout(() => {
		res.send(pictures)
	}, 3000)

})

app.listen(port, function (err) {
	if (err) return console.log('Hubo un error'), process.exit(1);
	console.log('Escuchando en puerto ', port);
})



