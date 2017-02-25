
$(document).ready(function(){
    $('.slideShow img:gt(0)').hide(); /* All images after the first will be hidden at start */
    setInterval(function(){
      $('.slideShow :first-child').fadeOut() /* First image will fadeOut */
         .next('img').fadeIn() /* Next image fadeIn */
         .end().appendTo('.slideShow');}, /* First image will be sent to the back */
      3000); /* Sets the time between pictures fading in and out */
});
$(document).ready(function(){
    $("#leftSide").hide();
    $("#leftSide").fadeIn(3000);/*Div appears after 3 seconds*/
    $("#rightSide").hide();
    $("#rightSide").fadeIn(3000);/*Div appears after 3 seconds*/
});
$(document).ready(function(){
   
    $('#pstress').hide(); /*show text when stress img is hover over*/
    $('#stress').mouseenter(function(){
		$('#pstress').show(300);
		$('#pstart').hide();
    });
    $('#stress').mouseleave(function(){
		$('#pstress').hide(300);
    });
    
    $('#pphysical').hide(); /*show text when physical img is hover over*/
    $('#physical').mouseenter(function(){
		$('#pphysical').show(300);
		$('#pstart').hide();
    });
    $('#physical').mouseleave(function(){
		$('#pphysical').hide(350);
    });
    
    $('#pmental').hide(); /*show text when mental img is hover over*/
    $('#mental').mouseenter(function(){
		$('#pmental').show(300);
		$('#pstart').hide();
    });
    $('#mental').mouseleave(function(){
		$('#pmental').hide(300);
    });
    
    $('#pcoping').hide(); /*show text when coping img is hover over*/
    $('#coping').mouseenter(function(){
		$('#pcoping').show(300);
		$('#pstart').hide();
    });
    $('#coping').mouseleave(function(){
		$('#pcoping').hide(300);
    });
});
