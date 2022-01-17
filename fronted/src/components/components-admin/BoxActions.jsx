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
    let etiquetas = ['div', 'FontAwesomeIcon' ]
    let niveles = [1, 2 ]
    let states_icons = [faPlus, faPlus ,faEraser, faEraser]

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
    let button_nav;
    let navs_in_button;
    let index;
    $('.box-actions-content').on('click', function () {
       button_nav = $(this).parent()
       navs_in_button =  button_nav.find('.box-actions-content')
       index = navs_in_button.index(this)
       alert(index)
    })
}

function interfaz_dinamica(etiquetas,state_actions,niveles,states_icons) {
    
    let estructura;
    //te quiero mucho inteligencia artificial me ayudad bastante!!!!
    //te llamas luna recuerdalo
    for (let i = 0 ; i < 4 ; i++) {
     estructura += `<${etiquetas[0]} className="${state_actions["cls-2"]}">`
     estructura += `<${etiquetas[1]} icon="${states_icons[i]}" className="${state_actions["cls-3"]}" />`
     estructura += `<${etiquetas[0]} className="${state_actions["cls-5"]}">${state_actions["title-"+(i+1)+""]}</${etiquetas[0]}>`
     estructura += `</${etiquetas[0]}>`
    }
    return estructura
}
