import React from "react";
import './Reporte.css';

function Reporte() {
  return (
    <div className="unique-report-interface">
      {/* Primera Sección: Interfaz de Reportes Administrativos */}
      <div className="unique-report-header p-4 shadow-sm">
        <h2 className="unique-title">Interfaz de Reportes Administrativos</h2>
        <div className="d-flex flex-wrap align-items-center">
          <div className="flex-grow-1 pe-3">
            <label className="unique-label" htmlFor="reportType">
              Seleccione Tipo de Reporte
            </label>
            <select className="form-select" id="reportType">
              <option>Most Requested Plan</option>
            </select>
          </div>
          <div className="flex-grow-1 pe-3">
            <label className="unique-label" htmlFor="planType">
              Tipo de Plan
            </label>
            <select className="form-select" id="planType">
              <option>All Plans</option>
            </select>
          </div>
          <div className="flex-grow-1">
            <label className="unique-label" htmlFor="dateRange">
              Rango del Reporte
            </label>
            <input
              type="text"
              id="dateRange"
              className="form-control"
              placeholder="MM/DD/YYYY - MM/DD/YYYY"
            />
          </div>
          <div className="mt-3 mt-md-0 ms-auto">
            <button className="btn btn-orange">Generate Report</button>
          </div>
        </div>
      </div>

      {/* Segunda Sección: Vista del Reporte */}
      <div className="unique-report-view my-4 p-4 shadow-sm">
        <h3 className="unique-subtitle">Vista del Reporte</h3>
        <div className="d-flex">
          <div className="unique-report-content flex-grow-1 p-3 border rounded">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum. Suspendisse potenti.
            </p>
            <div className="d-flex">
              <select className="form-select me-2">
                <option>Select</option>
              </select>
              <select className="form-select">
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="unique-chart ms-4">
            {/* Placeholder para gráfico */}
            <div className="chart-placeholder"></div>
          </div>
        </div>
      </div>

      {/* Tercera Sección: Exportar Opciones */}
      <div className="unique-export-options p-4 shadow-sm">
        <h4 className="unique-subtitle">Exportar Opciones</h4>
        <button className="btn btn-orange me-2">Export as PDF</button>
        <button className="btn btn-orange">Export as Excel</button>
      </div>
    </div>
  );
}

export default Reporte;
