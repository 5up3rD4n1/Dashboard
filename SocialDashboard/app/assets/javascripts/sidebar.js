var ready = function(){
    // Hide sidebar when page loads.
	$('.sidebar-content').hide();

    // Control click in the sidebar button 
    // to show and hide the options(types of graphs)
	$('.sidebar-button').click(function() {
		var $sidebar = $('.sidebar-content');
		
        // Hide it when visible
		if ($sidebar.is(':visible')) {
			$("#arrow-char").html("&#9666;");
			$(this).attr( "title", "Agregar grafico" );
			
			// Slide away
			$(this).animate({
			  right: "0px"
			}, 200);			
			
			$sidebar.animate({
			  right: "-250px"
			}, 200).fadeOut(0);
			
		}else{ // Show it
			
			$("#arrow-char").html("&#9656;");
			$( this ).attr( "title", "Cerrar" );
			
			// Slide in
			$(this).animate({
			  right: "250px"
			}, 200);
						
			$sidebar.animate({
			  right: "0px"
			}, 200).show();
			
		}
	});


    $('body').click(function (evt) {
        if (evt.target.id == "sidebar")
            return;
        //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
        if ($(evt.target).closest('#sidebar').length)
            return;

        var $sidebar = $('.sidebar-content');

        if ($sidebar.is(':visible')) {
            $('.sidebar-button').click();
        }
    });

    // Event to handle when a graph's type is clicked 
    // in orden to add it to the page(main container).
    $(".graph-type").click(function (){

        var id = $(this).attr('id'); // Value holds the name of the graph for gettting the html from the graphsForIndex map.
        var value = $(this).attr('value');
        alert(value);
        if (value=="phrase"){
            var modalName = "#main-filters";
        }else if (value=="sna"){
            var modalName = "#data-analysis-filter";
        }
        $(modalName).modal('show');
    });
	
}

$(document).on('page:load', ready);
$(document).ready(ready);