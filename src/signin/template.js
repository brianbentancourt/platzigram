const yo = require('yo-yo')
const landing = require('../landing')

const signin = yo`<div class="col s12 m7">
			<div class="row">
			  <div class="signup-box">
				<h1 class="platzigram">Platzigram</h1>
				<form class="signup-form">
				  <div class="section">
					<a class="btn btn-fb hide-on-small-only"><i class="fa fa-facebook-official"></i> Iniciar sesión</a>
				  </div>
				  <div class="divider"></div>
				  <div class="section"><input type="text" name="username" placeholder="Nombre de usuario" />
					<input type="password" name="password" placeholder="Contraseña" />
					<button class="btn waves-effect waves-light btn-signup" type="submit">iniciar sesion</button>
				  </div>
				</form>
			  </div>
			</div>
			<div class="row">
			  <div class="login-box">
				¿No tienes una cuenta? <a href="/signup">Entrar</a>
			  </div>
			</div>
          </div>`
          
module.exports = landing(signin)