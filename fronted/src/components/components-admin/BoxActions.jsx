/**
 *  @decs import libs
*/
import React from "react";
import style_actions from "../../css/style_boxActions.css";
import $ from "jquery";
import { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

export function BoxActions(props) {

    let state_actions = props.properties

    useEffect(() => {
        event_click()
    }, [])

    return (
        <div className={state_actions["cls-1"]}>
            <div className={state_actions["cls-2"]}>
                 <FontAwesomeIcon icon={ faPlus } className={state_actions["cls-3"]} />
                <div className={state_actions["cls-5"]}>{state_actions["title-1"]}</div>
            </div>
            <div className={state_actions["cls-2"]}>
                <FontAwesomeIcon icon={ faPlus } className={state_actions["cls-3"]} />
                <div className={state_actions["cls-5"]}>{state_actions["title-2"]}</div>
            </div>
            <div className={state_actions["cls-2"]}>
                <FontAwesomeIcon icon={ faEraser } className={state_actions["cls-3"]} />
                <div className={state_actions["cls-5"]}>{state_actions["title-3"]}</div>
            </div>
            <div className={state_actions["cls-2"]}>
                <FontAwesomeIcon icon={ faEraser } className={state_actions["cls-3"]} />
                <div className={state_actions["cls-5"]}>{state_actions["title-4"]}</div>
            </div>
        </div>
    );

}

function event_click() {
    $('.box-actions-content').on('click', function () {
        alert('hola')
    })
}