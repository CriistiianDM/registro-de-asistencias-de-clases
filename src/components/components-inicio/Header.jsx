/**
 *  @decs import libs
 */
import React  from "react";
import  json  from "../../json/components_states.json";
import style_header from "../../css/style_header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs import components 
*/
export function Header() {
    let state_header = Object.values(Object.values(json)[0])[0]
    return (
        <header className={state_header["cls-1"]}>
             <div></div>
             <div className={state_header["cls-2"]}>{state_header.title}</div>
             <div className={state_header["cls-3"]}>
                <FontAwesomeIcon icon={ faUser }  className={state_header["cls-4"]} />
             </div>
        </header>
    );
}