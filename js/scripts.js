(function($){
  "use strict";

  var $window = $(window);

  $window.on('load', function() {
    $window.trigger("resize");    
  });

  // Preloader
  $('.loader').fadeOut();
  $('.loader-mask').delay(350).fadeOut('slow');

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Init
  initFlickity();

  $window.on('resize', function() {
    hideSidenav();
  });



  /* Detect Browser Size
  -------------------------------------------------------*/
  var minWidth;
  if (Modernizr.mq('(min-width: 0px)')) {
    // Browsers that support media queries
    minWidth = function (width) {
      return Modernizr.mq('(min-width: ' + width + 'px)');
    };
  }
  else {
    // Fallback for browsers that does not support media queries
    minWidth = function (width) {
      return $window.width() >= width;
    };
  }


  /* Mobile Detect
  -------------------------------------------------------*/
  if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
     $("html").addClass("mobile");
     $('.dropdown-toggle').attr('data-toggle', 'dropdown');
  }
  else {
    $("html").removeClass("mobile");
  }

  /* IE Detect
  -------------------------------------------------------*/
  if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie"); }


  /* Sticky Navigation
  -------------------------------------------------------*/
  $window.scroll(function(){
    scrollToTop();    
    stickyNav(); 
  });

  var $stickyNav = $('.nav--sticky');
  var $nav = $('.nav');

  function stickyNav() {
    if ($window.scrollTop() > 2) {
      $stickyNav.addClass('sticky');
      $nav.addClass('sticky');
    } else {
      $stickyNav.removeClass('sticky');
      $nav.removeClass('sticky');
    }
  }


  /* Nav Seacrh
  -------------------------------------------------------*/
  (function() {
    var navSearchTrigger = $('.nav__search-trigger'),
        navSearchTriggerIcon = navSearchTrigger.find('i'),
        navSearchBox = $('.nav__search-box'), 
        navSearchInput = $('.nav__search-input'); 

    navSearchTrigger.on('click', function(e){
      e.preventDefault();
      navSearchTriggerIcon.toggleClass('ui-close');
      navSearchBox.slideToggle();      
    });
  })();


  
  /* Fuulscreen-Nav 
  -------------------------------------------------------*/
  $("#nav-trigger").click(function () {
    //$("#full-nav .subnav-holder a").click(function () {
    //    $('#full-nav').removeClass('shown');
    //});

    $('#full-nav').addClass('shown animated fadeIn');
    console.log("called");
    const elements = document.querySelectorAll('[data-chaffle]');
    Array.prototype.forEach.call(elements, function (el) {
        const chaffle = new Chaffle(el, {});
        chaffle.init();
    });

});

$("#menu-killer").click(function () {
    $('#full-nav').removeClass('shown');
});

$(".main-nav-menu a[href='#']").click(function () {
    if ($(this).hasClass("active")) {
        return false;
    } else {
        $(".main-nav-menu a").removeClass("active");
        $(".subnav-holder ul").hide();
        $(this).addClass("active");
        var clas = $(this).data("sub");

        $("ul." + clas).fadeIn(300);
        return false;
    }
});


  

  /* Tabs
  -------------------------------------------------------*/
  $('.tabs__trigger').on('click', function(e) {
    var currentAttrValue = $(this).attr('href');
    $('.tabs__content-trigger ' + currentAttrValue).stop().fadeIn(1000).siblings().hide();
    $(this).parent('li').addClass('tabs__item--active').siblings().removeClass('tabs__item--active');
    e.preventDefault();
  });


  /* Flickity Slider
  -------------------------------------------------------*/
  function initFlickity() {

    // 1st carousel, main
    $('#flickity-hero').flickity({
      cellAlign: 'left',
      contain: true,
      pageDots: false,
      prevNextButtons: false,
      draggable: false
    });

    // 2nd carousel, navigation
    $('#flickity-thumbs').flickity({
      cellAlign: 'left',
      asNavFor: '#flickity-hero',
      contain: true,
      pageDots: false,
      prevNextButtons: false,
      // draggable: false
    });

    // Posts carousel
    $('.carousel-posts').flickity({
      cellAlign: 'left',
      pageDots: false,
      wrapAround: true,
    });
  }


  // 
  function scrollToTop() {
    var scroll = $window.scrollTop();
    var $backToTop = $(".float-sm");
    if (scroll >= 50) {
      $backToTop.addClass("show");
    } else {
      $backToTop.removeClass("show");
    }
  }


  /* Scroll to Top
  -------------------------------------------------------*/
  function scrollToTop() {
    var scroll = $window.scrollTop();
    var $backToTop = $("#back-to-top");
    if (scroll >= 50) {
      $backToTop.addClass("show");
    } else {
      $backToTop.removeClass("show");
    }
  }

  $('a[href="#top"]').on('click',function(){
    $('html, body').animate({scrollTop: 0}, 1000, "easeInOutQuint");
    return false;
  });


  $(".topicClick").click(function(){
  $("#topicdv").show();
    let cntdv = $(this).data("content");
    $(".topicContent").hide();
    // $(".tab-content").hide();
    $(cntdv).show();

  });
  $("#topicdv").hide();


  $(".topicContent").hide();

  AOS.init();

})(jQuery);