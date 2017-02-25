/**
 * 
 */

jQuery(document).ready(function() {
	var j = jQuery;
	var panel = [];
	var name =[];
	var screens = j('.home-panel');
	var windowScrollPosition, documentHeight, documentScrollPosition;
	
	j.each(screens,function(i, elt) {
		var info = j(elt).offset().top;
		var top = info/j('body').height() * 100;
		panel[i] = top;
		name[1] = j('.home-panel').attr('id');
	});
	function nav(){
		function screenPosition() { //return document height on a scale from 0-100 
			windowScrollPosition = j(window).scrollTop();
			documentHeight = windowScrollPosition / j(document).height(); //return decimal value of window
			documentScrollPosition = documentHeight * 100; //return document scroll percentage value 
			return documentScrollPosition;
		}
	for(var i = 0; i <= panel.length; i++){
		if (screenPosition() < 15) { // top div panel 
			j('nav a:eq(0)').addClass('active-link');
		}
		if (panel[i] < screenposition() && panel[i] > screenposition()){
			j('nav a:eq('+ i + ')').addClass('active-link');
		}
	}
	}
	nav();
	j(window).scroll(function() {
		nav();
	});
});