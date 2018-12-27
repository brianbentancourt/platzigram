const yo = require('yo-yo')

module.exports = pic => {
    return yo`
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${pic.url}">
                </div>
                <div class="card-content">
                    <a class="card-title activator grey-text text-darken-4">
                        <img class="avatar" src="${pic.user.avatar}" >
                        <span class="username"> ${pic.user.username}</span>
                    </a>
                    <p>
                        <small class="right time"> Hace 1 dia </small>
                        <a class="left">
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                        </a>
                        <span class="left likes">${pic.likes} me gusta</span>
                    </p>
                </div>
            </div>
            `
}

