/**
 *  @decs import libs
*/
import React  from "react";
import { Header } from "../components-inicio/Header";
import { Footer } from "../components-inicio/Footer";
import { Slider } from "../components-inicio/Slider";

/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs import components 
*/
export function Inicio() {
  
     // return component of the app
     return (
        <>
        <Header />
        <Slider />
        <Footer />
        </>
     );
 }