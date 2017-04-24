$(document).ready(function(){
  
 
  $("#bob").hover(function(){
    $(this).hide(1000);
    $("#bob3").show(900);
  });

  $("#bob3").hover(function(){
    $(this).hide(1000);
    $("#bob2").show(900);
  });

  $("#bob2").hover(function(){
    $(this).hide(1000);
    $("#bob4").show(1500);
  });

  $("#bob4").hover(function(){
    $(this).hide(1000);
    $("#bob").show(900);
  });

  $("#bob2").hover(function(){
    $(this).hide(1000);
    $("#bob5").show(200);
  });

  $("#bob5").hover(function(){
    $(this).hide(2000);
    
  });

  $(".loading").fadeOut(5000);
  $("body").hide().fadeIn();

  $("#bob").hide().fadeIn(6000);
  
  $(".mail").hide().fadeIn(6000);




  



 
  
  
  

 
});