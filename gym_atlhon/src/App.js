
import './App.css';
import Inicio from "./pages/Inicio";

import Header from "./pages/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Gestion_clientes from './pages/Gestion_clientes';
import Vencimiento_planes from './pages/Vencimiento_planes';
import Error404 from './pages/Error404';
import Loguin from './pages/loguin';
import Reporte from './pages/Reporte';



function App() {
  return (
    <div >

      <BrowserRouter>
      <Header/>

      <Routes>

        <Route path="/" element={<Inicio/>}/>
        <Route path="/Gestion_clientes" element={<Gestion_clientes/>}/>
        <Route path="/Vencimiento_planes" element={<Vencimiento_planes/>}/>
        <Route path="/loguin" element={<Loguin/>}/>
        <Route path="/Reporte" element={<Reporte/>}/>
        

        

        <Route path="/h" element={<Error404/>}/>

       
      </Routes>
      

 
      </BrowserRouter>
      


    </div>
  );
}

export default App;
