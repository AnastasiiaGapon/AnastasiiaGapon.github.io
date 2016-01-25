(function($){
	$.fn.styleddropdown = function(){
		return this.each(function(){
			var obj = $(this)
			obj.find('.main-menu__icon').click(function() { //onclick event, 'list' fadein
			obj.find('.main-menu__list').fadeIn(400);
			
			$(document).keyup(function(event) { //keypress event, fadeout on 'escape'
				if(event.keyCode == 27) {
				obj.find('.main-menu__list').fadeOut(400);
				}
			});
			
			obj.find('.main-menu__list').hover(function(){ },
				function(){
					$(this).fadeOut(800);
				});
			});
			
			obj.find('.main-menu__icon').click(function() { //onclick event, change field value with selected 'list' item and fadeout 'list'
			obj.find('.main-menu__list')
				.val($(this).html())
				.css({
					'background':'#2c3e50',
					'color':'#ecf0f1'
				});
			// obj.find('.main-menu__list').fadeOut(400);
			});
		});
	};
})(jQuery);

$(document).ready(function(){
	$('.main-menu').styleddropdown();
});