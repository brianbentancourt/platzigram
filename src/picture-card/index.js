const yo = require('yo-yo')
//const moment = require('moment')
const translate = require('../translate')


module.exports = pic => {
    let el

    const render = picture =>{
        return yo`
        <div class="card ${picture.liked ? 'liked' : ''}">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${picture.url}">
            </div>
            <div class="card-content">
                <a href="/profile/${picture.user.username}" class="card-title activator grey-text text-darken-4">
                    <img class="avatar" src="${picture.user.avatar}" >
                    <span class="username"> ${picture.user.username}</span>
                </a>
                <p>
                    <small class="right time">${translate.date.format(picture.createdAt)}</small>
                    <a class="left" onclick=${like.bind(null, true)}>
                        <i class="fa fa-heart-o" ></i>
                    </a>
                    <a class="left" onclick=${like.bind(null, false)}>
                        <i class="fa fa-heart" ></i>
                    </a>
                    <span class="left likes">${translate.message('likes', { likes: picture.likes })}</span>
                </p>
            </div>
        </div>
        `
    }

    const like = liked =>{
        pic.liked = liked
        pic.likes += liked ? 1 : -1
        const newEl = render(pic)
        yo.update(el, newEl)
        return false
    }

    el = render(pic)
    return el
}





