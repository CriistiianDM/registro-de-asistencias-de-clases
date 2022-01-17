/**
 *  @decs import libs
*/
import React from "react";
import style_course from "../../css/style_addcourse.css";
import $ from "jquery";
import { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function AddCourse(props) {

    let state_add_course = props.properties
    
    const [data_course, set_course] = useState({
        curso_id: "",
        materia_id: "",
        profesor_id: "",
        maximo_estudiantes: ""
    });
    
    const [data_groups_course, set_groups_course] = useState({
        grupo_id: "",
        curso_id: "",
        grupo_curso: "",
        hora_inicio: "",
        horario_curso: ""
    });

    useEffect(() => {
         get_subjects(data_course,set_course)
         get_professors()
         //console.log(data_course)
    }, [])

    let handle_change = (e) => {
        verificacion_info(data_course, set_course , e)
    }

    return (

        <div className={state_add_course["cls-1"]}>
           <form className={state_add_course["cls-2"]}>
                <div className={state_add_course["cls-3"]} id="course-1">
                     <input onChange={handle_change} title='type-1' type="text" className={state_add_course["cls-4"]} placeholder="Codigo curso" id="input-add-1" />
                     <input onChange={handle_change} title='type-2' type="text"className={state_add_course["cls-4"]} placeholder="Codigo grupo"  id="input-add-2" />
                </div>
                <div className={state_add_course["cls-5"]}>
                    <select className={state_add_course["cls-6"]} >
                        <option disabled value="" id="option">Seleccione una materia</option>
                    </select>
                </div>
                <div className={state_add_course["cls-3"]} id="course-2">
                    <input onChange={handle_change} title='type-2' type="text" className={state_add_course["cls-4"]} placeholder="Cantidad" id="input-add-3" />
                    <input type="time" className={state_add_course["cls-4"]} placeholder="Numero minimo de estudiantes" id="input-add-4"  />
                </div>
                <div className={state_add_course["cls-5"]} id="course-3">
                    <input  onChange={handle_change} title='type-3' type="text" className={state_add_course["cls-7"]} placeholder="Horario Curso" id="input-add-5" />
                </div>
                <div className={state_add_course["cls-5"]} id="course-4"> 
                <select className={state_add_course["cls-6"]} >
                        <option disabled value="" id="option-1">Seleccione un profesor</option>
                </select>
                </div>
                <div className={state_add_course["cls-5"]} id="course-5">
                    <button className={state_add_course["cls-8"]} type="submit"> Guardar </button>
                </div>
           </form>
        </div>
        
    );
}



function verificacion_info(data_course, set_course , e) {

    let regexp;
    let size = 0;

    if (e.target.title === 'type-1') {
         //verificar si son numeros maximo 4
         regexp = /^[0-9]{4}$/;
        size = 4;
    }
    else if (e.target.title === 'type-2') {
        //verificar si son numeros maximo 2
        regexp = /^[0-9]{2}$/;
        size = 4;
    }
    else if (e.target.title === 'type-3') {
        //verificar texto con numeros
        regexp = /^[a-zA-Z0-9]+$/;
        size = 120;
    }

    const value = e.target.value;
    const validacion = regexp.exec(value);

    console.log(validacion)
    if (validacion !== null) {
        change_correct_incorrect(true, e)
    } else {
        change_correct_incorrect(false, e)
    }

}

function change_correct_incorrect(bool, event) {
    if (bool) {
        $('#' + event.target.id + '').removeClass('style-incorrecto');
        $('#' + event.target.id + '').addClass('style-correcto');
    } else {

        $('#' + event.target.id+ '').removeClass('style-correcto');
        $('#' + event.target.id + '').addClass('style-incorrecto');
    }
}



async function get_subjects() {

    try {
        const res = await fetch("http://localhost:4500/course");
        const data = await res.json();
        console.log(data.length)   
        if (data[0] !== undefined) {
            for (const name of data) {
                $("#option").after(`<option value="${name.materia_id}">${name.nombre_materia}</option>`);
                console.log(name.nombre_materia,name.materia_id)
            }
        }
    
    } catch (error) {
        console.log(error);
    }

}

async function get_professors() {
    try {

        const res = await fetch("http://localhost:4500/teachers");
        const data = await res.json();
      
        if (data[0] !== undefined) {
            for (const name of data) {
                $("#option-1").after(`<option value="${name.identificacion}">${name.nombre + name.apellido}</option>`);
            }
        }

    } catch (error) {
        console.log(error);
    }

}