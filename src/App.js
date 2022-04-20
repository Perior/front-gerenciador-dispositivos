import * as React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Devices from './pages/devices';
import Condicionador from './pages/condicionadores';
import Televisor from './pages/televisores';

function App() {
  const televisao = [{ modelo: 'Modelo' }, { volume: 'Volume' }, { canal: 'Canal' }];
  const arCondicionado = [{ modelo: 'Modelo' }, { temperatura: 'Temperatura' }];

  return (
    <div className="App">
      <Routes>

        <Route path="/" exact element={<Home />} />

        <Route path="/home" exact element={<Home />} />

        <Route path="/televisores" exact
          element={<Devices baseRoute='televisores' titleName='Television'
            propertiesToBeListed={televisao} />} />

        <Route path="/condicionadores" exact
          element={<Devices baseRoute='condicionadores' titleName='Air Conditioners'
            propertiesToBeListed={arCondicionado} />} />

        <Route path='/condicionadores/:id' exact element={<Condicionador />} />
        <Route path='/televisores/:id' exact element={<Televisor />} />

      </Routes>
    </div>
  );
}

export default App;
