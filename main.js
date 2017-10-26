$(function(){

  // 1
  $('#t2').fadeIn(3000, function() {
    $('#t1').fadeOut(3000);
  });

  // 2
  var w =new Waypoint({
    element: document.getElementById('first'),
    handler: function(direction) {
      if(direction === 'down'){
        $('#t3').animate({
          bottom: "+=300"
        }, 4000, function() {
          $('#t3').fadeOut(3000);
        });
        w.disable();
      }
    },
    offset: -300
  });

});
