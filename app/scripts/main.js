$(document).ready(function () {


  // sticky header
  jQuery(window).scroll(function () {
    var stickyHeader = jQuery('.intro').offset().top;
    if (jQuery(this).scrollTop() > stickyHeader) {
      $('.header').addClass('headerBg');
    } else {
      $('.header').removeClass('headerBg');
    }
  });
  // sticky header end


  // animation
  if ($(window).width() > 575) {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
      callback: function (box) {

      },
      scrollContainer: null
    });
    wow.init();
  }
  // animation end

  // hamburger
  $('.hamburger').click(function () {
    $(this).toggleClass('openClose');
    $('.mnu-js').toggleClass('mobileMnu-js');
    $('.hamburger__line').toggleClass('lineBg');
  });

  $('.mnu-js').click(function () {
    $(this).removeClass('mobileMnu-js');
    $('.hamburger').removeClass('openClose');
    $('.hamburger__line').removeClass('lineBg');
  });
  // hamburger end



  // scroll button
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 700);
  }
  $('[data-scroll]').on('click', scrollToSection);
  // scroll button end





  // count
  $('.count-js').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  // count end


  // slider reviews
  var galleryThumbs = new Swiper('.thumbs', {
    slidesPerView: 6,
    touchRatio: 0,
  });
  var galleryTop = new Swiper('.comment', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
  // slider reviewsend




  // thanks message
  //E-mail Ajax Send
  $('form').submit(function () {
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function () {
      $('.modalWindowWrap').fadeIn();
    });
    return false;
  });
  // thanks message end





  $('.modalWindowWrap').on('click', function () {
    $(this).hide();
  });



});
