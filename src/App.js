import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { store, persistor } from '../src/store/';
import { Provider } from 'react-redux';
import Detalhes from './view/Salao-detalhes/detalhes';
import { PersistGate } from 'redux-persist/integration/react';

/*Paginas*/
import Login from './view/login';
import NovoUsuario from './view/usuario-novo/';
import Home from './view/home/';
import UsuarioRecuperarSenha from './view/usuario-recuperar-senha';
import ServicoSalao from './view/servico-salao';



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        
        <Route path='' Component={Home}></Route>
        <Route exact path='/novousuario' Component={NovoUsuario}></Route>
        <Route exact path='/login' Component={Login}></Route>
        <Route exact path='/usuariorecuperarsenha' Component={UsuarioRecuperarSenha}></Route>
        <Route exact path='/servicosalao' Component={ServicoSalao}></Route>
        <Route path='/detalhes/:id' Component={Detalhes}></Route>
        <Route path='/editarservico/:id' Component={ServicoSalao}></Route>
        
      </Routes>
    </Router>
    </PersistGate>
    </Provider>
  );
}

export default App;
