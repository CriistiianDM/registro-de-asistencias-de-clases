/**
 *  @decs import libs
*/
import React  from "react";
import style_toggleLogin from "../../css/style_toggleLogin.css";
import {
  Link
} from 'react-router-dom'

export function ToggleLogin(props) {
    let state_toggleLogin = props.properties;
    return (
        <div className={state_toggleLogin["cls-1"]}>
            <div className={state_toggleLogin["cls-2"]}>
                <Link to="/login" className={state_toggleLogin["cls-3"]} id="boton-toggle1">{state_toggleLogin["login"]}</Link>
                <Link to="/register" className={state_toggleLogin["cls-3"]} id="boton-toggle2">{state_toggleLogin["registrar"]}</Link>
            </div>
        </div>
    );
}