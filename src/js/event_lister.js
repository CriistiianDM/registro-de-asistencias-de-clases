/**
 *  @decs import libs
*/
import $ from 'jquery';


$(function () {

   //event listener slider
   click_event_slider();

});


/** 
  *  @author : cristian duvan machado <cristian.machado@correounivalle.edu.co>
  *  @decs app component
*/
function click_event_slider() {

    var button_nav;
    var navs_in_button;
    var index;
    let nav_slider = ['box-slider-aux-1','box-slider-aux-2','box-slider-aux-3'];

    $('.circle-style').on('click', function (event) {
     //
     button_nav = $(this).parent()
     navs_in_button =  button_nav.find('.circle-style')
     index = navs_in_button.index(this)
     /*$(this).fadeOut(500, function () {
         alert(index)
     })*/
     for (let i = 0 ; i < 3 ; i++) {
     $('.box-slider').removeClass(nav_slider[i])
     }

     $('.box-slider').addClass(nav_slider[index])

    });
}