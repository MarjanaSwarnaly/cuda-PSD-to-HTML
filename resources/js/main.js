$(document).ready(function(){

  //waypoints(service_section)
  $(".js_service_section").waypoint(function(direction){
    if (direction=="down"){
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }

  });


  //MIXITUP (portfolio_section)
  var mixer = mixitup('.container');
});
