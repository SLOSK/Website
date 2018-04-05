/* JQuery and JavaScript scripts */

$(document).ready(function(){
    
        /* modal popover */
        $('[data-toggle="popover"]').popover();
        
    
        /* Allow to display the Email part of the Sign Up modal */
        $("#click-display").click(function() {
            $("div#show").toggleClass( "hidden" );
        });
        
        /* Functions for the boxes of the educational program */
        var button1 = $("#col-button");
        button1.one( "click", function() {
            setTimeout(function() {
                $("#card1").addClass( "right-color" );
            }, 1000);
        });
        button1.on("click", function() {
          var el = $(this);
          if (el.text() == el.data("text-swap")) {
            el.text(el.data("text-original"));
          } else {
            el.data("text-original", el.text());
            el.text(el.data("text-swap"));
          }
        });

});