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
    //const course_names = get_subjects()
    const [data_course, set_course] = useState({
        data:[]
    });
    
    useEffect(() => {
         get_subjects(data_course,set_course)
         //console.log(data_course)
    }, [])

    return (

        <div className={state_add_course["cls-1"]}>
           <form className={state_add_course["cls-2"]}>
                <div className={state_add_course["cls-3"]} id="course-1">
                     <input type="text" className={state_add_course["cls-4"]} placeholder="Codigo curso" />
                     <input type="text"className={state_add_course["cls-4"]} placeholder="Codigo grupo" />
                </div>
                <div className={state_add_course["cls-5"]}>
                    <select className={state_add_course["cls-6"]} >
                        <option disabled value="" id="option">Seleccione una materia</option>
                    </select>
                </div>
                <div className={state_add_course["cls-3"]} id="course-2">
                    <input type="text" className={state_add_course["cls-4"]} placeholder="Cantidad" />
                    <input type="text" className={state_add_course["cls-4"]} placeholder="Numero minimo de estudiantes" />
                </div>
                <div></div>
           </form>
        </div>
        
    );
}


async function get_subjects(data_course,set_course) {

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