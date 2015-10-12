function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
function picMovement() {
    var boat=document.getElementById("boat");
    var initPoem1=document.getElementById("poem1");
    var initPoem2=document.getElementById("poem2");
    var initPoem3=document.getElementById("poem3");
    var nav=document.getElementsByClassName("navigation");

    TweenMax.to(boat, 3, {top:"50%",left:"60%",scale:0.5,opacity:0.5});
    TweenMax.staggerFrom([initPoem1,initPoem2,initPoem3],2.1,{scale:0.0,opacity:0.0},0.7);
    TweenMax.staggerFrom(nav,2.1,{scale:0.0,opacity:0.0,delay:2.1,ease:Back.easeOut},0.7);
//  var initPoem=document.getElementsByClassName("poem");
//  TweenMax.to(initPoem, 2, {text:{value:"只恐雙溪舴艋舟  載不動  許多愁",ease:Linear.easeNoneease}});
}


addLoadEvent(picMovement);
