/**
 *  @decs import libs
*/
import React  from "react";
import  json  from "../../json/components_states.json";
import style_slider from "../../css/style_slider.css";
import img_1 from "../../images/slider_1.jpg";

/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs create component slider
*/
export function Slider() {
    let state_slider = Object.values(Object.values(json)[2])[0]
    
    return (
       <div className={state_slider["cls-1"]}>
           <div className={state_slider["cls-2"]}></div>
           <div className={state_slider["cls-3"]}>
               <div></div>
               <div className={state_slider["cls-4"]} id="circle-1"> </div>
               <div className={state_slider["cls-4"]}> </div>
               <div className={state_slider["cls-4"]}> </div>
               <div></div>
           </div>
       </div>
    );
}

