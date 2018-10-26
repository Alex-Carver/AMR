
        $(document).ready(function (){
            $("#click").click(function (){
                $('html, body').animate({
                    scrollTop: $("#top-box").offset().top
                }, 1000);
            });
        });


function scrollWaypointInit( items, trigger ) {
  items.each( function() {
    var element = $(this),
        osAnimationClass = element.data("animation"),
        osAnimationDelay = element.attr('data-animation-delay');
 
    element.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });
 
    var trigger = ( trigger ) ? trigger : element;
 
    trigger.waypoint(function() {
        element.addClass('animated').addClass(osAnimationClass);
    },{
        triggerOnce: true,
        offset: '80%'
    });
  });
}

//Call the init

$(document).ready(function(){

scrollWaypointInit( $('.animateMe') );

});