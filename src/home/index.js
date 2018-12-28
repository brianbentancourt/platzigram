const page = require('page')
const empty = require('empty-element')
const title = require('title')
const home = require('./template')
//const request = require('superagent')
//const axios = require('axios')
const header = require('../header')

const main = document.getElementById('main-container')

// //usando request
// function loadPictures(ctx, next){
//     request
//         .get('/api/pictures')
//         .end((err, res) => {
//             if(err) return console.error(err)
//             console.log(res.body)
//             ctx.pictures = res.body // con context (ctx) podemos compartir datos a traves de los middleware 
//             next()
//         })
// }

// // usando con promesas de axios
// function loadPictures(ctx, next){
//     axios
//         .get('/api/pictures')
//         .then(res => {
//             ctx.pictures = res.data  
//             next()
//         })
//         .catch(err => console.error(err))
// }


// usando metodo nativo del navegador: fetch
function loadPictures(ctx, next){
    fetch('/api/pictures')
        .then(res =>{
            return res.json()
        })
        .then(pictures => {
            ctx.pictures = pictures
            next()
        })
        .catch(err => console.error(err))
}

async function asyncLoad(ctx, next){
    try{
        ctx.pictures = await fetch('/api/pictures').then(res => res.json())
        next()
    }catch(err){
        return console.error(err)
    }
}


page('/', header, asyncLoad, (ctx, next) =>{
    title('Platzigram')
    empty(main).appendChild(home(ctx.pictures))
})

