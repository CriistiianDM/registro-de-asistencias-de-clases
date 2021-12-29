/**
 *  @decs import libs
*/
import React from 'react';
import {Inicio} from './components/pages/Inicio';
import {Login} from './components/pages/Login';
import {Registro} from './components/pages/Registro';
import { style } from './css/style.css';
import style_header from "./css/style_header.css";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs app component
*/
export function App() {
 
  return(
    <Router basename='/registro-de-asistencias-de-clases'>
      <Routes>
        <Route  path="/" element={<Inicio />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/register" element={<Registro />} />
        <Route  path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}
