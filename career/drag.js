var dragObj;

$(document.body).on('mouseup touchend',function(){
	if(dragObj) dragObj.removeClass('dragging');
});

$(document).ready(function(){

	$('.drag').css('position','absolute');

	$('.drag').on('mousedown touchstart',function(e){
		if(e.touches && e.touches.length>0) e=e.touches[0];
		dragObj=$(this).addClass('dragging');
		height=dragObj.outerHeight();
		width=dragObj.outerWidth();
		max_left=dragObj.parent().offset().left+dragObj.parent().width()-dragObj.width();
		max_top=dragObj.parent().offset().top+dragObj.parent().height()-dragObj.height();
		min_left=dragObj.parent().offset().left;
		min_top=dragObj.parent().offset().top;
		xpos=dragObj.offset().left+width-e.pageX;
		ypos=dragObj.offset().top+height-e.pageY;
		$(document.body).on('mousemove touchmove',function(e){
			if(e.touches && e.touches.length>0) e=e.touches[0];
			var ileft=e.pageX+xpos-width;
			var itop=e.pageY+ypos-height;
			//console.log(dragObj.hasClass('dragging'),e,e.pageX,e.pageY,xpos,ypos,width,height,ileft,itop);
			//if(dragObj.hasClass('dragging')) dragObj.css({bottom:$(window).height()+$(window).scrollTop()-itop-dragObj.height(),left:ileft}); //dragObj.offset({top:itop,left:ileft});
			if(dragObj.hasClass('dragging')) dragObj.offset({top:itop,left:ileft});
		}).on('mouseup touchend',function(){
			dragObj.removeClass('dragging');
		});

	});

});
