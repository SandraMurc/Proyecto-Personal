import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeSstIntegral from './components/homeSstIntegral/HomeSstIntegral';
import CrearSolicitud from './components/crearSolicitud/CrearSolicitud';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <header className="">
            <Routes>
              <Route path='/sstIntegral/crear' element={<CrearSolicitud/>}/>
              <Route path='/' element={<HomeSstIntegral/>}/>
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
