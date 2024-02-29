import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';


function Navbar(){

    const dispatch = useDispatch();
    return(
      
        <nav className="navbar navbar-expand-lg">
         
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars text-white"></i>
                </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item"><Link className="nav-link ml-2"  to="/">Home</Link></li>
              
              {
                  useSelector(state => state.usuarioLogado) > 0 ?
              
              <>
              <li className="nav-item"><Link className="nav-link"  to="servicosalao">Marcar Horario</Link></li>
              <li className="nav-item"><Link className="nav-link"  to="horariosmarcados">Horarios Marcados</Link></li>
              <li className="nav-item"><Link className="nav-link"  onClick={() => dispatch ({type: 'LOG_OUT'}) }>Sair</Link></li>
              
              </>
              :
              <>
              <li className="nav-item"><Link className="nav-link"  to="/novousuario">Cadastrar</Link></li>
              <li className="nav-item"><Link className="nav-link"  to="/login">Login</Link></li>
              </>
              }

              </ul>
</div> 
</nav>
    )
 }     
            
export default Navbar;