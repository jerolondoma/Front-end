import { Link} from "react-router-dom";
import './Inicio.css';
const Inicio = () => {
  return (
    <div class="d-flex">

    
    <div class="flex-grow-1">


        
        <div class="content-section">
            
            <div class="profile-section">
                <img class="profile-img" src="https://via.placeholder.com/100" alt="User Profile"/>
                <div>
                    <h3>Nombre</h3>
                    <p>Cargo del usuario</p>
                </div>
                
            </div>

            <div class="card">
                <h5>Próximos Vencimientos</h5>
                <div class="user-list">
                    <div class="user-list-item">
                        <div><img src="https://via.placeholder.com/40" alt="John Doe"/> John Doe</div>
                        <span>3 días</span>
                    </div>
                    <div class="user-list-item">
                        <div><img src="https://via.placeholder.com/40" alt="Jane Smith"/> Jane Smith</div>
                        <span>4 días</span>
                    </div>
                    <div class="user-list-item">
                        <div><img src="https://via.placeholder.com/40" alt="Alex Johnson"/> Alex Johnson</div>
                        <span>6 días</span>
                    </div>
                </div>
                <Link class="nav-link" to="Vencimiento_planes"><button class="btn qbtn-light  w-100 mt-3" >Alertas de vencimiento (Ver)</button></Link>
                
            </div>

           
            <div class="row">
                <div class="col-md-6">
                    <div class="card" >
                        <h5>Gestión de usuarios</h5>
                        <p>Todos los movimientos de usuario</p>
                        <Link class="nav-link" to="Gestion_clientes"><button class="btn btn-light btn-select">Select</button></Link>
                        
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <h5>Reportes Administrativos</h5>
                        <p>Ver Reportes</p>
                        <Link class="nav-link" to="Reporte"><button class="btn btn-light btn-validate">Validate</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};


export default Inicio;
