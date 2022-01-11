/**
 *  @decs import libs
*/
import React  from "react";
import  json  from "../../json/components_states.json";
import style_footer from "../../css/style_footer.css";


export function Footer() {
    let state_footer = Object.values(json.footer)[0]
    return (
        <footer className={state_footer["cls-1"]}>
            <div className={state_footer["cls-2"]}></div>
            <div className={state_footer["cls-3"]}>
               <div>{state_footer["text-footer"]}</div>
            </div>
        </footer>
    );
}