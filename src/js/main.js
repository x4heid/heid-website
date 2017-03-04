$(document).ready(function() {
  $(".work-sample img").click(function(){
    $(this).next().css("display", "flex");
  });

  $(".work-sample-overlay").click(function(){
    $(this).hide();
  });
});
