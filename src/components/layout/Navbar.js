import { Link } from 'react-router-dom'
import '../../style/Navbar.css'
export default function Navbar({ children }) {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <Link to="/Home" href='#' className='nav__link nav-item'>
              <span className='navbar-brand'>Estilo de Aprendizaje</span>
            </Link>
            <Link to="/Recinto" href='#' className='nav__link nav-item'>
              <span className='navbar-brand'>Adivinar Recinto</span>
            </Link>
            <Link to="/Sexo" href='#' className='nav__link nav-item'>
              <span className='navbar-brand'>Adivinar Sexo</span>
            </Link>
            <Link to="/Aprendizaje2" href='#' className='nav__link nav-item'>
              <span className='navbar-brand'>Aprendizaje 2</span>
            </Link>
            <Link to="/Profesor" href='#' className='nav__link nav-item'>
              <span className='navbar-brand'>Tipo de  Profesor</span>
            </Link>
            <Link to="/Redes" href='#' className='nav__link nav-item'>
              <span className='navbar-brand'>Clasificación de Redes</span>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}