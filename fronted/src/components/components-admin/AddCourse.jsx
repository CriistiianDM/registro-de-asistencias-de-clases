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
        maximo_estudiantes: "",
        grupo_curso: "",
        hora_inicio: "",
        horario_curso: ""
    });
    

    useEffect(() => {
         verificar_toda_info()
         get_subjects(data_course,set_course)
         get_professors()
         //console.log(data_course)
    }, [])

    let handle_change = (e) => {
        verificacion_info(data_course, set_course , e)
    }

    let handle_submit = (e) => {
        console.log(data_course)
        send_data(data_course)
    }

    return (

        <div className={state_add_course["cls-1"]}>
           <div className={state_add_course["cls-2"]} id="form1">
                <div className={state_add_course["cls-3"]} id="course-1">
                     <input onChange={handle_change} title='type-1' name="curso_id" type="text" className={state_add_course["cls-4"]} placeholder="Codigo curso" id="input-add-1" />
                     <input onChange={handle_change} title='type-2' name="grupo_curso" type="text"className={state_add_course["cls-4"]} placeholder="Codigo grupo"  id="input-add-2" />
                </div>
                <div className={state_add_course["cls-5"]}>
                    <select onClick={handle_change} name="materia_id" title="type-1" className={state_add_course["cls-6"]} id="for">
                        <option disabled value="" id="option">Seleccione una materia</option>
                    </select>
                </div>
                <div className={state_add_course["cls-3"]} id="course-2">
                    <input onChange={handle_change} name="maximo_estudiantes" title='type-2' type="text" className={state_add_course["cls-4"]} placeholder="Cantidad" id="input-add-3" />
                    <input onChange={handle_change} name="hora_inicio" title='type-4' type="time" className={state_add_course["cls-4"]} placeholder="Numero minimo de estudiantes" id="input-add-4"  />
                </div>
                <div className={state_add_course["cls-5"]} id="course-3">
                    <input  onChange={handle_change} name="horario_curso" title='type-3' type="text" className={state_add_course["cls-7"]} placeholder="Horario Curso" id="input-add-5" />
                </div>
                <div className={state_add_course["cls-5"]} id="course-4"> 
                <select onClick={handle_change} name="profesor_id" title="type-5" className={state_add_course["cls-6"]} id="justo">
                        <option disabled value="" id="option-15">Seleccione un profesor</option>
                </select>
                </div>
                <div className={state_add_course["cls-5"]} id="course-5">
                    <button onClick={handle_submit} className={state_add_course["cls-8"]} type="submit"> Guardar </button>
                </div>
           </div>
        </div>
        
    );
}


async function send_data(data_course) {
    try {
        const res = await fetch('http://localhost:4500/course/admin', {
            method: 'POST',
            body: JSON.stringify(data_course),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data)
    } catch (error) {
      console.log(error)  
    }
}


function verificacion_info(data_course, set_course , e) {

    let regexp;
    let size = 0;
    console.log(e.target.value)
    
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
        regexp = /^[\sa-zA-Z0-9]+$/;
        size = 120;
    }
    else if (e.target.title === 'type-4') {
        //vericar hora
        regexp = /^[0-9]{2}:[0-9]{2}$/;
        size = 5;
    }
    else if (e.target.title === 'type-5') {
        //verificar identificacion
        regexp = /^[0-9]{10}$/;
        size = 10;
    }

    const value = e.target.value;
    const validacion = regexp.exec(value);

    console.log(validacion,value)
    if (validacion !== null) {
        change_correct_incorrect(true, e)
        set_course({...data_course, [e.target.name]: value})
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

function verificar_toda_info() {
    let count = 0;

    const active_botton = setInterval(() => {
        //console.log(count)
        $('#form1 div').find('input').each(function (index, event) {
            
            if ($(event).hasClass('style-correcto')) {
                count++;
            }
        })
    
        //console.log(count)
        if ($('#course-1').hasClass('on-submit')) {
            clearInterval(active_botton)
            console.log('entro')
        }

        if (count === 5) {
            //console.log('entro')
            $('#form1 div').find('button').removeClass('style-bottom-off')
        } else {
            console.log('no entro')
            $('#form1 div').find('button').addClass('style-bottom-off')
        }
        count = 0;

    }, 100);

    return active_botton;
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
                $("#option-15").after(`<option value="${name.identificacion}">${name.nombre +' '+ name.apellido}</option>`);
                console.log(name.identificacion)
            }
        }

    } catch (error) {
        console.log(error);
    }

}