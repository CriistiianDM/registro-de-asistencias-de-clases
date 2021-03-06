/**
 *  @decs import libs
*/
import React  from "react";
import { Header } from "../components-inicio/Header";
import { Footer } from "../components-inicio/Footer";
import { BoxConfiguration } from "../components-admin/BoxConfiguration";
import { BoxActions } from "../components-admin/BoxActions"
import { AddCourse } from "../components-admin/AddCourse";
import { AddTeacher } from "../components-admin/AddTeacher";
import  json  from "../../json/components_states.json";
import { useState , useEffect } from "react";


export function Admin() {
    // states of components
    const state_header_home = Object.values(Object.values(json)[0])[1]
    const state_box_configuration = Object.values(Object.values(json)[7])[0]
    const state_box_actions = Object.values(Object.values(json)[8])[0]
    const state_box_course = Object.values(Object.values(json)[9])[0]
    const state_box_teacher = Object.values(Object.values(json)[10])[0]

    //console.log( email_user, 'hola')
    return (
        <>
        <Header properties={state_header_home} />
        <BoxConfiguration properties={state_box_configuration} />
        <BoxActions properties={state_box_actions} />
        <AddCourse properties={state_box_course} />
        <AddTeacher properties={state_box_teacher} />
        <Footer />
        </>
    );
}


