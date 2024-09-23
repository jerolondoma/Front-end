import React from 'react';
import './login.css';

function Login() {
  return (
    <>
      <header className="header">
        <h2 className="header-title">Bienvenidos al sistema</h2>
        <img className="header-logo" src='./imagenes/LogoAtlonN.png' alt="Logo" />
      </header>
      
      <div className="login-container">
        <div className="login-box">
          <img className='logo-1' src='./imagenes/LogoAtlonN.png' alt="logoAtlon" />
          <form>
            <div className="form-group">
              <label htmlFor="nombreUsuario">Nombre de usuario</label>
              <input type="text" id="nombreUsuario" name="nombreUsuario" placeholder="Nombre de usuario" required />
            </div>
            <div className="form-group">
              <label htmlFor="contrasena">Contraseña</label>
              <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña" required />
            </div>
            <button type="submit" className="login-button">Ingresar</button>
            <button type="submit" className="login-button">Registrarme</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
