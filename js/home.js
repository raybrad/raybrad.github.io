$(document).ready(function() {
$('.custom-main>div').not(":first-child").hide();
$('.custom-menu a').click(function(){
/*
     $div = $('.parent>div').eq($(this).index('.custom-menu a'));  // get the relevant div
     $('.parent>div').not($div).hide();  // hide all but the relevant div
     $div.show();  // show the relevant div
*/
     $('.custom-main>div').hide();
     var tmp_div = $(this).parent().index();
     $('.custom-main>div').eq(tmp_div).show();
  });
    
 $('.open_popup').magnificPopup({
        type: 'inline',
        midClick: true,
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }
    });
 
 $('#words').quoteRotator();
});
