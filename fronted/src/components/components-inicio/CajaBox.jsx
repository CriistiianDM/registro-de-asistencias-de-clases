/**
 *  @decs import libs
*/
import React from "react";
import $ from 'jquery';
import json from "../../json/components_states.json";
import style_cajaBox from "../../css/style_cajaBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faUsersCog } from "@fortawesome/free-solid-svg-icons";

export function CajaBox(props) {

    let state_boxCaja = props.properties
    let iconState = [faGraduationCap, faUserTie, faUsersCog]

    return (
        <div className={state_boxCaja["cls-1"]}>
            <div></div>
            <div className={state_boxCaja["cls-2"]}>
                <div className={state_boxCaja["cls-3"]}>
                    <FontAwesomeIcon icon={iconState[state_boxCaja["icon-caja"]]} className={state_boxCaja["cls-4"]} />
                </div>
                <div className={state_boxCaja["cls-5"]}>
                    <div className={state_boxCaja["cls-6"]}>{state_boxCaja.title}</div>
                    <div className={state_boxCaja["cls-7"]}>
                        <ul>
                            {(state_boxCaja.description).map((value) => (
                                <li key={value}>{value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}