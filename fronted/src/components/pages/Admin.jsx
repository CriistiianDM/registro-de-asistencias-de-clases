/**
 *  @decs import libs
*/
import React  from "react";
import { Header } from "../components-inicio/Header";
import { Footer } from "../components-inicio/Footer";
import { BoxConfiguration } from "../components-admin/BoxConfiguration";
import { BoxActions } from "../components-admin/BoxActions";
import  json  from "../../json/components_states.json";
import { useState , useEffect } from "react";


export function Admin() {
    // states of components
    const state_header_home = Object.values(Object.values(json)[0])[1]
    const state_box_configuration = Object.values(Object.values(json)[7])[0]
    const state_box_actions = Object.values(Object.values(json)[8])[0]

    //console.log( email_user, 'hola')
    return (
        <>
        <Header properties={state_header_home} />
        <BoxConfiguration properties={state_box_configuration} />
        <BoxActions properties={state_box_actions} />
        <Footer />
        </>
    );
}


