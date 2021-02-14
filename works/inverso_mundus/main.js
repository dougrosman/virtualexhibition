let darkmode = true;

$('.darkmode').click(function(){
  if(darkmode){
    $(':root').css("--thoma-orange", "#111");
    $(':root').css("--thoma-magenta", "#111");
    $(':root').css("--fg", "#080808");
    $(':root').css("--bg", "#f6f6f6");
    $('.thoma-logo__thoma').removeClass('neon').removeClass('orange');
    $('.av-logo > span').removeClass('neon').removeClass('pink');
    $('.darkmode').attr("src", "../../images/darkmode.svg")
    darkmode = !darkmode;
  } else {
    $(':root').css("--thoma-orange", "#f26f24");
    $(':root').css("--thoma-magenta", "#d40e86");
    $(':root').css("--fg", "#f6f6f6");
    $(':root').css("--bg", "#080808");
    $('.thoma-logo__thoma').addClass('neon').addClass('orange');
    $('.av-logo > span').addClass('neon').addClass('pink');
    $('.darkmode').attr("src", "../../images/darkmode-light.svg")
    darkmode = !darkmode;
  }
})