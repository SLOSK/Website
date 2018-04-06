/* JQuery and JavaScript scripts */

$(document).ready(function(){
    
        /* modal popover */
        $('[data-toggle="popover"]').popover();
        
    
        /* Allow to display the Email part of the Sign Up modal */
        $("#click-display").click(function() {
            $("div#show").toggleClass( "hidden" );
        });

});