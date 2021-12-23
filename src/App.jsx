/**
 *  @decs import libs
*/
import React from 'react';
import {Inicio} from './components/pages/inicio';
import { style } from './css/style.css';
import eventListener from './js/event_lister.js';

import {
  HashRouter as Router,
  Routes,
  Route,
  link
} from 'react-router-dom'


/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs app component
*/
export function App() {
  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </Router>
  );
}
