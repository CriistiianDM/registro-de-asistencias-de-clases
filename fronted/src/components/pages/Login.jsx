/**
 *  @decs import libs
*/
import React  from "react";
import { Footer } from "../components-inicio/Footer";
import { LoginBox } from "../components-login/LoginBox";
import  json  from "../../json/components_states.json";

/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs import components 
*/
export function Login() {
 const state_caja_text = Object.values(Object.values(json)[5])[0]
  return (
    <>
      <LoginBox properties={state_caja_text}/>
      <Footer />
    </>
  );
}