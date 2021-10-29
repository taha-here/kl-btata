


$(window).scroll(function() {
  if ($(this).scrollTop()>120){
      $('.page-down-preview').show(1000);
   }
  else{
    $('.page-down-preview').hide(1000);
   }
});
