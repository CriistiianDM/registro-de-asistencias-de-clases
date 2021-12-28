/**
 *  @decs import libs
 */
import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs import components 
*/
export function Header(props) {
    let state_header = props.properties
    let iconState = [faUser,faChevronDown]
    return (
        <header className={state_header["cls-1"]}>
             <div></div>
             <div className={state_header["cls-2"]}>{state_header.title}</div>
             <div className={state_header["cls-3"]}>
                <FontAwesomeIcon icon={ iconState[state_header["icon-caja"]] }  className={state_header["cls-4"]} />
             </div>
        </header>
    );
}