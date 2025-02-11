$('.menu-button').click(function(){
  $('.category-menu__dropdown').toggle("scale");
  $(".section-left").animate({ scrollTop: $('.section-left').height() }, 1000);
  return false;
})

let darkmode = true;

$('.darkmode').click(function(){
  if(darkmode){
    $(':root').css("--thoma-orange", "#111");
    $(':root').css("--thoma-magenta", "#111");
    $(':root').css("--fg", "#080808");
    $(':root').css("--bg", "#f6f6f6");
    $(':root').css("--bga", "#f6f6f6ff");
    $('.thoma-logo__thoma').removeClass('neon').removeClass('orange');
    $('.av-logo > span').removeClass('neon').removeClass('pink');
    $('.darkmode').attr("src", "images/darkmode.svg");
    $('.header').css('background', 'var(--bg)');
    darkmode = !darkmode;
  } else {
    $(':root').css("--thoma-orange", "#f26f24");
    $(':root').css("--thoma-magenta", "#d40e86");
    $(':root').css("--fg", "#f6f6f6");
    $(':root').css("--bg", "#080808");
    $(':root').css("--bga", "#08080800");
    $('.thoma-logo__thoma').addClass('neon').addClass('orange');
    $('.av-logo > span').addClass('neon').addClass('pink');
    $('.darkmode').attr("src", "images/darkmode-light.svg");
    $('.header').css('background', 'linear-gradient(180deg, var(--bg) 78%, var(--bga) 100%)');
    darkmode = !darkmode;
  }
})