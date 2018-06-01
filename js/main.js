$(document).ready(() => {

  $('.portfolio-square').on('mouseenter', function() {
    $(this).animate({opacity:0.5})
  }).on('mouseleave', function() {
    $(this).animate({opacity:1.0});
  });


  $('.gallery-image').on('mouseenter', event => {
    $(event.currentTarget).addClass('gallery-image-zoom');
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('gallery-image-zoom');
  });

  

});





  /*$('.portfolio-square').hover(function() {
    $(this).animate({opacity: 0.5});
  }, function() {
      $(this).animate({opacity: 1.0});
    });
  });*/

  /* Index page portfolio Square
  $('.portfolio-square').on('mouseenter', function() {
    $(this).animate({opacity:0.5})
  });
  $('.portfolio-square').on('mouseleave', function() {
    $(this).animate({opacity:1.0});
  });
  */



  /* Index page Netflix Square
  $('#netflix-square').on('mouseenter', function() {
    $(this).animate({opacity:0.5})
  });
  $('#netflix-square').on('mouseleave', function() {
    $(this).animate({opacity:1.0});
  });
  /* Index page Drama Square
  $('#drama-square').on('mouseenter', function() {
    $(this).animate({opacity:0.5})
  });
  $('#drama-square').on('mouseleave', function() {
    $(this).animate({opacity:1.0});
  });
  /* Index page PCCW Media Square
  $('#pccwmedia-square').on('mouseenter', function() {
    $(this).animate({opacity:0.5})
  });
  $('#pccwmedia-square').on('mouseleave', function() {
    $(this).animate({opacity:1.0});
  });
  /* Index page EBS Square
  $('#ebs-square').on('mouseenter', function() {
    $(this).animate({opacity:0.5})
  });
  $('#ebs-square').on('mouseleave', function() {
    $(this).animate({opacity:1.0});
  });
  */
