/**
 *  @decs import libs
*/
import React from "react";
import { useState, useEffect  } from "react";
import style_registro from "../../css/style_registro.css";
import $ from "jquery";

export function RegistroBox(props) {

    const [data_array, set_data] = useState({
        "p_nombre": "",
        "s_nombre": "",
        "p_apellido": "",
        "s_apellido": "",
        "correo": "",
        "contrasena": "",
        "tipo_persona": "",
        "dirrecion": "",
        "cuenta_id": ""
    });

    const [data_usuario, set_data_usuario] = useState([])

    let state_registro = props.properties

    let handle_change = (e) => {
        validaciones_info(set_data, e, data_array)
    }

    let verificar_identificacion_data = (e) => {
        verificar_identificacion(set_data, e, data_array)
    }

    let handle_clave_iguales = (e) => {
        validar_clave_iguales(set_data, e, data_array)
    }

    let handle_submit = (e) => {
        e.preventDefault();
        enviar_info(data_array)
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
                    <input onBlur={handle_change} title="tipo-1" name="p_nombre" className={state_registro["cls-7"]} type="text" placeholder="Primer Nombre" id="p_nombre" />
                    <input onBlur={handle_change} title="tipo-3" name="s_nombre" className={state_registro["cls-7"]} type="text" placeholder="Segundo Nombre" id="s_nombre" />
                </div>
                <div className={state_registro["cls-6"]}>
                    <input onBlur={handle_change} title="tipo-1" name="p_apellido" className={state_registro["cls-7"]} type="text" placeholder="Primer Apellido" id="p_apellido" />
                    <input onBlur={handle_change}  title="tipo-3" name="s_apellido" className={state_registro["cls-7"]} type="text" placeholder="Segundo Apellido" id="s_apellido" />
                </div>
                <label className={state_registro["cls-10"]} >{state_registro["selecionRol"]}</label>
                <div className={state_registro["cls-9"]}>
                    <select onClick={handle_change} title="tipo-1" name="tipo_persona" className={state_registro["cls-8"]}>
                        <option disabled> Seleccione un rol </option>
                        <option name="tipo_persona" title="tipo-1" value="estudiante">{state_registro["value-1"]}</option>
                    </select>
                </div>
                <div className={state_registro["cls-6"]}>
                    <input onBlur={handle_change} title="tipo-2" name="correo" className={state_registro["cls-7"]} type="email" placeholder="Correo Electronico" id="correo" />
                    <input onBlur={verificar_identificacion_data} name="cuenta_id" className={state_registro["cls-7"]} type="text" placeholder="Identificacion" id="cuenta_id" />
                </div>
                <div className={state_registro["cls-6"]}>
                    <input onBlur={handle_clave_iguales} className={state_registro["cls-7"]} type="password" placeholder="Contraseña" id="input-5" />
                    <input onBlur={handle_clave_iguales} className={state_registro["cls-7"]} type="password" placeholder="verficar contraseña" id="input-6" />
                </div>
                <div className={state_registro["cls-11"]}>
                    <button onClick={handle_submit} className={state_registro["cls-12"]} type="submit" > {state_registro["enviar"]} </button>
                </div>
            </form>
        </div>

    );
}



function validar_clave_iguales(set_data, event , data_array) {
    //validar que no tenga espacios ni sea nulo

    if ($('#input-6').val() === $('#input-5').val()
        && $('#input-6').val() !== "" && $('#input-5').val() !== "") {

        set_data({...data_array , contrasena: $('#input-6').val() });
        console.log(data_array)
        for (let i = 5; i < 7; i++) {
            $('#input-' + i + '').removeClass('style-incorrecto');
            $('#input-' + i + '').addClass('style-correcto');
        }
    }
    else {

        for (let i = 5; i < 7; i++) {
            $('#input-' + i + '').removeClass('style-correcto');
            $('#input-' + i + '').addClass('style-incorrecto');
        }

    }

}

function validaciones_info(set_data, event, data_array) {

    let regexp;

    if (event.target.title === 'tipo-1') {
        //validar que sean solo letras
        regexp = /^[a-zA-Z]{1,30}$/;
    }
    else if (event.target.title === 'tipo-2') {
        //validar correo
        regexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    }
    else if (event.target.title === 'tipo-3') {
        //validar que sea solo letras y espacios
        regexp = /^[\sa-zA-Z\s]{1,30}$/;
    }

    var only_words = regexp.exec(event.target.value);
    console.log(event.target.title)

    if (only_words != null) {
        set_data({...data_array, [event.target.name]: event.target.value })
        console.log(data_array)
        change_correct_incorrect(true, event)
    } else {
        change_correct_incorrect(false, event)
    }

}

function change_correct_incorrect(bool, event) {
    if (bool) {
        $('#' + event.target.name + '').removeClass('style-incorrecto');
        $('#' + event.target.name + '').addClass('style-correcto');
    } else {

        $('#' + event.target.name + '').removeClass('style-correcto');
        $('#' + event.target.name + '').addClass('style-incorrecto');
    }
}

async function enviar_info(data) {

    try {
        console.log(data)
        const respuesta = await fetch('http://localhost:4500/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        const data_respuesta = await respuesta.json();
        console.log(data_respuesta)

    } catch (error) {
        console.log(error)
    }

}

async function verificar_identificacion(set_data, event , data_array) {
    //verifcar que sea solo numeros
    let regexp = /^[0-9]{10}$/;
    var only_numbers = regexp.exec(event.target.value);

    if (only_numbers != null) {
        const respuesta = await obtener_info_usuario(event.target.value)
        if (respuesta[0] === undefined) {
            set_data({...data_array , [event.target.name]: event.target.value })
            change_correct_incorrect(true, event)
        }
        else {
            change_correct_incorrect(false, event)
        }
    } else {
        change_correct_incorrect(false, event)
    }

}

async function obtener_info_usuario(indentificacion) {

    try {
        const respuesta = await fetch(`http://localhost:4500/register/${indentificacion}`)
        const data = await respuesta.json()
        return data
    } catch (error) {
        console.log(error)
    }

}   