$(document).ready(function() {
    // water ripples
	try {
		$('body').ripples({
			resolution: 512,
			dropRadius: 10, //px
			perturbance: 0.02,
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}
	// Automatic drops
    var timesRun=0;
	var autoDrops=setInterval(function() {
        timesRun +=1;
        if(timesRun == 10){
            clearInterval(autoDrops);
        }
        var $el = $('body');
		//var x = Math.random() * $el.outerWidth();
		//var y = Math.random() * $el.outerHeight();
        var x=$("#boat").position().left
        var y=$("#boat").position().top
		var dropRadius = 10;
		var strength = 0.04;
		$el.ripples('drop', x, y, dropRadius, strength);
	}, 300);
    //boat traveling ^_^
    //could be replaced by jquery,need some technic
    TweenMax.to($("#boat"), 3, {top:"50%",left:"60%",scale:0.5,opacity:0.0});
    TweenMax.from($("#followBoat"), 1.0, {opacity:0.0,delay:3.0});
    TweenMax.staggerFrom([$("#poem1"),$("#poem2"),$("#poem3")],2.1,{scale:0.0,opacity:0.0},0.7);
    TweenMax.staggerFrom($(".navigation"),2.1,{scale:0.0,opacity:0.0,delay:2.1,ease:Back.easeOut},0.7);
    //boat following ^_^
    var xp =$("#followBoat").position().left, yp =$("#followBoat").position().top;
    var mouseX=xp,mouseY=yp;
    $(document).mousemove(function(e){
         mouseX = e.pageX;
         mouseY = e.pageY;    
    });
/*
    var rotX=0,rotY=0,radians=0,degree=0;
    var offset = $("#followBoat").offset(); 
    var centerX = (offset.left) + ($("#followBoat").width()/2);
    var centerY = (offset.top)  + ($("#followBoat").height()/2);
    rotX += (mouseX-centerX)/2; 
    rotY += (mouseY-centerY)/2; 
    radians = Math.atan2(rotX, rotY);
    degree = (radians * (180 / Math.PI))-180; 
    if(mouseX>centerX){
        degree=180;
    }
    $("#followBoat").css('transform', 'rotateY('+degree+'deg)');
    */
    var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += ((mouseX - xp)/12);
    yp += ((mouseY - yp)/12);
    $("#followBoat").css({left:xp +'px', top:yp +'px'});  
    }, 30);
    
    $("#enterButton").animate({opacity: 1.0,top: "52%",left:"60%"}, 5000);
    $("#enterButton").click(function() {
		$('body').ripples('destroy');
        window.location = "home.html";
    });

});
