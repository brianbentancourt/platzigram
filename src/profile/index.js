const page = require('page')
const profile = require('./template')
const title = require('title')
const empty = require('empty-element')
const header = require('../header')

const main = document.getElementById('main-container')

const loadUser = async (ctx, next) =>{
    try{
        ctx.user = await fetch(`/api/profile/${ctx.params.user}`)
                .then(res => res.json())
        
        next()

    }catch(err){
        console.error(err)
    }
}

page('/profile/:user', header, loadUser, function(ctx, next){    
    console.log('ctx ',ctx)
    title(`Platzigram - ${ctx.params.user}`)
    empty(main).appendChild(profile(ctx.user))
})
