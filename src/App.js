import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './view/login';
import NovoUsuario from './view/usuario-novo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/novousuario" Component={NovoUsuario}></Route>
      </Routes>
    </Router>
  );
}

export default App;
