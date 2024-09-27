import './Vencimiento_planes.css';
const Vencimiento_planes = () => {
    return (
      <div className="container mt-5">
      {/* Interfaz de vencimiento de Membresías */}
      <div className="card mb-4">
        <div className="card-header">
          <h5>Interfaz de vencimiento de Membresías</h5>
        </div>
        <div className="card-body">
          <div className="mb-3 d-flex justify-content-between">
            <div>
              <label htmlFor="dateRange" className="form-label">Rango del Reporte de días a vencer</label>
              <input type="text" className="form-control" id="dateRange" placeholder="MM/DD/YYYY - MM/DD/YYYY" />
            </div>
            <div className="d-flex align-items-center">
            <button className="btn btn-primary">Generate Report</button>
              <input type="checkbox" id="predefinedDays" />
            </div>
            
          </div>
        </div>
      </div>

      {/* Lista de usuarios */}
      <div className="card mb-4">
        <div className="card-body">
          <ul className="list-group">
            {/* Reemplaza estos datos con los usuarios dinámicos */}
            {[
              { name: 'John Doe', daysLeft: 3 },
              { name: 'John Doe', daysLeft: 3 },
              { name: 'John Doe', daysLeft: 3 },
              { name: 'John Doe', daysLeft: 3 },
              { name: 'John Doe', daysLeft: -3 }
            ].map((user, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src="profile.png" alt="User" className="rounded-circle me-3" width="50" height="50" />
                  <span>{user.name}</span>
                </div>
                <div className="d-flex align-items-center">
                  <span>{user.daysLeft > 0 ? `${user.daysLeft} días` : `-${Math.abs(user.daysLeft)} días`}</span>
                  <button className="btn-logout ms-3 ">Ver </button>
                  <button className="btn btn-secondary ms-2">
                    <i className="bi bi-envelope"></i> Reenviar Mensaje
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Establecer número de días de alerta */}
      <div className="card">
        <div className="card-header">
          <h5>Estableces Número de Días de generación de Alerta.</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="alertDays" className="form-label">Dropdown</label>
            <select id="alertDays" className="form-select">
              <option value="3">3 días</option>
              <option value="7">7 días</option>
              <option value="15">15 días</option>
            </select>
          </div>
          <button className="btn btn-primary">Generar</button>
        </div>
      </div>
    </div>
  );
}
  export default Vencimiento_planes;
  