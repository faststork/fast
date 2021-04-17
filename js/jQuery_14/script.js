$(document).ready(function(){
	var elWrap = $('.carousel_wrap'),
		visual = $('.visual_block'),
		carousel = visual.children('ul'),
		visible = 1,	
		itemWidth = carousel.children().outerWidth(),
		itemHeight = carousel.children().outerHeight(),
		itemsTotal = carousel.children().length;

	visual.css({'width': visible * itemWidth + 'px', 'height' : itemHeight});
	
	carousel.css({'width': itemsTotal * itemWidth,	'left': 0});
	
	function chengeLeft () {
		var item = carousel.children().eq(0);

		carousel.animate({left: -itemWidth}, 500, function() {
			item.clone().appendTo(carousel);		
			item.remove();
			carousel.css({"left": 0 });		
		});
	}	
	
	var interval = setInterval(chengeLeft, 3000);	
});




