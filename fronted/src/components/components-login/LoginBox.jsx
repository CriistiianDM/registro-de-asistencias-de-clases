/**
 *  @decs import libs
*/
import React from "react";
import style_cajaText from "../../css/style_cajaText.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs import components 
*/
export function LoginBox(props) {

    let state_caja_text = props.properties
    const navigate = useNavigate();

    const [data_array, set_data] = useState({
        email: "",
        password: ""
    });

    const [data_band, set_data_band] = useState({
        "band_email": false,
        "band_password": false
    });

    let handle_change = (e) => {
        verificar_campos(data_array, set_data, e , data_band, set_data_band)
    }

    let handle_click = (e) => {
        e.preventDefault();
       
        if (data_band.band_email && data_band.band_password) {
            event_click_login(data_array,navigate)
        }
    }

    return (
        <div className={state_caja_text["cls-1"]}>

            <div className={state_caja_text["cls-2"]}>
                <div className={state_caja_text["cls-5"]}>{state_caja_text["title-login"]} </div>
                <div className={state_caja_text["cls-3"]}></div>
            </div>

            <div className={state_caja_text["cls-4"]}>
                <div></div>
                <input onChange={handle_change} title="type-1" name="email" className={state_caja_text["cls-6"]} type="text" placeholder="Nombre usuario" id="band_email"/>
                <input onChange={handle_change} title="type-2" name="password" className={state_caja_text["cls-6"]} type="password" placeholder="Contraseña"  id="band_password" />

                <div className={state_caja_text["cls-7"]}>
                    <div className={state_caja_text["cls-8"]}>
                        <button onClick={handle_click} className={state_caja_text["cls-9"]} id="login-1">{state_caja_text["ingresar"]}</button>
                        <button className={state_caja_text["cls-9"]} id="login-2">{state_caja_text["registrar"]}</button>
                    </div>
                    <div className={state_caja_text["cls-10"]}>{state_caja_text["olvido"]}</div>
                </div>

            </div>

        </div>
    )
}


function verificar_campos(data_array, set_data, e ,data_band, set_data_band) {

    let regexp;
    let sizeChar = 0;

    if (e.target.title === 'type-1') {
        //verifcar un correo electronico con expresion regular
        regexp = /^[a-zA-Z0-9._-]{1,100}@[a-zA-Z0-9.-]{1,44}\.[a-zA-Z]{2,6}$/;
        sizeChar = 151;
    }
    else if (e.target.title === 'type-2') {
        //verficar contraseña
        regexp = /^[0-9]*|[aA-zZ]*$/;
        sizeChar = 21;
    }

    const validacion_expresion = regexp.exec(e.target.value);
    //console.log(validacion_expresion,e.target.id,e.target.value)
    if (validacion_expresion != null && validacion_expresion.length < sizeChar) {
        set_data({...data_array, [e.target.name]: e.target.value })
        set_data_band({...data_band, [e.target.id]: true })
    }
    else {
        set_data_band({...data_band, [e.target.id]: false })
    }

}


async function event_click_login(data_array,navigate) {
    try {

        const { email , password } = data_array;
        const res = await fetch(`http://localhost:4500/login/${email}/${password}`);
        const data = await res.json();
        
        if (data[0] !== undefined) {
         navigate('/admin');
        }
        else {
            alert("Usuario o contraseña incorrectos")
        }

    } catch (error) {
        console.log(error)
    }

}