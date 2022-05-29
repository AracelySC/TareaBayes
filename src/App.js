import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import Home from './views/Home.js'
import Recinto from './views/Recinto.js';
import Sexo from './views/Sexo.js';
import Aprendizaje from './views/Aprendizaje.js'
import Profesor from './views/Profesor.js'
import Redes from './views/Redes';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/Recinto/'} element={<Recinto />} />
          <Route path={'/Sexo/'} element={<Sexo />} />
          <Route path={'/Aprendizaje2/'} element={<Aprendizaje />} />
          <Route path={'/Profesor/'} element={<Profesor />} />
          <Route path={'/Redes/'} element={<Redes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
function NotFound() {
  return <>Ha llegado a una página que no existe</>;
}