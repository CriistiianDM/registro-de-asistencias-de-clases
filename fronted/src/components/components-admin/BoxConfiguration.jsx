/**
 *  @decs import libs
*/
import React from "react";
import style_configuration from "../../css/style_configuration.css";
import { useState, useEffect } from "react";


export function BoxConfiguration(props) {

    //cookies
    const cookie = document.cookie
    const email_user = cookie.split("=")[1]
    console.log(email_user)
    //elimar cookies
    document.cookie = "q=; expires=Thu, 01 Jan 1970 00:00:00 UTC"; 

    //states of components
    const [data_array, set_data] = useState({
        "p_nombre": "",
        "p_apellido": "",
        "email": ""
    })

    useEffect(() => {
        get_data_json(email_user, set_data, data_array)
    }, [])

    console.log(data_array, 'data_array')
    let state_admin = props.properties

    return (
        <>
            <div className={state_admin["cls-1"]}>
                <div className={state_admin["cls-2"]}>
                    <div className={state_admin["cls-3"]}></div>
                </div>
                <div className={state_admin["cls-4"]}>
                    <div className={state_admin["cls-5"]}>
                        <div className={state_admin["cls-6"]}>{data_array.p_nombre}</div>
                        <div className={state_admin["cls-6"]}>{data_array.p_apellido}</div>
                    </div>
                    <button className={state_admin["cls-7"]} > Ajustes</button>
                    <button className={state_admin["cls-7"]} id="boton-salir">{state_admin["salir"]}</button>
                </div>
            </div>
        </>
    );
}

async function get_data_json(email, set_data, data_array) {

    try {
        const res = await fetch(`http://localhost:4500/admin/${email}`);
        const data = await res.json();

        if (data[0] !== undefined) {
            return set_data({ ...data_array, "p_nombre": data[0].p_nombre, "p_apellido": data[0].p_apellido, "email": email })
        }

    } catch (error) {
        console.log(error);
    }

}

