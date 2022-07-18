$(document).ready(function(){

	  //Click event handler to toggle dropdown
		$(".button").click(function(event){

		event.stopPropagation();
		$(".app-launcher").toggle();
		});

		$(document).click(function() {
		//Hide the launcher if visible
		$('.app-launcher').hide();
		});

		//Prevent hiding on click inside app launcher
		$('.app-launcher').click(function(event){
			event.stopPropagation();
		});

});
