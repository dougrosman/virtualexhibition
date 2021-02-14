$('.menu-button').click(function(){
  $('.category-menu__dropdown').toggle("scale");
  $(".section-left").animate({ scrollTop: $('.section-left').height() }, 1000);
  return false;
})