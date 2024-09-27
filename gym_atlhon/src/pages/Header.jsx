import { Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
      


    <nav className="navbar navbar-light bg-white px-4">
    <div className="navbar-brand">
    <Link to="/"> <img src="https://i.pinimg.com/736x/63/06/f8/6306f8e16651b943254cd477ba8470ec.jpg" alt="ym" /></Link>
      Gym Athlon
    </div>
    <div className="ml-auto">
    <Link  to="/"><button className="btn-dashboard" >Dashboard</button></Link>
      <Link  to="loguin"><button className="btn-logout " >Logout</button></Link>
    </div>
  </nav>
);
};

  export default Header;
  