// Needs latest version of jQuery to run
//$ = initiate the jquery
console.log('I LOVE UNICORNS AND RAINBOWS.');


//create a function that runs by default
$(function(){
  $('body').removeClass('noscript');

  $('.menu-btn,.close-btn').click(function(){
    toggleNav();
  });

});

function toggleNav(){
  if($('.site-wrapper').attr('data-state') == 'slide-close'){
  //Show Nav when closed
    $('.site-wrapper').attr('data-state','slide-open');
  }else{
  //Hide Nav when open
    $('.site-wrapper').attr('data-state','slide-close');

  }
}
