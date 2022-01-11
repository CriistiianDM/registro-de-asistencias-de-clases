/**
 *  @decs import libs
*/
import React  from "react";
import { Footer } from "../components-inicio/Footer";
import { RegistroBox } from "../components-registro/RegistroBox";
import  json  from "../../json/components_states.json";


/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs import components 
*/
export function Registro() {
 const state_registro = Object.values(Object.values(json)[6])[0]
  return (
    <>
      <RegistroBox properties={state_registro}/>
      <Footer />
    </>
  );
}