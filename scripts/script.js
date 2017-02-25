jQuery(document).ready(function() {
	var j = jQuery;
	var welcomeImg = j('#welcome-screen img');
	var header_nav = j('#header-nav-menu');
	welcomeImg.hide();
	setTimeout(function() {
		welcomeImg.fadeIn();
	}, 1000);
	if (j(window).innerWidth() > 950){
		j("#company-name-container").hide();
	}
	var windowHeight, windowWidth, portfolioHeight, portfolioWidth;

	function setDimensions() {
		windowHeight = j(window).innerHeight(); //get window height
		windowWidth = j(window).innerWidth(); // get window width
		windowHeight = windowHeight - 60;
		portfolioWidth = windowWidth / 2; //set width for elements on the portfolio page
		portfolioHeight = windowHeight / 1.5; //set height for elements on the portfolio page
		if (j('section').hasClass('home-panel')) {
			j('.home-panel').css('min-height', windowHeight); // set home panels to height of window 
		}
		if (j('div').hasClass('parallax-window')) {
			j('.parallax-window').css('min-height', windowHeight); //set parallax windows to window height
		}
		j('#portfolio-container').children().css({
			'height': portfolioHeight // set height of images in portfolio container 
		});
		j('footer').css('min-width', windowWidth); //set width for footer
	}
	var elementDivider;
	function seperateElements() {
		windowHeight = j(window).innerHeight();
		elementDivider = (windowHeight - 60) / 10; 
		j('.service-list p').css('margin-bottom', elementDivider); // dynamically set margins for the p element 
	}
	seperateElements(); // call seperateElements function
	setDimensions(); // call setDimensions function
	j(window).resize(function(e) { //call functions when window resizes 
		setDimensions();
		seperateElements();
		e.preventDefault();
	});
	j('nav a').click(function(e) {
		e.preventDefault(); //stop clicking from taking user to another page
		var target_div = j(this).text().toLowerCase(); // get the target div 

		function calculate_top_div() {
			var div_top = j('#' + target_div).offset().top - 20; // return the position of the top of target div
			return div_top;
		}
		if (j(window).scrollTop() === calculate_top_div){
			return false;		
		}else{
		j('html, body').stop().animate({
			scrollTop: calculate_top_div() // user will scroll down to top of selected div
		}, 1000);
		if (j(this).hasClass('active-link')) { // if the div is the same than the active link then keep active link highlighted 
			return false;
		} else {
			j('nav a').removeClass('active-link'); // if the div is diffrerent than the active link then remove link class from all anchor tags 
			j(this).addClass('active-link'); // if the div is diffrerent than the active link then add link class to selected anchor tag
		}
	}
	if (j(window).innerWidth() < 950 ){
				j('#header-nav-menu').slideUp().removeClass('visible');
	}
	});
	var windowScrollPosition, documentHeight, documentScrollPosition;

	function screenPosition() { //return document height on a scale from 0-100 
		windowScrollPosition = j(window).scrollTop();
		documentHeight = windowScrollPosition / j(document).height(); //return decimal value of window
		documentScrollPosition = documentHeight * 100; //return document scroll percentage value 
		return documentScrollPosition;
	}

	function setActiveLink() {
		if (screenPosition() < 14) { // top div panel 
			j('nav a:eq(0)').addClass('active-link');
		} else {
			j('#logo').fadeOut('400');
			
		}
		if (screenPosition() > 14 && screenPosition() < 34) { // services div panel 
			j('nav a:eq(1)').addClass('active-link');
		}
		if (screenPosition() > 34 && screenPosition() < 50) { // portfolio div panel
			j('nav a:eq(2)').addClass('active-link');
		}
		if (screenPosition() > 50 && screenPosition() < 75) { // contact me div panel 
			j('nav a:eq(3)').addClass('active-link');
		}
		if (screenPosition() > 75) { // contact me div panel 
			j('nav a:eq(4)').addClass('active-link');
		}
	}

	function contentEffects() {
		if(j(window).innerWidth() > 950 ){
		if (screenPosition() > 15) { // services list will slide down 
			j('.service-list').slideDown('slow');
			j('#logo').fadeOut("fast",function(){j("#company-name-container").show();});
		}
		if (screenPosition() < 15) { // services list will slide up
			j('.service-list').slideUp('slow');
			j('#company-name-container').fadeOut("fast",function(){j("#logo").show();});
		}
		if (screenPosition() > 35) { // portfolio elements will slide into view from the left 
			j('.pull-left').animate({
				'left': '10%'
			}, 700);
			j('.pull-right').animate({ // portfolio elements will slide into view from the right
				'right': '10%'
			}, 700);
		}}
	}

	function navHighlights() {
		if (screenPosition() < 14) { //Top panel
			j('nav a:eq(0)').addClass('active-link');
		} else {
			j('nav a:eq(0)').removeClass('active-link');
			j('#logo').fadeOut('400');
			
		}
		if (screenPosition() > 14 && screenPosition() < 35) { //services panel
			j('nav a:eq(1)').addClass('active-link');
		} else {
			j('nav a:eq(1)').removeClass('active-link');
		}
		if (screenPosition() > 35 && screenPosition() < 50) { //portfolio panel
			j('nav a:eq(2)').addClass('active-link');
		} else {
			j('nav a:eq(2)').removeClass('active-link');
		}
		if (screenPosition() > 50 && screenPosition() < 75) { // contact me panel
			j('nav a:eq(3)').addClass('active-link');
		} else {
			j('nav a:eq(3)').removeClass('active-link');
		}
		if (screenPosition() > 75) { // contact me panel
			j('nav a:eq(4)').addClass('active-link');
		} else {
			j('nav a:eq(4)').removeClass('active-link');
		}
	}
	contentEffects(); // Call contentEffects Function
	setActiveLink(); // Call active Link Function
	j(window).scroll(function() {
		navHighlights(); // call navHighlights Function
		contentEffects(); //Call contentEffects function
	});
	j('.back-top-panel').append('<div class="back-to-top"><a href="#welcome-screen"></a></div>');
	var topOfDocument;
	j('.back-to-top').click(function(e) {
		e.preventDefault();
		topOfDocument = j('#home').offset().top;
		topOfDocument = topOfDocument - 60;
		j('html, body').stop().animate({
			scrollTop: topOfDocument
		}, 800);
	});
	j('#mobile-nav-icon').click(function () {
		if(j('#header-nav-menu').hasClass('visible')){
			j('#header-nav-menu').slideUp('500',function(){j('#header-nav-menu').removeClass('visible').css({
				'display' : 'none'
			});
			});
										
}else{
	j('#header-nav-menu').slideDown().addClass('visible')
										.css({
											'display' : 'block'
											});
}
	});
	j(window).resize(function () {
			if (j(window).innerWidth() > 950){
				j('#header-nav-menu').slideDown();			
			}
		});
	j('#portfolio img').each(function(i) {
		j(this).attr('id', 'image' + (i + 1));
	});
});