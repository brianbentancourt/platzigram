const express = require('express')
const multer = require('multer')
const ext = require('file-extension')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, './uploads/')
	},
	filename: function (req, file, cb) {
	  cb(null, Date.now() + '.' + ext(file.originalname))
	}
  })
   
let upload = multer({ storage: storage }).single('picture')

var app = express()
var port = process.env.PORT || 3000

app.set('view engine', 'pug')

app.use(express.static('public'))


////verifico si el usuario esta logueado antes de permitir ingresar al home
// const restrict = (req, res, next) =>{
// 	if(req.user) return next()
// 	res.redirect('/signup')
// }

// app.get('/', restrict, function(req, res){
// 	res.render('index', { title: 'Platzigram'});
// })

const pictures = [
	{
		user: {
			username: 'c89sa',
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHupn-XlRYsE46-K8HW8UFD1xHjoYSuiSDWVX4k5xHFMvo9nc'
		},
		url: 'http://oi41.tinypic.com/5piw7o.jpg',
		likes: 0,
		liked: false,
		createdAt: +new Date().setDate(new Date().getDate() - 10)
	},
	{
		user: {
			username: 'c89sa',
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHupn-XlRYsE46-K8HW8UFD1xHjoYSuiSDWVX4k5xHFMvo9nc'
		},
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Belgium-6773_-_Battlefield_View_%2814152126362%29.jpg/400px-Belgium-6773_-_Battlefield_View_%2814152126362%29.jpg',
		likes: 25,
		liked: true,
		createdAt: +new Date().setDate(new Date().getDate() - 10)
	},
	{
		user: {
			username: 'alguien32',
			avatar: 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png'
		},
		url: 'https://www.telegraph.co.uk/content/dam/Travel/2018/September/tipperary-mountains-GettyImages-590231949.jpg',
		likes: 5,
		liked: false,
		createdAt: +new Date().setDate(new Date().getDate() - 5)
	},
	{
		user: {
			username: 'carlitos',
			avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png'
		},
		url: 'https://materializecss.com/images/office.jpg',
		likes: 1,
		liked: true,
		createdAt: +new Date()
	}
]

app.get('/', function (req, res) {
	res.render('index', { title: 'Platzigram' })
})

app.get('/signup', function (req, res) {
	res.render('index', { title: 'Platzigram - Signup' })
})

app.get('/signin', function (req, res) {
	res.render('index', { title: 'Platzigram - Signin' })
})

app.get('/api/pictures', function (req, res) {
	setTimeout(() => {
		res.send(pictures)
	}, 1500)

})

app.post('/api/pictures', (req, res) =>{
	upload(req, res, function (err){
		if(err) return res.status(500).send( "Error uploading file")

		res.send('File uploaded')
	})
})

app.get('/profile/:user', function (req, res) {
	const { user } = req.params;
	res.render('index', { title: `Platzigram - ${user}`})
})

app.get('/api/profile/:user', function (req, res) {
	const { user } = req.params;
	let result = {
		username: user,
		avatar: '',
		pictures: []
	}

	pictures.forEach(item =>{
		if(item.user.username == user){
			result.avatar = item.user.avatar
			let pic = {
				src: item.url,
				likes: item.likes
			}
			result.pictures.push(pic)
			
		}
	})

	res.send(result)
})

app.listen(port, function (err) {
	if (err) return console.log('Hubo un error'), process.exit(1)
	console.log('Escuchando en puerto ', port)
})



