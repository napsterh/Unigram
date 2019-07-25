var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="unigram">Unigram</h1>
                                <form class="signup-form">
                                    <h2>Registrate para ver las fotos de tus amigos de la universidad</h2>
                                    <div class="section">
                                        <a class="btn btn-fb hide-on-small-only">Iniciar sesion con facebook</a>
                                        <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> Iniciar sesion</a>
                                    </div>
                                        <div class="divider"></div>
                                    <div class="section">    
                                        <input type="email" name="email" placeholder="Correo electronico"/>
                                        <input type="text" name="nombre" placeholder="Nombre completo"/>
                                        <input type="text" name="username" placeholder="Nombre de usuario"/>
                                        <input type="password" name="password" placeholder="Contrasena"/>
                                        <button class="btn waves-effect waves-light btn-signup" type="submit">Registrate</button>    
                                    </div>
                                </form>
                            </div>    
                        </div>
                        <div class="row">
                            <div class="login-box">
                                Tienes una cuenta? <a href="/signin">Entrar</a> 
                            </div>
                        </div>
                    </div>`;
        module.exports = landing(signupForm);