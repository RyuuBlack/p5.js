$(document).ready(function(){

  $("#banner").css({"height":$(window).height() + "px"})

  var height = $(window).height();
  var flag = false;
  var scroll;
  var pixels;

  $(window).scroll(function(){

    scroll = $(this).scrollTop();

    if(scroll > 200){
      if (!flag) {
        $("#logo").css({"margin-top":"8px","width":"100px","height":"86px"});
        $("header").css({"background-color":"#171817"});
        flag = true;
      }
    }
    else{
      if (flag) {
        $("#logo").css({"margin-top":"100px","width":"500px","height":"432px"});
        $("header").css({"background-color":"transparent"});
        flag = false;
      }
    }

  });







});
