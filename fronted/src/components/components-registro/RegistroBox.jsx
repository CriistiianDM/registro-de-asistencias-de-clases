/**
 *  @decs import libs
*/
import React from "react";
import { useState, useEffect } from "react";
import style_registro from "../../css/style_registro.css";
import $ from "jquery";

export function RegistroBox(props) {

    const [data_array, set_data] = useState({
        p_nombre: "",
        s_nombre: "",
        p_apellido: "",
        s_apellido: "",
        correo: "",
        contrasena: "",
        contrasena_confirm: "",
        tipo_persona: "",
        dirrecion: "",
        cuenta_id: "",
    });

    const [data_usuario, set_data_usuario] = useState([])

    let state_registro = props.properties


    let handle_change = (e) => {
        obtener_info(set_data, e)
    }

    let verificar_email = (e) => {
        verificar_correo(set_data, e)
    }

    let verificar_identificacion_data = (e) => {
        verificar_identificacion(set_data, e, set_data_usuario)
    }

    //console.log(state_registro)
    return (
        <div className={state_registro["cls-1"]}>
            <div className={state_registro["cls-2"]}>
                <div className={state_registro["cls-4"]}>
                    {state_registro["title"]}
                </div>
            </div>
            <div className={state_registro["cls-3"]}></div>
            <form className={state_registro["cls-5"]} id="form">
                <div className={state_registro["cls-6"]}>
                    <input onBlur={handle_change} name="p_nombre" className={state_registro["cls-7"]} type="text" placeholder="Primer Nombre" id="p_nombre" />
                    <input onBlur={handle_change} name="s_nombre" className={state_registro["cls-7"]} type="text" placeholder="Segundo Nombre" id="s_nombre" />
                </div>
                <div className={state_registro["cls-6"]}>
                    <input onBlur={handle_change} name="p_apellido" className={state_registro["cls-7"]} type="text" placeholder="Primer Apellido" id="p_apellido" />
                    <input onBlur={handle_change} name="s_apellido" className={state_registro["cls-7"]} type="text" placeholder="Segundo Apellido" id="s_apellido" />
                </div>
                <label className={state_registro["cls-10"]} >{state_registro["selecionRol"]}</label>
                <div className={state_registro["cls-9"]}>
                    <select onClick={handle_change} name="tipo_persona" className={state_registro["cls-8"]}>
                        <option disabled> Seleccione un rol </option>
                        <option name="tipo_persona" value="estudiante">{state_registro["value-1"]}</option>
                        <option name="tipo_persona" value="profesor">{state_registro["value-2"]}</option>
                    </select>
                </div>
                <div className={state_registro["cls-6"]}>
                    <input onBlur={verificar_email} name="correo" className={state_registro["cls-7"]} type="email" placeholder="Correo Electronico" id="correo" />
                    <input onBlur={verificar_identificacion_data} name="cuenta_id" className={state_registro["cls-7"]} type="text" placeholder="Identificacion" id="cuenta_id" />
                </div>
                <div className={state_registro["cls-6"]}>
                    <input className={state_registro["cls-7"]} type="password" placeholder="Contraseña" id="input-5" />
                    <input className={state_registro["cls-7"]} type="password" placeholder="verficar contraseña" id="input-6" />
                </div>
                <div className={state_registro["cls-11"]}>
                    <button className={state_registro["cls-12"]} type="submit"> {state_registro["enviar"]} </button>
                </div>
            </form>
        </div>

    );
}

function obtener_info(set_data, event) {
    //validar que sean solo letras
    let regexp = /^[a-zA-Z]{1,30}$/;
    var only_words = regexp.exec(event.target.value);
    console.log(only_words)
    if (only_words != null) {
        set_data({ [event.target.name]: event.target.value })
        $('#' + event.target.name + '').removeClass('style-incorrecto');
        $('#' + event.target.name + '').addClass('style-correcto');
    } else {
        $('#' + event.target.name + '').removeClass('style-correcto');
        $('#' + event.target.name + '').addClass('style-incorrecto');
    }

}

function verificar_correo(set_data, event) {
    //validar si es un correo
    let regexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let only_email = regexp.exec(event.target.value);

    if (only_email != null) {
        set_data({ [event.target.name]: event.target.value })
        $('#' + event.target.name + '').removeClass('style-incorrecto');
        $('#' + event.target.name + '').addClass('style-correcto');
    } else {
        $('#' + event.target.name + '').removeClass('style-correcto');
        $('#' + event.target.name + '').addClass('style-incorrecto');
    }

}
async function enviar_info(data) {

    try {
        await fetch('http://localhost:4500/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })

    } catch (error) {
        console.log(error)
    }

}

async function verificar_identificacion(set_data, event) {
    //verifcar que sea solo numeros
    let regexp = /^[0-9]{10}$/;
    var only_numbers = regexp.exec(event.target.value);
 
    if (only_numbers != null) {
        const respuesta = await obtener_info_usuario(event.target.value)
        if (respuesta[0] === undefined) {
            set_data({ [event.target.name]: event.target.value })
            $('#' + event.target.name + '').removeClass('style-incorrecto');
            $('#' + event.target.name + '').addClass('style-correcto');
        }
        else {
            $('#' + event.target.name + '').removeClass('style-correcto');
            $('#' + event.target.name + '').addClass('style-incorrecto');
        }
    } else {
        $('#' + event.target.name + '').removeClass('style-correcto');
        $('#' + event.target.name + '').addClass('style-incorrecto');
    }

}


async function obtener_info_usuario( indentificacion) {

    try {
        const respuesta = await fetch(`http://localhost:4500/register/${indentificacion}`)
        const data = await respuesta.json()
        return data
    } catch (error) {
        console.log(error)
    }

}   