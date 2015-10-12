function initAnimation() {
    var boat=document.getElementById("boat");
    var followBoat = document.getElementById("followBoat");
    var initPoem1=document.getElementById("poem1");
    var initPoem2=document.getElementById("poem2");
    var initPoem3=document.getElementById("poem3");
    var nav=document.getElementsByClassName("navigation");

    TweenMax.to(boat, 3, {top:"50%",left:"60%",scale:0.5,opacity:0.0});
    TweenMax.from(followBoat, 3, {delay:3,opacity:0.0});
    TweenMax.staggerFrom([initPoem1,initPoem2,initPoem3],2.1,{scale:0.0,opacity:0.0},0.7);
    TweenMax.staggerFrom(nav,2.1,{scale:0.0,opacity:0.0,delay:2.1,ease:Back.easeOut},0.7);
};

function followPointer() {
    // Define an boat to move
    var followBoat = document.getElementById("followBoat");
    // Set it to use absolute positioning
    //if (followPointerFlag) {
    followBoat.style.position = 'absolute';
    followBoat.style.width ='25px';
    followBoat.style.height='25px';
    // Create an event listener for the document's mousemove event
    function eventListener(W3CEvent) {
        var pointer = ADS.getPointerPositionInDocument(W3CEvent);
        // Position the boat relative to the pointer
        //if (followBoat.movement) {
        //    clearTimeout(followBoat.movement);
       // }

      //  moveElement("boat",pointer.x,pointer.y,10);
       followBoat.movement=setTimeout(function(){
        followBoat.style.left = pointer.x + 'px';
        followBoat.style.top  = pointer.y + 'px';
       },200);
    }
    // Attach the event listener to the document object's mousemove event
    ADS.addEvent(document,'mousemove',eventListener);
    //}
};
function initAll(){
    initAnimation();
    followPointer();
}
ADS.addEvent(window,'load',initAll);
//ADS.addEvent(window,'load',followPointer);
