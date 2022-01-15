/**
 *  @decs import libs
*/
import React  from "react";
import style_configuration from "../../css/style_configuration.css";
import { useState, useEffect } from "react";


export function BoxConfiguration(props) {
    
    let state_admin = props.properties
      console.log(process.env.password);
    return (
        <>
         <div className={state_admin["cls-1"]}>
            <div className={state_admin["cls-2"]}></div>
            <div className={state_admin["cls-3"]}>
                <div></div>
                <div> pepe </div>
                <div>{state_admin["salir"]}</div>
            </div>
         </div>
        </>
    );
}

async function get_data_json() {
    try {
        const response = await fetch('/json/components_states.json');
    } catch (error) {
        console.log(error);
    }
    
}

