/**
 *  @decs import libs
*/
import React from "react";
import style_teacher from "../../css/style_addTeacher.css";
import $ from "jquery";
import { useState, useEffect } from "react";


export function AddTeacher(props) {

    let state_add_teacher = props.properties
    console.log(state_add_teacher, 'state_add_teacher')

    const [data_teacher, set_teacher] = useState({
      identificacion: '',
      p_nombre: '',
      s_nombre: '',
      p_apellido: '',
      s_apellido: null,
      dirrecion: null,
      tipo_persona: 'profesor',
      email: '',
      contrasena: '',
      salario: '',
      seguros_medicos_id: '',
      sede_id: '',
      codigo_profesor: ''
    });

    useEffect(() => {
        get_seguros_medicos()
        get_sedes()
        verificar_toda_info()
    }, [])

    let handle_change = (e) => {
         verificar_datos(e,data_teacher, set_teacher) 
    }

    let handle_select = (e) => {
         insertar_datos(data_teacher, set_teacher,e)
    }

    let handle_submit = (e) => {
        console.log(data_teacher)
        send_teacher(data_teacher)
    }

    return (
        <div className={state_add_teacher["cls-1"]}>
            <div className={state_add_teacher["cls-2"]} id="form">
                <div className={state_add_teacher["cls-3"]}>
                    <input onChange={handle_change} name="identificacion" title="type-1" type="text" className={state_add_teacher["cls-4"]} placeholder="Identificacion" id="input-teacher-1" />
                    <input onChange={handle_change} name="p_nombre" title="type-2" type="text" className={state_add_teacher["cls-4"]} placeholder="Primer Nombre" id="input-teacher-2" />
                </div>
                <div className={state_add_teacher["cls-3"]} id="teacher-1">
                    <input onChange={handle_change} name="s_nombre" title="type-2" type="text" className={state_add_teacher["cls-4"]} placeholder="Segundo Nombre" id="input-teacher-3" />
                    <input onChange={handle_change} name="p_apellido" title="type-2" type="text" className={state_add_teacher["cls-4"]} placeholder="Primer Apellido" id="input-teacher-4" />
                </div>
                <div className={state_add_teacher["cls-3"]} id="teacher-2">
                    <input onChange={handle_change} name="salario" title="type-3" type="text" className={state_add_teacher["cls-4"]} placeholder="Salario" id="input-teacher-5" />
                    <input onChange={handle_change} name="codigo_profesor" title="type-4" type="text" className={state_add_teacher["cls-4"]} placeholder="Codigo Profesor" id="input-teacher-6" />
                </div>
                <div className={state_add_teacher["cls-3"]} id="teacher-7">
                    <input onChange={handle_change} name="email" title="type-6" type="correo" className={state_add_teacher["cls-4"]} placeholder="Correo" id="input-teacher-7" />
                    <input onChange={handle_change} name="contrasena" title="type-5" type="password" className={state_add_teacher["cls-4"]} placeholder="Password" id="input-teacher-8" />
                </div>
                <div className={state_add_teacher["cls-5"]}>
                    <select onClick={handle_select} className={state_add_teacher["cls-6"]} name="seguros_medicos_id" id="">
                        <option disabled value="" id="option-teacher-1">Seleccione una eps y arl </option>
                    </select>
                </div>
                <div className={state_add_teacher["cls-5"]} id="teacher-3">
                    <select onClick={handle_select} className={state_add_teacher["cls-6"]} name="sede_id" id="">
                        <option disabled value="" id="option-teacher-2">Seleccione una sede </option>
                    </select>
                </div>  
                <div className={state_add_teacher["cls-5"]} id="teacher-4">
                    <button onClick={handle_submit} className={state_add_teacher["cls-7"]} id="bottom-teacher-1">Agregar</button>
                </div>  
          
            </div>
        </div>
    )
}

function insertar_datos(data_teacher, set_teacher,e) {
    set_teacher({...data_teacher, [e.target.name]: e.target.value})
}

function verificar_datos(e,data_teacher, set_teacher) {
    let regexp;

    if (e.target.title === 'type-1') {
        //verificar identificacion
        regexp = /^[0-9]{10}$/;
    }
    else if (e.target.title === 'type-2') {
        //verificar nombre
        regexp = /^[a-zA-Z]{3,20}$/;
    }
    else if (e.target.title === 'type-3') {
        //verificar salario
        regexp = /^[0-9]+$/;
    }
    else if (e.target.title === 'type-4') {
        //verificar codigo profesor
        regexp = /^[0-9]{9}$/;
    }
    else if (e.target.title === 'type-5') {
        //verificar password
        regexp = /^[a-zA-Z0-9]{8,20}$/;
    }
    else if (e.target.title === 'type-6') {
        //verificar correo
        regexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    }

    let value = e.target.value;
    let verificaion_regexp = regexp.exec(value);

    if (verificaion_regexp !== null) {
        change_correct_incorrect(true, e)
        set_teacher({...data_teacher, [e.target.name]: value})
    } else {
        change_correct_incorrect(false, e)
    }

}

function verificar_toda_info() {
    let count = 0;

    const active_botton = setInterval(() => {
        //console.log(count)
        $('#form div').find('input').each(function (index, event) {
            
            if ($(event).hasClass('style-correcto')) {
                count++;
            }
        })
    
        //console.log(count)
        if ($('#teacher-4').hasClass('on-submit')) {
            clearInterval(active_botton)
            console.log('entro')
        }

        if (count === 8) {
           // console.log('entro')
            $('#form div').find('button').removeClass('style-bottom-off')
        } else {
            //console.log('no entro')
            $('#form div').find('button').addClass('style-bottom-off')
        }
        count = 0;

    }, 100);

    return active_botton;
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

async function send_teacher(data_teacher) {
    try {
       const res = await fetch('http://localhost:4500/teacher/admin', {
            method: 'POST',
            body: JSON.stringify(data_teacher),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
    } catch (error) {
       console.log(error) 
    }
} 

async function get_seguros_medicos() {

    try {
        const response = await fetch('http://localhost:4500/seguros_medicos');
        const data = await response.json();
        console.log(data)
        if (data[0] !== undefined) {
            for (const name of data) {
                $("#option-teacher-1").after(`<option value="${name.seguro_id}">${name.eps}</option>`);
            }
        }
    } catch (error) {
        console.log(error)
    }

}

async function get_sedes() {

    try {
        const response = await fetch('http://localhost:4500/sedes');
        const data = await response.json();
        console.log(data)
        if (data[0] !== undefined) {
            for (const name of data) {
                $("#option-teacher-2").after(`<option value="${name.sede_id}">${name.nombre_sede}</option>`);
            }
        }
    } catch (error) {
        console.log(error)
    }

}