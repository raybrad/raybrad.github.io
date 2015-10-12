
function initAnimation() {
    var boat=document.getElementById("boat");
    var initPoem1=document.getElementById("poem1");
    var initPoem2=document.getElementById("poem2");
    var initPoem3=document.getElementById("poem3");
    var nav=document.getElementsByClassName("navigation");

    TweenMax.to(boat, 3, {top:"50%",left:"60%",scale:0.5,opacity:0.5});
    TweenMax.staggerFrom([initPoem1,initPoem2,initPoem3],2.1,{scale:0.0,opacity:0.0},0.7);
    TweenMax.staggerFrom(nav,2.1,{scale:0.0,opacity:0.0,delay:2.1,ease:Back.easeOut},0.7);
};
ADS.addEvent(window,'load',initAnimation);


function followPointer() {
    // Define an boat to move
    var boat = document.getElementById("boat");
    
    // Set it to use absolute positioning
    //if (followPointerFlag) {
    boat.style.position = 'absolute';
    boat.style.width='25px';
    boat.style.height='25px';
    
    // Create an event listener for the document's mousemove event
    function eventListener(W3CEvent) {
        var pointer = ADS.getPointerPositionInDocument(W3CEvent);
        // Position the boat relative to the pointer
        if (boat.movement) {
             clearTimeout(boat.movement);
        }
        boat.movement=setTimeout(function(){
            boat.style.left = pointer.x + 'px';
            boat.style.top  = pointer.y + 'px';
        },500);
    }
    // Attach the event listener to the document object's mousemove event
    ADS.addEvent(document,'mousemove',eventListener);
    //}
};
ADS.addEvent(window,'load',followPointer);
