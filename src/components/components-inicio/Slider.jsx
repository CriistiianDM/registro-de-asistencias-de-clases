/**
 *  @decs import libs
*/
import React  from "react";
import  json  from "../../json/components_states.json";
import $ from 'jquery';


/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs create component slider
*/
export function Slider() {
    let state_slider = Object.values(Object.values(json)[2])[0]

    /* evento click en boton  */

    //quitar clase active-boton a todos los demas y agregar clase active-boton
    let event_click_button_0 = () => {
     event_click_button(0,'circle-1')
    }
    
    //quitar clase active-boton a todos los demas y agregar clase active-boton
    let event_click_button_1 = () => {
     event_click_button(1,'circle-2')
    }
    
    //quitar clase active-boton a todos los demas y agregar clase active-boton
    let event_click_button_2 = () => {
     event_click_button(2,'circle-3')
    }

    /*  END ZONE EVENT CLICK  */
    return (
       <div className={state_slider["cls-1"]}>
           <div className={state_slider["cls-2"]}></div>
           <div className={state_slider["cls-3"]}>
               <div></div>
               <button onClick={event_click_button_0} className={state_slider["cls-8"]} id="circle-1" />
               <button onClick={event_click_button_1} className={state_slider["cls-4"]} id="circle-2" />
               <button onClick={event_click_button_2} className={state_slider["cls-4"]} id="circle-3" />
               <div></div>
           </div>
       </div>
    );
}


/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs app component
*/
function event_click_button(index,circle) {
  //vector con las clases que guardan las imagenes
  let nav_slider = ['box-slider-aux-1','box-slider-aux-2','box-slider-aux-3'];

  //each de la clase circle-style
  $('.circle-style').each(function (index, value) {
    //si concide con el id con el paaametro circle, entonces agregar clase active-boton
    if ($(value).attr('id') === circle) {
      $(value).addClass('active-boton')
    }else {
      $(value).removeClass('active-boton')
    }
    // limpiar el elemento box-slider
    $('.box-slider').removeClass(nav_slider[index])
  });

   //agregar clase a box-slider
  $('.box-slider').addClass(nav_slider[index])
}