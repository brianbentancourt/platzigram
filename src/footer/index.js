const yo = require('yo-yo')
const translate = require('../translate')

const lang = locale =>{
  localStorage.locale = locale
  location.reload()
  return false
}

let el = yo`
<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l3 center-align"><a class="dropdown-button btn btn-flat" href="#" data-activates="dropdown1">${translate.message('language')}</a>
        <ul class="dropdown-content" id="dropdown1">
          <li><a href="#" onclick=${lang.bind(null, 'es')} >${translate.message('spanish')}</a></li>
          <li><a href="#" onclick=${lang.bind(null, 'en-US')} >${translate.message('english')}</a></li>
        </ul>
      </div>
      <div class="col s12 l3 push-l6 center-align">© 2018 Platzigram</div>
    </div>
  </div>
</footer>
`


document.body.appendChild(el)