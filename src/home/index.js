const page = require('page')
const title = require('title')
const home = require('./template')

const main = document.getElementById('main-container')

page('/', function(ctx, next){
    title('Platzigram')

    const pictures = [ 
        {
            user:{
                username: 'persona',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png'
            },
            url:'https://materializecss.com/images/office.jpg',
            likes: 4654,
            liked: true,
            createdAt: new Date()
        },
        {
            user:{
                username: 'persona2',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHupn-XlRYsE46-K8HW8UFD1xHjoYSuiSDWVX4k5xHFMvo9nc'
            },
            url:'http://oi41.tinypic.com/5piw7o.jpg',
            likes: 2456,
            liked: false,
            createdAt: new Date().setDate(new Date().getDate() -10)
        }
     ]

    main.appendChild(home(pictures))
})