import { Link } from 'react-router-dom'
import '../../style/Navbar.css'
export default function Navbar({ children }) {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark bd-navbar fixed-top bg-dark">
        <div class="container-xxl flex-wrap flex-md-nowrap">
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <Link to="/" href='#' className="nav__link nav-item">
              <img src="../icon.png" alt="bayes logo" width="36" height="36"></img>
              <span className='navbar-brand'>Naive Bayes</span>
            </Link>
            <ul class="navbar-nav">
              <Link to="/" href='#' className='nav__link nav-item'>
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
        </div>
      </nav>
    </>
  );
}