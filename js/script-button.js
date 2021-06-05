$('.burger').click(function(){
  $('.burger__span:nth-child(1)').toggleClass('first');
  $('.burger__span:nth-child(2)').toggleClass('middle');
  $('.burger__span:nth-child(3)').toggleClass('last');
});