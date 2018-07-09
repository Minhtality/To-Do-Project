$("input[type='text']").keypress(function(e) {
	if (e.which === 13) {
		var todoText = $(this).val();
		$(this).val(""); 
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+todoText+"</li>");
	}
});

 $("ul").on("click","li",function(event){
	$(this).toggleClass('completed');

	event.stopPropagation();
});

$("ul").on("click","span", function(event) {

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("ul").on('mouseenter', 'li', function(event) {
	$(this).addClass('bold')
	event.stopPropagation();
	/* Act on the event */
});
$("ul").on('mouseleave', 'li', function(event) {
	$(this).removeClass('bold')
	event.stopPropagation();
	/* Act on the event */
});

