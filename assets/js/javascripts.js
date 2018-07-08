 
var lis = $("ul li");
var input  = $("input[type=text]");



	lis.on("mouseenter",function(){
		$(this).addClass("bold");
	});

	lis.on("mouseleave",function(){
		$(this).removeClass("bold");
	});

	lis.on("dblclick",function(){
		$(this).fadeOut(500,function(){
			$(this).remove();
		});
	});


input.on("keypress",function(){
	if(event.which === 13)  {
		$("ul").append("<li>"+input.val()+"</li>");
		$(this).val("");
	}

});
