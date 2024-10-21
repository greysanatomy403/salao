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
import QuemSomos from './view/quem-somos';



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/novousuario' element={<NovoUsuario />} />
        <Route path='/login' element={<Login />} />
        <Route path='/usuariorecuperarsenha' element={<UsuarioRecuperarSenha />} />
        <Route path='/servicosalao' element={< ServicoSalao />} />
        <Route path='/detalhes/:id' element={< Detalhes />} />
        <Route path='/editarservico/:id' element={<ServicoSalao />} />
        <Route path='/quemsomos' element={<QuemSomos />} />
      </Routes>
    </Router>
    </PersistGate>
    </Provider>
  );
}

export default App;
