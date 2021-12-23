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


/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs import components 
*/
export function Inicio() {

     const state_cajaBox1 = Object.values(Object.values(json)[3])[0]
     const state_cajaBox2 = Object.values(Object.values(json)[3])[1]
     const state_cajaBox3 = Object.values(Object.values(json)[3])[2]
     
     // return component of the app
     return (
        <>
        <Header />
        <ToggleLogin />
        <Slider />
        <CajaBox  properties={state_cajaBox1} />
        <CajaBox  properties={state_cajaBox2} />
        <CajaBox  properties={state_cajaBox3} />
        <Footer />
        </>
     );
 }