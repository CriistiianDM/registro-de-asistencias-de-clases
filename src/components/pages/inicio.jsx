/**
 *  @decs import libs
*/
import React  from "react";
import { Header } from "../components-inicio/Header";
import { Footer } from "../components-inicio/Footer";
import { Slider } from "../components-inicio/Slider";
import { CajaBox } from "../components-inicio/CajaBox";
import { ToggleLogin } from "../components-inicio/ToggleLogin";
import  json  from "../../json/components_states.json";
import eventListerner from '../../js/event_lister.js';

/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs import components 
*/
export function Inicio() {
   
     const state_cajaBox1 = Object.values(Object.values(json)[3])[0]
     const state_cajaBox2 = Object.values(Object.values(json)[3])[1]
     const state_cajaBox3 = Object.values(Object.values(json)[3])[2]
     const state_toggleLogin = Object.values(Object.values(json)[4])[0]
     const state_header_home = Object.values(Object.values(json)[0])[0]
  
     // return component of the app
     return (
        <>
        <Header  properties={state_header_home} />
        <ToggleLogin properties={state_toggleLogin} />
        <Slider />
        <CajaBox  properties={state_cajaBox1} />
        <CajaBox  properties={state_cajaBox2} />
        <CajaBox  properties={state_cajaBox3} />
        <Footer />
        </>
     );
 }

