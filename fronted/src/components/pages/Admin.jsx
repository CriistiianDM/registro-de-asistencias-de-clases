/**
 *  @decs import libs
*/
import React  from "react";
import { Header } from "../components-inicio/Header";
import { Footer } from "../components-inicio/Footer";
import  json  from "../../json/components_states.json";
import { useState , useEffect } from "react";


export function Admin() {
    const state_header_home = Object.values(Object.values(json)[7])[0]
    return (
        <>
        <Header properties={state_header_home} />
        <Footer />
        </>
    );
}


