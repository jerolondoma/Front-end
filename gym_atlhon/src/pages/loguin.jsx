import { Link} from "react-router-dom";
import './loguin.css';

const Loguin = () => {
  return (
    <>

    
    <div className="login-container">
      <div className="login-box">
      <img className='logo-1' src="https://i.pinimg.com/736x/63/06/f8/6306f8e16651b943254cd477ba8470ec.jpg" alt="logoAtlon"/>
        
        <form>
          <div className="form-group">
            <label htmlFor="nombreUsuario">Nombre de usuario</label>
            <input type="text" id="nombreUsuario" name="nombreUsuario" placeholder="Nombre de usuario" required />
          </div>
          <div className="form-group">
            <label htmlFor="contrasena">Contraseña</label>
            <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña" required />
          </div>
          <Link class="nav-link" to="/"><button type="submit" className="login-button">Ingresar</button></Link>
          <button type="submit" className="login-button">Registrarme</button>
          
        </form>
      </div>
    </div>
  </>
  );
};


export default Loguin;
