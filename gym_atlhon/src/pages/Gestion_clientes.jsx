import './Gestion_clientes.css';
const Gestion_clientes = () => {

    return (
      


    <div className="container mt-5">
      <div className="row">
        {/* Registro de Clientes */}
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-header">
              <h5>Registro de Clientes</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="phone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="plan" className="form-label">Cargar plan</label>
                  <select className="form-select" id="plan">
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-warning">Save</button>
              </form>
            </div>
          </div>
        </div>

        {/* Opciones de Clientes */}
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-header">
              <h5>Actualizar Cliente</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="searchClientUpdate" className="form-label">Search Client</label>
                  <input type="text" className="form-control" id="searchClientUpdate" />
                </div>
                <button type="submit" className="btn btn-warning">Update</button>
              </form>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <h5>Eliminar Cliente</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="searchClientDelete" className="form-label">Search Client</label>
                  <input type="text" className="form-control" id="searchClientDelete" />
                </div>
                <button type="submit" className="btn btn-warning">Delete</button>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h5>Consultar Cliente</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="searchClientConsult" className="form-label">Search Client</label>
                  <input type="text" className="form-control" id="searchClientConsult" />
                </div>
                <button type="submit" className="btn btn-warning">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

);
}

  export default Gestion_clientes;
  