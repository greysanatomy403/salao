import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';



import Login from './view/login';
import Teste from '../src/view/teste'

function App() {
  return (
   <Router>

   
      <Route exact path='/' component={Teste} />

   </Router>
  );
}

export default App;
