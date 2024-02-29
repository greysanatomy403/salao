import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import store from '../src/store/';
import { Provider } from 'react-redux';

/*Paginas*/
import Login from './view/login';
import NovoUsuario from './view/usuario-novo/';
import Home from './view/home/';
import UsuarioRecuperarSenha from './view/usuario-recuperar-senha';
import ServicoSalao from './view/servico-salao';
import HorarioMarcado from './components/horarios-marcados/horarios-marcados';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/horariosmarcados' Component={HorarioMarcado}></Route>
        <Route path='' Component={Home}></Route>
        <Route exact path='/novousuario' Component={NovoUsuario}></Route>
        <Route exact path='/login' Component={Login}></Route>
        <Route exact path='/usuariorecuperarsenha' Component={UsuarioRecuperarSenha}></Route>
        <Route exact path='/servicosalao' Component={ServicoSalao}></Route>
        
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
