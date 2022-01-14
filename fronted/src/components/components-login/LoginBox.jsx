/**
 *  @decs import libs
*/
import React from "react";
import style_cajaText from "../../css/style_cajaText.css";
import {
    Link
} from 'react-router-dom'

/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs import components 
*/
export function LoginBox(props) {
    let state_caja_text = props.properties
    return (
        <div className={state_caja_text["cls-1"]}>

            <div className={state_caja_text["cls-2"]}>
                <div className={state_caja_text["cls-5"]}>{state_caja_text["title-login"]} </div>
                <div className={state_caja_text["cls-3"]}></div>
            </div>

            <div className={state_caja_text["cls-4"]}>
                <div></div>
                <input className={state_caja_text["cls-6"]} type="text" placeholder="Nombre usuario" />
                <input className={state_caja_text["cls-6"]} type="password" placeholder="Contraseña" />

                <div className={state_caja_text["cls-7"]}>
                    <div className={state_caja_text["cls-8"]}>
                        <Link to="/admin" className={state_caja_text["cls-9"]} id="login-1">{state_caja_text["ingresar"]}</Link>
                        <Link to="/register" className={state_caja_text["cls-9"]} id="login-2">{state_caja_text["registrar"]}</Link>
                    </div>
                    <div className={state_caja_text["cls-10"]}>{state_caja_text["olvido"]}</div>
                </div>

            </div>

        </div>
    )
}