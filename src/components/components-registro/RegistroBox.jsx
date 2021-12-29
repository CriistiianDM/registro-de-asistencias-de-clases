/**
 *  @decs import libs
*/
import React from "react";
import style_registro from "../../css/style_registro.css";

export function RegistroBox(props) {
    let state_registro = props.properties
    console.log(state_registro)
    return (
        <div className={state_registro["cls-1"]}>
            <div className={state_registro["cls-2"]}>
                <div className={state_registro["cls-4"]}>
                    {state_registro["title"]}
                </div>
            </div>
            <div className={state_registro["cls-3"]}></div>
            <form className={state_registro["cls-5"]}>
                <div className={state_registro["cls-6"]}>
                    <input className={state_registro["cls-7"]} type="text" placeholder="Primer Nombre" id="input-1" />
                    <input className={state_registro["cls-7"]} type="text" placeholder="Segundo Nombre" id="input-2" />
                </div>
                <div className={state_registro["cls-6"]}>
                    <input className={state_registro["cls-7"]} type="text" placeholder="Primer Apellido" />
                    <input className={state_registro["cls-7"]} type="text" placeholder="Segundo Apellido" />
                </div>
                <label className={state_registro["cls-10"]} >{state_registro["selecionRol"]}</label>
                <div className={state_registro["cls-9"]}>
                    <select name="usuario" className={state_registro["cls-8"]}>
                        <option disabled> Seleccione un rol </option>
                        <option value="estudiante">{state_registro["value-1"]}</option>
                        <option value="profesor">{state_registro["value-2"]}</option>
                    </select>
                </div>
                <div className={state_registro["cls-11"]}>
                     <input className={state_registro["cls-7"]} type="email" placeholder="Correo Electronico" id="email-1"/>
                </div>
                <div className={state_registro["cls-6"]}>
                    <input className={state_registro["cls-7"]} type="password" placeholder="Contraseña" id="input-5"/>
                    <input className={state_registro["cls-7"]} type="password" placeholder="verficar contraseña"  id="input-6"/>
                </div>
                <div className={state_registro["cls-11"]}>
                    <button className={state_registro["cls-12"]} > {state_registro["enviar"]} </button>
                </div>
            </form>
        </div>

    );
}