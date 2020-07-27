(function($){
    
  function init_reset_animated_elements($slide) {
      $slide.find('[class^="animation"]:not(".cssanimations"), [class*="animation"]:not(".cssanimations")').each(function() {
          var $this = $(this);
          var $animation = $this.data('animation');    
          $(this).css('visibility','hidden');
          $(this).removeClass($animation).addClass("animated fadeOut");
          setTimeout(function(){
              $this.css('visibility','');
          }, 1000);
      });
  }
  
  function resize_submenu(){
      var $height = 0;
      $('nav.main-navigation .menu > li > ul.dropdown').each(function(){
          var $submenu = $(this);
          var $element = $submenu.parent();
          var $element_offset = $element.offset();
          var $element = $element.outerWidth(true);
          if($height < $submenu.outerWidth(true)){
              $height = $submenu.outerWidth(true);   
          }
          $submenu.removeClass('resized');
          var $width = 0;
          $submenu.children('li').each(function(){
              var $link = $(this).children('a');
              if($width < $link.outerWidth(true)){
                  $width = $link.outerWidth(true);   
              }
          });
          var $total_width = $element_offset.left+$width;
          if($(window).width() < $total_width){
              $submenu.addClass('submenu-align-left');   
          }
          $submenu.css('width',$width+20);
      });
      if(!$('body').hasClass('page-template-portfolio-2')){
          $('#off-canvas-wrap').css('min-height',($height+$('#masthead').outerHeight(true)));
          $('#off-canvas-wrap .inner-wrap').css('min-height',$(window).outerHeight(true));
      }
      $('nav.main-navigation .menu > li > ul.dropdown > li > ul.dropdown').each(function(){
          var $submenu = $(this);
          var $parent = $submenu.parents('ul:eq(0)');
          $submenu.removeClass('resized');
          var $width = 0;
          $submenu.children('li').each(function(){
              var $link = $(this).children('a');
              if($width < $link.outerWidth(true)){
                  $width = $link.outerWidth(true);   
              }
          });
          if($parent.hasClass('submenu-align-left')){
              $submenu.css('width',$width+20).css('right',$(this).parent().outerWidth(true)).css('left','initial');
          }else{
              var $element_offset = $submenu.offset();
              var $total_width = $element_offset.left+$width;
              if($(window).width() < $total_width){
                  $submenu.addClass('submenu-align-left');   
                  $submenu.css('width',$width+20).css('right',$(this).parent().outerWidth(true)).css('left','initial');
              }else{
                  $submenu.css('width',$width+20).css('left',$(this).parent().outerWidth(true));
              }
          }
      });
      $('nav.main-navigation .menu > li ul.dropdown').addClass('resized');
  }
  
  $('.navigation .project-list').on('click',function(){
      if($('body').hasClass('project-content-open')){
          $('body').removeClass('project-content-open');
          var $window_w = $('body').outerWidth(true);
          var $content = $('.page-template-portfolio-2 .slides > .slide > .inner-wrap > .content');
          setTimeout(function(){
              $content.css('right',-$window_w);
          }, 2000);
      }else{
          $('body').toggleClass('project-list-open');
      }
  });
  
  function portfolio_2_stop_slideshow($slide){
      clearInterval($slide.data("slideshowinterval"));
  }
  
  function portfolio_2_start_slideshow($slide){
      var $images = $slide.find('.image-wrap > .image');
      if ($images.length > 1) {
          var $speed = 8000;
          var $counter = 0;
          $slide.data("slideshowinterval", setInterval(function() {
              var $active_image = $slide.find('.image-wrap > .image.active');
              if($active_image.length==0){
                  $active_image = $slide.find('.image-wrap > .image.first');
                  $active_image.addClass('active');
              }
              var $next_image = $active_image.next();
              if(!$next_image.hasClass('image')){
                  var $next_image = $slide.find('.image-wrap > .image.first');
              }
              var $next_image_bg = $next_image.data('bgimage');
              if(typeof $next_image_bg !== 'undefined'){
                  $next_image.css('background-image','url('+$next_image_bg+')');
              }
      TweenLite.to($next_image, 3, {
                  autoAlpha: 1,
                  onComplete: function() {
                      $active_image.removeClass("active").css('z-index','2').css('opacity','0');
                      $next_image.addClass("active").css('z-index','1');
                  }
              });
              if($counter>0) $speed = 11000;
              $counter++;
          }, $speed));
      }
  }
  
  function portfolio_2_do_prev($this, $active_slide, $window, $masthead_height, $index){
      
      $this.parents('.slides').addClass('animating');
      if(typeof $index !== 'undefined'){
          var $next_slide = $('.page-template-portfolio-2 .site-content > .slides > .slide:eq('+$index+')');
      }else{
          var $next_slide = $active_slide.prev();
          if(!$next_slide.hasClass('slide')){
              $next_slide = $('.page-template-portfolio-2 .site-content > .slides > .slide').last();
          }
      }
      var $method = 'prev';
      if($('body').hasClass('project-content-open')){
          var $method = 'prev-content';   
      }
      init_load_portfolio_2_content($next_slide, $active_slide, $window, $masthead_height, $method);
      
  }
  
  function portfolio_2_do_next($this, $active_slide, $window, $masthead_height, $index){
      
      $this.parents('.slides').addClass('animating');
      if(typeof $index !== 'undefined'){
          var $next_slide = $('.page-template-portfolio-2 .site-content > .slides > .slide:eq('+$index+')');
      }else{
          var $next_slide = $active_slide.next();
          if(!$next_slide.hasClass('slide')){
              $next_slide = $('.page-template-portfolio-2 .site-content > .slides > .slide:eq(0)');
          }
      }
      var $method = 'next';
      if($('body').hasClass('project-content-open')){
          var $method = 'next-content';   
      }
      init_load_portfolio_2_content($next_slide, $active_slide, $window, $masthead_height, $method);

  }
  
  function init_content_smoothscroll_portfolio_2(){
      if(F4DSettings.smoothscroll!=1){
          var $scroll_wrapper = $( "body.page-template-portfolio-2 .site-content > .slides > .slide > .inner-wrap > .content" );
          $scroll_wrapper.scroll(function() {
              init_animated_elements($scroll_wrapper.scrollTop());
              init_reposition_portfolio_2_parallax_bg($scroll_wrapper.scrollTop());
          });
      }else{
          $("body.page-template-portfolio-2 .site-content > .slides > .slide > .inner-wrap > .content").mCustomScrollbar({
              theme: 'minimal-dark',
              alwaysShowScrollbar: 0,
              autoHideScrollbar: true,
              mouseWheel: { 
                  scrollAmount: 230,
                  deltaFactor: 1,
              },
              callbacks: {
                  whileScrolling:function() {           
                      init_animated_elements(-this.mcs.top);
                      init_reposition_portfolio_2_parallax_bg(-this.mcs.top);
                  },
                  onScroll:function() {

                  },
                  onTotalScroll:function() {

                  },
              }
          });
      }
      init_reposition_portfolio_2_parallax_bg(0);
  }
  
  function init_content_width_portfolio_2($method){
      var $content = $('.page-template-portfolio-2 .site-content > .slides > .slide > .inner-wrap > .content');
      var $window = $(window).width();
      if ($window <= 1024) {
          $("body.page-template-portfolio-2.project-content-open .site-content > .slides > .slide > .inner-wrap > .content").mCustomScrollbar("disable");
      }else{
          $("body.page-template-portfolio-2.project-content-open .site-content > .slides > .slide > .inner-wrap > .content").mCustomScrollbar("update");
      }
      if ($window >= 100) {
          var $margin = 22;
          var $window = $(window).width();
          var $width = $window - (($window/100)*$margin);
      }
      if ($window >= 530) {
          var $margin = 14;
          var $window = $(window).width();
          var $width = $window - (($window/100)*$margin);
      }
      if ($window >= 760) {
          var $margin = 9;
          var $window = $(window).width();
          var $width = $window - (($window/100)*$margin);
      }
      if ($window >= 1024) {
          var $margin = 7;
          var $window = $(window).width();
          var $width = $window - (($window/100)*$margin);
      }            
      if ($window >= 1200) {
          var $margin = 90;
          var $window = $(window).width();
          var $width = $window - $margin;
      }
      $content.css('width',$width);
      init_parallax_section_bg_heights();
  }
  
  function init_after_portfolio_2_open_content($this, $method, $active_slide, $next_slide, $window, $masthead_height, $empty) {
      if($method==''){
          if(!$('body').hasClass('project-list-open')){
              $('body').addClass('project-content-open');
          }else{
              $('body').removeClass('project-list-open');
              setTimeout(function(){
                  $('body').addClass('project-content-open');
              }, 700);
          }
          init_content_width_portfolio_2();
      }
  }
  function init_after_portfolio_2_content_complete($this, $method, $active_slide, $next_slide, $window, $masthead_height, $empty) {
      $('.tds-parallax').addClass('fixed').each(function() {
          $(this).removeClass('normal-background');
          $(this).parent().addClass('is-parallax');
          $(this).parallax( "50%", 0.3 );
      });
  }
  function init_after_portfolio_2_content_success($this, $method, $active_slide, $next_slide, $window, $masthead_height, $empty) {
      if(($method=='next-content') || ($method=='prev-content') || ($method=='next') || ($method=='prev')){
          $('.page-template-portfolio-2 .site-content > .slides > .slide:not(.active)').css('z-index','0');
      }
      if(($method=='next-content') || ($method=='next')){
          $active_slide.css('z-index','2');
          $next_slide.css('z-index','1').css('height',$window-$masthead_height);
          $active_slide.removeClass('transition-in transition-out transition-slide-up transition-slide-down');
          $next_slide.removeClass('transition-in transition-out transition-slide-up transition-slide-down');
          $active_slide.addClass('transition-out transition-slide-up');
          $next_slide.addClass('transition-in transition-slide-up');
          $next_slide.addClass('active');
          $('.page-template-portfolio-2 aside.project-list nav ul li').removeClass('active');
          $('.page-template-portfolio-2 aside.project-list nav ul li:eq('+$next_slide.index()+')').addClass('active');
          setTimeout(function(){
      TweenLite.to($active_slide, 1, {
                  height:0,
                  ease:Sine.easeOut,
                  onComplete: function(){
                      $this.parents('.slides').removeClass('animating');
                      $active_slide.removeClass('active').css('height','0px');
                      portfolio_2_stop_slideshow($active_slide);
                      portfolio_2_start_slideshow($next_slide);
                  }
              });
          }, 200);
      }
      if(($method=='prev-content') || ($method=='prev')){
          $active_slide.css('z-index','1');
          $next_slide.css('z-index','2').css('height','0px');
          $next_slide.css('height','0px');
          $next_slide.addClass('active');
          $active_slide.removeClass('transition-in transition-out transition-slide-up transition-slide-down');
          $next_slide.removeClass('transition-in transition-out transition-slide-up transition-slide-down');
          $active_slide.addClass('transition-out transition-slide-down');
          $next_slide.addClass('transition-in transition-slide-down');
          $next_slide.addClass('active');
          $('.page-template-portfolio-2 aside.project-list nav ul li').removeClass('active');
          $('.page-template-portfolio-2 aside.project-list nav ul li:eq('+$next_slide.index()+')').addClass('active');
          setTimeout(function(){
      TweenLite.to($next_slide, 1, {
                  height:$window-$masthead_height,
                  ease:Sine.easeOut,
                  onComplete: function(){
                      $this.parents('.slides').removeClass('animating');
                      $active_slide.removeClass('active').css('height','0px');
                      portfolio_2_stop_slideshow($active_slide);
                      portfolio_2_start_slideshow($next_slide);
                  }
              });
          }, 200);
      }
  }    
  
  function init_load_portfolio_2_content($next_slide, $active_slide, $window, $masthead_height, $method){
      var $window = $(window).outerHeight(true);
      var $this = $next_slide.find('.about .read-more');
      var $empty = false;
      if($this.parents('.inner-wrap:eq(0)').find('.content .text > .slider-content').html()==''){
          $empty = true;
      }
      var $timeout = 0;
      if($('body').hasClass('project-list-open')){ 
          var $timeout = 0;
      }
      if(($method=='next') || ($method=='prev')){
          $('.page-template-portfolio-2 .site-content > .slides > .slide:not(.active)').css('z-index','0');
          if($method=='next'){
              $active_slide.css('z-index','2');
              $next_slide.css('z-index','1').css('height',$window-$masthead_height);
              $active_slide.removeClass('transition-in transition-out transition-slide-up transition-slide-down');
              $next_slide.removeClass('transition-in transition-out transition-slide-up transition-slide-down');
              $active_slide.addClass('transition-out transition-slide-up');
              $next_slide.addClass('transition-in transition-slide-up');
              $next_slide.addClass('active');
              $('.page-template-portfolio-2 aside.project-list nav ul li').removeClass('active');
              $('.page-template-portfolio-2 aside.project-list nav ul li:eq('+$next_slide.index()+')').addClass('active');
              setTimeout(function(){
        TweenLite.to($active_slide, 1, {
                      height:0,
                      ease:Sine.easeOut,
                      onComplete: function(){
                          $this.parents('.slides').removeClass('animating');
                          $active_slide.removeClass('active').css('height','0px');
                          portfolio_2_stop_slideshow($active_slide);
                          portfolio_2_start_slideshow($next_slide);
                      }
                  });
              }, 200);
          }
          if($method=='prev'){
              $active_slide.css('z-index','1');
              $next_slide.css('z-index','2').css('height','0px');
              $next_slide.css('height','0px');
              $next_slide.addClass('active');
              $active_slide.removeClass('transition-in transition-out transition-slide-up transition-slide-down');
              $next_slide.removeClass('transition-in transition-out transition-slide-up transition-slide-down');
              $active_slide.addClass('transition-out transition-slide-down');
              $next_slide.addClass('transition-in transition-slide-down');
              $next_slide.addClass('active');
              $('.page-template-portfolio-2 aside.project-list nav ul li').removeClass('active');
              $('.page-template-portfolio-2 aside.project-list nav ul li:eq('+$next_slide.index()+')').addClass('active');
              setTimeout(function(){
        TweenLite.to($next_slide, 1, {
                      height:$window-$masthead_height,
                      ease:Sine.easeOut,
                      onComplete: function(){
                          $this.parents('.slides').removeClass('animating');
                          $active_slide.removeClass('active').css('height','0px');
                          portfolio_2_stop_slideshow($active_slide);
                          portfolio_2_start_slideshow($next_slide);
                      }
                  });
              }, 200);
          }
      }

      if(($method=='') || ($method=='next-content') || ($method=='prev-content')){
          if($empty==true){
              init_after_portfolio_2_open_content($this, $method, $active_slide, $next_slide, $window, $masthead_height, $empty);
              init_after_portfolio_2_content_success($this, $method, $active_slide, $next_slide, $window, $masthead_height, $empty);
              $.ajax({
                  type: 'post',
                  url: ajaxurl,
                  data: {
                      action: 'dondo_load_portfolio_content',
                      id: $this.attr('data-id'),
                  },
                  success: function (data) {
                      
                      // To prevend stuttering :)
                      setTimeout(function(){
                          $this.parents('.inner-wrap:eq(0)').find('.content .text > .slider-content').html(data);
                          init_after_portfolio_2_content_complete($this, $method, $active_slide, $next_slide, $window, $masthead_height, $empty);   
                          init_reset_animated_elements($next_slide);
                          init_animated_elements(0);
                          init_parallax_section_bg_heights();
                          init_reposition_portfolio_2_parallax_bg(0);
                          if (typeof TDFB !== 'undefined') {
                              if ( $.isFunction(TDFB.init_tdfb_form_frontend) ) {
                                  TDFB.init_tdfb_form_frontend();
                              }
                          }
                          if (typeof TDSBoxed !== 'undefined') {
                              if ( $.isFunction(TDSBoxed.init_tds_boxed_ready) ) {
                                  TDSBoxed.init_tds_boxed_ready();
                              }
                              if ( $.isFunction(TDSBoxed.init_tds_customheightcolumns_ready) ) {
                                  TDSBoxed.init_tds_customheightcolumns_ready();
                              }
                          }
                      }, $timeout);
                      
                      // To prevend stuttering :)
                      setTimeout(function(){
                          $this.parents('.inner-wrap:eq(0)').find('.content .text').css('background','none');
                          $this.parents('.inner-wrap:eq(0)').find('.content .text > *').css('opacity',1);
                      }, ($timeout+100)); 
                  },
                  complete: function () {
                      
                  }
              });
          }else{
              if($method==''){
                  init_after_portfolio_2_open_content($this, $method, $active_slide, $next_slide, $window, $masthead_height, $empty);
              }
              init_after_portfolio_2_content_success($this, $method, $active_slide, $next_slide, $window, $masthead_height, $empty);
          }
      }
  }
  $(document).on('click','.page-template-portfolio-2 .slides .slide.active .about .read-more',function(){
      init_load_portfolio_2_content($(this).parents('.slide:eq(0)'), '', '', '', '');
      return false;
  });
  
  $('.page-template-portfolio-2 .project-list li').on('click',function(){
      var $active_slide = $('.page-template-portfolio-2 .site-content > .slides > .slide.active');
      if(!$active_slide.parents('.slides:eq(0)').hasClass('animating')){
          $('.page-template-portfolio-2 .project-list li').removeClass('active');
          var $this = $(this);
          $this.addClass('active');
          var $window = $('body').outerHeight(true);
          var $masthead_height = $('#masthead').outerHeight(true);
          var $index = $this.index();
          var $active_index = $active_slide.index();
          var $window = $(window).width();
          if ($window < 1024) {
              $('.navigation .project-list').click();
              if($active_index == $index){
                  return false;
              }
              setTimeout(function(){
                  if($active_index > $index){
                      portfolio_2_do_prev($this, $active_slide, $window, $masthead_height, $index);
                  }else{
                      portfolio_2_do_next($this, $active_slide, $window, $masthead_height, $index);
                  }
              }, 1000);
          }else{
              if($active_index == $index){
                  return false;
              }
              if($active_index > $index){
                  portfolio_2_do_prev($this, $active_slide, $window, $masthead_height, $index);
              }else{
                  portfolio_2_do_next($this, $active_slide, $window, $masthead_height, $index);
              }
          }
      }
  });
  
  $('.page-template-portfolio-2 .nav-button').on('click',function(){    
      var $this = $(this);
      if(!$this.parents('.slides').hasClass('animating')){
          var $window = $('body').outerHeight(true);
          var $masthead_height = $('#masthead').outerHeight(true);
          var $active_slide = $('.page-template-portfolio-2 .site-content > .slides > .slide.active');
          if($this.hasClass('prev')){
              portfolio_2_do_prev($this, $active_slide, $window, $masthead_height);
          }else{
              portfolio_2_do_next($this, $active_slide, $window, $masthead_height);
          }
          if($('body').hasClass('project-content-open')){
              init_content_width_portfolio_2();
          }
      }
  });
  
  function init_portfolio_2(){
      $('.page-template-portfolio-2 .slides > .slide.active').css('height','0px');
  var $window = $('body').outerHeight(true);
      var $masthead_height = $('#masthead').outerHeight(true);
      var $window_w = $('body').outerWidth(true);
      var $content = $('.page-template-portfolio-2 .site-content > .slides > .slide > .inner-wrap > .content');
      $('.page-template-portfolio-2 .site-content > .slides').css('height',$window-$masthead_height);
      $('.page-template-portfolio-2 .slides > .slide > .inner-wrap').css('height',$window-$masthead_height);
      $('.page-template-portfolio-2 .slides > .slide.active').css('height','0px');
      $content.css('right',-$window_w);
  }
  
  function init_intro_portfolio_2_animation(){
  var $window = $(window).height();
      var $masthead_height = $('#masthead').outerHeight(true);
  TweenLite.to(".page-template-portfolio-2 .site-content > .slides > .slide.active", 1, {
          height:$window-$masthead_height,
          ease:Sine.easeOut,
          onComplete: function(){
              portfolio_2_start_slideshow($('.page-template-portfolio-2 .site-content > .slides > .slide.active'));
          }
      });
  }
  
  function update_offset_height_after_menu_expanding(hide){
      if(hide){
          $('.off-canvas-wrap').css('min-height','');
          $('.off-canvas-wrap > .inner-wrap').css('min-height','');
      }else{
          var height = $('.off-canvas-list.menu').outerHeight(true);
          if(height < $(window).outerHeight(true)){
              var height = $(window).outerHeight(true);
          }
          $('.off-canvas-wrap').css('min-height',height+100);
          $('.off-canvas-wrap > .inner-wrap').css('min-height',height+100);
      }
  }

  function init_toggle_button_position(){
      
      var $body = $('body');
      
      // Get masthead height
      var $masthead_height = $('#masthead').outerHeight(true);
      
      // Position close button
      $('.close-right-off-canvas, #close-main-menu-off-canvas').css('top',$masthead_height-72);
      $('#right-off-canvas-menu .off-canvas-menu-wrap, #left-off-canvas-menu .off-canvas-menu-wrap, #main-menu-off-canvas .main-navigation').css('margin-top',$masthead_height+20);
      
      // Position mobile logo
      var $mobile_logo = $('#masthead .header-wrap .theme-logo .name > a.hide-for-medium-up');
      $mobile_logo.css('margin-top',(($masthead_height-$mobile_logo.outerHeight())/2));
      
      // Get heade width
      var $header_width = $('#masthead .header-wrap').outerWidth(true);

      // Get logo width
      var $logo_width = $('#masthead .header-wrap .theme-logo').outerWidth(true);
      
      // Get icons width
      var $nav_icons_width = 0;
      var $nav_icons_width_outer = 0;
      $('#masthead .header-wrap nav.main-navigation > ul > li.menu-item-object-icon').each(function(){
          $nav_icons_width = $nav_icons_width + $(this).innerWidth();
          $nav_icons_width_outer = $nav_icons_width_outer + $(this).outerWidth(true);
      });
      $('#masthead .header-wrap nav.main-navigation > ul > li.menu-item-object-hamburger').each(function(){
          $nav_icons_width = $nav_icons_width + $(this).innerWidth();
          $nav_icons_width_outer = $nav_icons_width_outer + $(this).outerWidth(true);
      });
      
      // Get navigation width
      var $nav_width = $('#masthead .header-wrap nav.main-navigation').outerWidth(true);
      var $nav_width = ($nav_width-$nav_icons_width_outer);
      var $main_nav_width = $('#masthead .header-wrap nav.main-navigation').data('width');
      if(typeof $main_nav_width === 'undefined'){
          $main_nav_width = 0;
          $('#masthead .header-wrap nav.main-navigation').attr('data-width',$main_nav_width);
      }
      if($main_nav_width < $nav_width){   
          $('#masthead .header-wrap nav.main-navigation').attr('data-width', $nav_width);
      }
      var $nav_width = parseFloat($('#masthead .header-wrap nav.main-navigation').attr('data-width'));

      // Handle responsiveness
      if($body.hasClass('header-layout-1')){
          
      }
      if($body.hasClass('header-layout-3')){
          var $spacing_left = (($header_width/2) - (($nav_width)/2) - $nav_icons_width);
          if($spacing_left < 0){
              $spacing_left = 0;
          }   
          if($('#masthead .header-wrap nav.main-navigation > ul > li.menu-item-object-icon').length){
              $('#masthead .header-wrap nav.main-navigation > ul > li.menu-item-object-icon:eq(0)').css('margin-left',$spacing_left);
          }else{
              if($('#masthead .header-wrap nav.main-navigation > ul > li.menu-item-object-hamburger').length){
                  $('#masthead .header-wrap nav.main-navigation > ul > li.menu-item-object-hamburger').css('margin-left',$spacing_left);
              }else{
                  $('#masthead .header-wrap').css('padding-right', $spacing_left);
              }
          }
      }
      if(($body.hasClass('header-layout-4')) || ($body.hasClass('header-layout-5'))){
          var $spacing_left = $header_width - $nav_width - ($nav_icons_width + 4);
          var $logo_width = $('#masthead .header-wrap .theme-logo .name').outerWidth(true);
          var $logo_left = (($header_width/2)-($logo_width/2));
          $('body #masthead .header-wrap .theme-logo .name').css('left',$logo_left);
          if($('#masthead .header-wrap nav.main-navigation > ul > li.menu-item-object-icon').length){
              $('#masthead .header-wrap nav.main-navigation > ul > li.menu-item-object-icon:eq(0)').css('margin-left',$spacing_left);
          }else{
              if($('#masthead .header-wrap nav.main-navigation > ul > li.menu-item-object-hamburger').length){
                  $('#masthead .header-wrap nav.main-navigation > ul > li.menu-item-object-hamburger').css('margin-left',$spacing_left);
              }
          }
      }
      if($body.hasClass('header-layout-4')){
          if((($nav_width) > $logo_left) || ($nav_icons_width > $logo_left)){
              $('#masthead .header-wrap').addClass('responsive');
              if(($nav_icons_width > $logo_left)){
                  $('#masthead .header-wrap').addClass('mobile-responsive');
              }else{
                  $('#masthead .header-wrap').removeClass('mobile-responsive');
              }
          }else{
              $('#masthead .header-wrap').removeClass('responsive mobile-responsive');
          }
      }
      if(($body.hasClass('header-layout-1')) || ($body.hasClass('header-layout-2')) || ($body.hasClass('header-layout-3'))){
          $('#masthead .header-wrap').removeClass('responsive').removeClass('mobile-responsive');
          if(($logo_width+$nav_icons_width) >= $header_width){
              $('#masthead .header-wrap').addClass('responsive mobile-responsive');
              var $height = $('#masthead .header-wrap nav.main-navigation > ul').outerHeight(true);
          }else{
              if(  $header_width <= 800){
                 $('#masthead .header-wrap').addClass('responsive');
              } else if ( ($logo_width+$nav_width+$nav_icons_width_outer) >= $header_width) {
         $('#masthead .header-wrap').addClass('responsive');
          // $('#masthead .header-wrap').attr('style','border:1px solid red;');
        
      }else{
                  $('#main-menu-off-canvas').remove();
                  $('#off-canvas-wrap').removeClass('offcanvas-overlap-menu');
                  $('#masthead .header-wrap').removeClass('responsive');
              }
          }
      }        
  }
  
  function init_update_to_top(scrolled) {
      if (scrolled > 200) {
        $('.scroll-top').stop(true, true).slideDown(500);
      }
      else if (scrolled <= 200) {
        $('.scroll-top').stop(true, true).slideUp(500);
      }
  }
  
  function load_portfolio_images($this) {
      if((!$this.hasClass('loading')) && (!$this.hasClass('do-nothing'))){
          $this.addClass('loading');
          $.ajax({
              type: 'post',
              url: ajaxurl,
              data: {
                  action: 'dondo_load_portfolio_items',
                  categories: $this.attr('data-categories'),
                  limit: $this.attr('data-limit'),
                  page: $this.attr('data-page'),
                  parent: $this.attr('data-postid'),
                  shufflesizer: $this.attr('data-shufflesizer'),
              },
              success: function (data) {
                  if(data!='do_nothing'){
                      if(typeof $this.attr('data-page') === 'undefined'){
                          $this.attr('data-page', 1);
                      }else{
                          $this.attr('data-page', (parseFloat($this.attr('data-page')) + 1));
                      }
                      $(data).insertBefore($this.children('.loader'));
                      $('.imgLiquidFill').imgLiquid({
                          fill: true
                      });
                  }else{
                      $this.addClass('do-nothing');
                  }
              },
              complete: function () {
                  $(".tdf-flexslider").flexslider({
                      animation: "fade",
                      controlNav: !1,
                      prevText: "",
                      nextText: "",
                      touch: !0
                  });
                  setTimeout(function(){
                      $('body').mCustomScrollbar('update');
                      $this.removeClass('loading');
                  }, 1000);
              }
          });
      }
  }
  
  function check_portfolio_offset(percentage_scrolled) {
      if((!$('body').hasClass('author')) && (!$('body').hasClass('archive paged'))){
          if(percentage_scrolled > 50){
              $('#blocks').each(function () {
                  load_portfolio_images($(this), percentage_scrolled);
              });            
          }
      }
  }
  
  function init_parallax_section_bg_heights(){
      $('.tds-section.is-parallax').each(function(){
          var $wrapper = $(this).find('.tds-parallax');
          if($wrapper.children('img').length==0){
              var $bg_image_url = $wrapper.css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '');
              var rand = Math.random().toString(36).substr(2);;
              $('<img id="image_'+rand+'" src="'+$bg_image_url+'" />').appendTo($wrapper);
              var img = $('#image_'+rand); 
              var height = img.outerHeight(true);
              $wrapper.attr('data-image-height',height);
              $wrapper.css('background-image','');
          }
      });
      $('.tdf-featured-media.header-image .imgLiquid_bgSize').each(function(){
          var $wrapper = $(this).children('.page-header-image');
          var $bg_image_url = $wrapper.attr('src');
          if(typeof $bg_image_url !== 'undefined'){
              var $bg_image = new Image();
              $bg_image.src = $bg_image_url;
              $($bg_image).on('load',function(){
                  var $bg_image_height = $bg_image.height;
                  $wrapper.parent().attr('data-image-height',$bg_image_height);
              });
          }
      });
      $('.tdf-featured-media.featured-image .imgLiquid_bgSize').each(function(){
          var $wrapper = $(this).children('img');
          var $bg_image_url = $wrapper.attr('src');
          if(typeof $bg_image_url !== 'undefined'){
              var $bg_image = new Image();
              $bg_image.src = $bg_image_url;
              $($bg_image).on('load',function(){
                  var $bg_image_height = $bg_image.height;
                  $wrapper.parent().attr('data-image-height',$bg_image_height);
              });
          }
      });        
  }
  
  function init_reposition_portfolio_2_parallax_bg(scrolled){
    
      var $window = $(window).outerHeight(true);
      var $slide = $('.page-template-portfolio-2.project-content-open .site-content > .slides > .slide.active');
      var $content = $slide.find('.inner-wrap > .content');
      var $scroll_tools = $content.children('.mCSB_scrollTools');
      var $scroll_dragger = $scroll_tools.find('.mCSB_dragger');
      var $height = $content.find('.mCSB_container').outerHeight(true);

      $content.find('.tds-section.is-parallax').each(function(){
          var $this = $(this);
          var $wrapper = $this.find('.tds-parallax');
          if(!$wrapper.hasClass('has-sequence')){
              var $speed = $wrapper.data('speed');
              if(typeof $speed === 'undefined'){
                  var $speed = 0;
              }
              var $image = $wrapper.children('img:eq(0)');
              var offset = $wrapper.offset();
              var offset_difference = offset.top / $speed;
              $image.css('top',(-offset_difference)+'px');
          }else{
              if(!$wrapper.find('textarea').length){
                  var $images = $wrapper.find('.sequence-frame img');
                  var $img_array = [];
                  $images.each(function(){
                      var $src = $(this).attr('src');
                      $img_array.push($src);
                      $('<img src="'+$src+'" style="min-width:100%;min-height:100%;position:absolute;z-index:1;" />').appendTo($wrapper);
                  });
                  $wrapper.children('.tds-section-content').remove();
                  $('<textarea style="display:none;">'+$img_array+'</textarea>').appendTo($wrapper);
              }
              $this.css('min-height',$window);
              $wrapper.css('min-height',$window);
              var admin_bar = $('#wpadminbar').outerHeight(true),
                  scrollbar_vertical = $scroll_tools.outerHeight(true),
                  dragger_offset = $scroll_dragger.offset(),
                  percentage = (100/scrollbar_vertical)*dragger_offset.top,
                  total_scrolled = ($height/100)*percentage,
                  offset = $this.offset(),
                  parralax = offset.top-admin_bar;
              if((offset.top < $window)){
                  var $images = $wrapper.children('textarea').val();
                  var $images = $images.split(",");
                  var $total = $images.length;
                  var $percentage = (100 / (-(-$window) / offset.top));
                  var $percentage = (100 - $percentage) / 2;
                  var $steps = 100 / $total;
                  if($percentage<0) $percentage = 0;
                  if($percentage>100) $percentage = 100;
                  var $start = $steps;
                  var $counter = 0;
                  while($start < $percentage){
                      $counter++;
                      $start = $steps*$counter;    
                  }
                  if($percentage < $steps){
                      $counter = 1;
                  }
                  $counter = $counter-1;
                  $this.css('position','relative');
                  $wrapper.css('background-position','').css('position','absolute').css('top',-parralax + ((parralax/100)*40)).css('height','100%').css('width','100%').css('background-image','');
                  $wrapper.find('img').css('min-width','100%').css('min-height','100%').css('z-index','1');
                  $wrapper.find('img:eq('+$counter+')').css('z-index','2');   
              }
          }
      });
  }
  
  function init_reposition_parallax_bg(scrolled){
      var $window = $(window).outerHeight(true);
      var $scroll_tools = $('body').children('.mCSB_scrollTools');
      var $scroll_dragger = $scroll_tools.find('.mCSB_dragger');
      var $height = $('body').find('.mCSB_container').outerHeight(true);
      $('.tds-section.is-parallax').each(function(){
          var $this = $(this);
          var $wrapper = $this.find('.tds-parallax');
          if(!$wrapper.hasClass('has-sequence')){
              var $speed = $wrapper.data('speed');
              if(typeof $speed === 'undefined'){
                  var $speed = 0;
              }
              var $image = $wrapper.children('img:eq(0)');
              var offset = $wrapper.offset();
              var offset_top = offset.top;
              if(!$('body').hasClass('mCustomScrollbar')){
                  var offset_top = offset.top-scrolled;
              }
              var offset_difference = offset_top / $speed;
              $image.css('top',(-offset_difference)+'px');
          }else{
              if(!$wrapper.find('textarea').length){
                  var $images = $wrapper.find('.sequence-frame img');
                  var $img_array = [];
                  $images.each(function(){
                      var $src = $(this).attr('src');
                      $img_array.push($src);
                      $('<img src="'+$src+'" style="min-width:100%;min-height:100%;position:absolute;z-index:1;" />').appendTo($wrapper);
                  });
                  $wrapper.children('.tds-section-content').remove();
                  $('<textarea style="display:none;">'+$img_array+'</textarea>').appendTo($wrapper);
              }
              $this.css('min-height',$window);
              $wrapper.css('min-height',$window);
              var admin_bar = $('#wpadminbar').outerHeight(true),
                  offset = $this.offset(),
                  parralax = offset.top-admin_bar,
                  offset_top = offset.top;
              if(!$('body').hasClass('mCustomScrollbar')){
                  var offset_top = offset_top-scrolled;
                  var parralax = offset_top-admin_bar;
              }
              if((offset_top < $window)){
                  var $images = $wrapper.children('textarea').val();
                  var $images = $images.split(",");
                  var $total = $images.length;
                  var $percentage = (100 / (-(-$window) / offset_top));
                  var $percentage = (100 - $percentage) / 2;
                  var $steps = 100 / $total;
                  if($percentage<0) $percentage = 0;
                  if($percentage>100) $percentage = 100;
                  var $start = $steps;
                  var $counter = 0;
                  while($start < $percentage){
                      $counter++;
                      $start = $steps*$counter;    
                  }
                  if($percentage < $steps){
                      $counter = 1;
                  }
                  $counter = $counter-1;
                  $this.css('position','relative');
                  $wrapper.css('background-position','').css('position','absolute').css('top',-parralax + ((parralax/100)*40)).css('height','100%').css('width','100%').css('background-image','');
                  $wrapper.find('img').css('min-width','100%').css('min-height','100%').css('z-index','1');
                  $wrapper.find('img:eq('+$counter+')').css('z-index','2');   
              }
          }
      });
  }
  
  function init_animated_elements(scrolled){
      var height = $('#off-canvas-wrap').height(),
          $window = $('body').outerHeight(true);

      var $window_height = $(window).height();
      $('[class^="animation"]:not(".cssanimations"), [class*="animation"]:not(".cssanimations")').each(function (index, element) {
          var $offset = $(this).offset();
          var $animation = $(this).data('animation');
          if(($offset.top - scrolled) < $window_height){
              $(this).delay(300).removeClass("fadeOut");
              $(this).addClass($animation);
      
          }
      });
    
      $(".tdf-counter").each(function (index, element) {
          var element = $(element),
              offset = element.offset();
          if((offset.top+(element.outerHeight(true)/2))-$window < 0){
                  if (!$(this).hasClass("appeared")) {
                  var t = $(this).data("perc");
                  $(this).find(".tdf-count").countTo({
                      from: 0,
                      to: t,
                      speed: 2e3,
                      refreshInterval: 100
                  });
                  $(this).addClass("appeared");
              }
          }
      });
      
      $('.progress-barblk').each(function (index, element) {
          if(!$(element).hasClass('animated')){
              var element = $(element),
                  offset = element.offset();
                  $(element).find('.main-pbar').remove();
                  var $percent = $(element).data('percent');
                  var $progressBarWidth = $percent * $(element).width() / 100;
                  $('<div class="main-pbar"></div>').appendTo($(element).children('div:eq(1)'));
              if((offset.top+(element.outerHeight(true)/2))-$window < 0){
                  $(element).find('.main-pbar').animate({ width: $progressBarWidth }, 3000);
                  $(element).addClass('animated');
              }
          }
      });
      
      if($('body').hasClass('page-template-portfolio-2')){
          if ( $.isFunction($.fn.initSplitlayout) ) {
              $('.tds-splitlayout').initSplitlayout({wrapper: $('.page-template-portfolio-2 .site-content > .slides > .slide.active > .inner-wrap > .content')});
          }
      }
      
  }
  
  /*
  function init_masthead_position(scrolled){
      var $height = $('#off-canvas-wrap').outerHeight(true);
      var $window = $(window).outerHeight(true);
      var $masthead = $('#masthead').outerHeight(true);
      if($height > ($window+($masthead*2))){
          if(scrolled > 0){
              $("#masthead").addClass("animated fadeInDown fixed");
          }
      }
  }
  
  function init_masthead_position_static(scrolled){
      if(scrolled < 250){
          $('#masthead').removeClass('fixed').removeClass('animated').removeClass('fadeInDown').css('margin-top',-$('#masthead').outerHeight(true));
          $('#masthead').animate({
              marginTop: '0px',
          }, 500, function() {
              $('#masthead').css('margin-top','');
          });
      }
  }
  */
  
  function reposition_offcanvas_toggle(){
      var $height = $('#masthead').outerHeight(true);
      
      var $button = $('.main-navigation .right-off-canvas-toggle').parents('ul:eq(0)');
      var $button_height = $button.outerHeight(true);
      $button.css('top',(($height - $button_height) / 2));
  
      var $button = $('.right-off-canvas-menu .right-off-canvas-toggle');
      var $button_height = $button.outerHeight(true);
      $button.css('top',(($height - $button_height) / 2));
  }
  $('.toggle-overlay, .main-navigation .right-off-canvas-toggle, .menu-item-object-icon .flaticon-bag45, .menu-item-object-icon .flaticon-user146').on('click',function(){
      update_offset_height_after_menu_expanding(false);
      init_toggle_button_position();
      if(!$('body').hasClass('scrolling-to-top')){
          $("body").addClass('scrolling-to-top')
          $("body").mCustomScrollbar('scrollTo','top');
          $('html,body').animate({
              scrollTop: 0
          }, 1000);
      }
  });
  $('.menu-item-object-icon > span').on('click',function(){
      $('#off-canvas-wrap').removeClass('offcanvas-overlap-menu');
      $('#off-canvas-wrap').removeClass('offcanvas-overlap-left');
  
      if($(this).hasClass('flaticon-user146')){
          $('#tdf-login-form').css('display','');
          $('#tdf-woo-cart').css('display','none');
          $('#off-canvas-wrap').addClass('offcanvas-overlap-right');
      }
      if($(this).hasClass('flaticon-bag45')){
          $('#tdf-woo-cart').css('display','');
          $('#tdf-login-form').css('display','none');
          $('#off-canvas-wrap').addClass('offcanvas-overlap-right');
      } 
      init_toggle_button_position();
  });

  $('.inner-wrap .right-off-canvas-menu .close-right-off-canvas').on('click',function(){
      update_offset_height_after_menu_expanding(true);
      $("body").mCustomScrollbar('scrollTo','top');
  $( "#right-off-canvas-menu" ).toggle( "slide" );
  }); 

  $('.right-off-canvas-toggle').on('click',function(){
      $( "#right-off-canvas-menu" ).show( "slow" );
  });	

  $(document).ready(function(){
      init_toggle_button_position();
      init_portfolio_2();
      var $doc = $(document);
      $doc.on('click', '.navigation-overlay .menu li',function(){
          if($(this).find('.toggle-dropdown').find(".fa").hasClass("fa-angle-down")){
              $(this).find('.toggle-dropdown').find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
              $(this).find(">.dropdown").show(300);
          }else{
              $(this).find('.toggle-dropdown').find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
              $(this).find(">.dropdown").hide(300);
          }
      });
      $doc.on('click', '.off-canvas-menu-wrap a',function(){
          var $parent = $(this).parent();
          if($parent.hasClass('has-submenu')){
              if($parent.hasClass("tdf-active")){
                  $parent.removeClass("tdf-active");
                  $parent.children(".right-submenu").hide(300);
              }else{
                  $parent.addClass("tdf-active");
                  $parent.children(".right-submenu").show(300);
              }
              setTimeout(function(){
                  update_offset_height_after_menu_expanding(false);
              }, 300);
              return false;
          }
      });
  
      $doc.on('click', '#main-menu-off-canvas .main-navigation a',function(){
          var $parent = $(this).parent();
          if($parent.hasClass('has-dropdown')){
              if($parent.hasClass("tdf-active")){
                  $parent.removeClass("tdf-active");
                  $parent.children(".dropdown").hide(300);
              }else{
                  $parent.addClass("tdf-active");
                  $parent.children(".dropdown").show(300);
              }
              setTimeout(function(){
                  update_offset_height_after_menu_expanding(false);
              }, 300);
      
      // alert('click2');
              return false;
          } else {
      
      if( window.location.hash || document.location.href.indexOf('#') > -1) {
        // If scroll to
          $("#off-canvas-wrap").removeClass('offcanvas-overlap-menu');
        $('#main-menu-off-canvas').remove();
        //location.reload();
        /* $('html, body').animate({
            scrollTop: 0
        }, 1000); */
      } 
    
    }
      });

      reposition_offcanvas_toggle();
  });
  $(window).load(function(){
      init_parallax_section_bg_heights();
      setTimeout(function(){
          init_intro_portfolio_2_animation();
      }, 200);
      var $window = $(window).width();
      if ($window <= 1024) {
          $("body").mCustomScrollbar("disable");
      } else {
          if(F4DSettings.smoothscroll!=1){
              $(window).scroll(function(){
                  var $scrolled = $(window).scrollTop();
                  init_update_to_top($scrolled);
                  init_animated_elements($scrolled);
                  //init_masthead_position($scrolled);
                  //init_masthead_position_static($scrolled);
                  init_reposition_parallax_bg($scrolled);
                  check_portfolio_offset($scrolled);
              });
              var $scroll_wrapper = $( "body" );
              $scroll_wrapper.scroll(function() {
                  var $scrolled = -$('#off-canvas-wrap').offset().top;
                  init_update_to_top($scrolled);
                  init_animated_elements($scrolled);
                  //init_masthead_position($scrolled);
                  //init_masthead_position_static($scrolled);
                  init_reposition_parallax_bg($scrolled);
                  check_portfolio_offset($scrolled);
              });
          }else{
              $("body").mCustomScrollbar({
                  theme: 'minimal-dark',
                  alwaysShowScrollbar: 0,
                  autoHideScrollbar: true,
                  mouseWheel: { 
                      scrollAmount: 230,
                      deltaFactor: 1,
                  },
                  callbacks: {
                      whileScrolling:function() {
                          init_update_to_top(-this.mcs.top);
                          init_animated_elements(-this.mcs.top);
                          //init_masthead_position(-this.mcs.top);
                          init_reposition_parallax_bg(-this.mcs.top);
                          check_portfolio_offset(this.mcs.topPct);
                      },
                      onScroll:function() {
                          if($('body').hasClass('scrolling-to-top')){
                              if(-this.mcs.top > 0){
                                  $("body").mCustomScrollbar('scrollTo','top');
                              }else{
                                  $('body').removeClass('scrolling-to-top');
                              }
                          }
                          //init_masthead_position_static(-this.mcs.top);
                      },
                      onTotalScroll:function() {
                      },
                  }
              });
          }
      }
  });
  $(window).on('load resize', function () {
      reposition_offcanvas_toggle();
      init_toggle_button_position();
  });    
  $('.toggle-overlay').on('click',function(){
      if(!$('#main-menu-off-canvas').length){    
          $('<aside id="main-menu-off-canvas"><span role="button" id="close-main-menu-off-canvas" class="close-main-menu-off-canvas"><span class="patty"></span></span></aside>').appendTo( "#off-canvas-wrap > .inner-wrap" );
          $(".main-navigation" ).clone().appendTo( "#main-menu-off-canvas" );
      }
      init_toggle_button_position();
      $('#off-canvas-wrap').attr('class','off-canvas-wrap offcanvas-overlap-menu');
  });
  function init_mobile_portfolio_2($method){
      var $window = $(window).outerHeight(true);
      var $masthead_height = $('#masthead').outerHeight(true);
      var $slide_height = $window - $masthead_height;
      $('.page-template-portfolio-2 .site-content > .slides').css('height',$slide_height);
      $('.page-template-portfolio-2 .site-content > .slides > .slide > .inner-wrap').css('height',$slide_height);
      $('.page-template-portfolio-2 .site-content > .slides > .slide.active').css('height',$slide_height);
  }
  $(window).on('load resize', function () {
      resize_submenu();
      setTimeout(function(){
          init_mobile_portfolio_2();
      }, 500);
      var $window = $(window).width();
      if ($window <= 1024) {
          init_animation_portfolio_2_content();    
      }
  });
  $(window).on('resize', function () {
      init_content_width_portfolio_2('resize');
  });
  $(window).on('load', function () {
      init_content_smoothscroll_portfolio_2()
  });
  function init_animation_portfolio_2_content(){
      $('[class^="animation"], [class*="animation"]').each(function (index, element) {
          var element = $(element),
              animation = element.data("animation");
              setTimeout(function(){
                  element.removeClass("fadeOut").addClass(animation);
              }, 500);
      });
  }
  $('.page-template-portfolio-2 .site-content > .slides > .slide > .inner-wrap > .content').on('scroll', function () {
      init_animation_portfolio_2_content();
  });
})(jQuery);

jQuery(document).ready(function ($) {
  
  var $doc = $(document);

  $doc.on('click','.tdf-shop-details .add_to_cart_button',function(){
      if($('.menu-item .flaticon-bag45 > strong').length==0){
          $('.menu-item .flaticon-bag45').html('<strong>1</strong>');
          var $total = 0;
      }else{   
          var $total = $('.menu-item .flaticon-bag45 > strong').text();
          if($total.length==0){
              $total = 0;
          }
      }
      var $quantity = $(this).data('quantity');
      var $new_quantity = (parseFloat($total) + parseFloat($quantity));
      $('.menu-item .flaticon-bag45 > strong').text($new_quantity);

      $.ajax({
          type: 'post',
          url: ajaxurl,
          data: {
              action: 'tdf_woo_shopping_basket',
          },
          success: function (data) {
              $('#tdf-woo-cart .tdf-shopping-basket').remove();
              $('#tdf-woo-cart #cart-contents').remove();
              $(data).appendTo('#tdf-woo-cart');
          },
          complete: function () {

          }
      });    
  });
  
  $("a").click(function() {
      var $this = $(this);
      if(typeof $this.attr('href') !== 'undefined'){
          if($this.attr('href') == "#top"){
              var elID=".entry-title";
              $this.parent('.mCustomScrollbar:eq(0)').mCustomScrollbar("scrollTo",elID);
          }else{ 
              if ($this.attr('href').indexOf("#") >= 0){
                  if($this.attr('href').length>1){
                      if($this.parent('.mCustomScrollbar:eq(0)').length){
                          $this.parent('.mCustomScrollbar:eq(0)').mCustomScrollbar("scrollTo",$this.attr('href'));
                      }else{
                          $('.content').animate({
                              scrollTop: $($this.attr('href')).offset().top
                          }, 2000);
                          $('html, body').animate({
                              scrollTop: $($this.attr('href')).offset().top
                          }, 2000);
                      }
                  }
              }
          }
      }
  });
  
  $('.toggle-overlay').on('click',function(){
      $('#off-canvas-wrap').removeClass('offcanvas-overlap-left');
      $('#off-canvas-wrap').addClass('offcanvas-overlap-menu');
  $('html, body').animate({
      scrollTop: 0
  }, 1000);
  
  
  });
  


  $('.main-navigation .right-off-canvas-toggle').on('click',function(){
      $('#off-canvas-wrap').removeClass('offcanvas-overlap-menu');
  });

/* $('#main-menu-off-canvas .main-navigation a[href^=#]').on('click',function(){
      
  if( window.location.hash || document.location.href.indexOf('#') > -1 || ) {
    // If scroll to
    $("#off-canvas-wrap").removeClass('offcanvas-overlap-menu');
    $('#main-menu-off-canvas').remove();
  
  } 
  
  $('a[href^=#]').click(function(e){
    
    $("#off-canvas-wrap").removeClass('offcanvas-overlap-menu');
    $('#main-menu-off-canvas').remove();
    
    });
    
  });  */
  
$('a[href^=#]').click(function(e){
    
    $("#off-canvas-wrap").removeClass('offcanvas-overlap-menu');
    $('#main-menu-off-canvas').remove();
    
});
    
    
  $doc.on('click','#close-main-menu-off-canvas',function(){
      $('#off-canvas-wrap').removeClass('offcanvas-overlap-menu');
      $('#main-menu-off-canvas').remove();
  });

  
  $('.scroll-top').on('click',function(){
      $("body").mCustomScrollbar('scrollTo','top');
  });
  
  $('.header-search .close-popup, .header-share .close-popup, .header-wpml .close-popup').on('click',function(){
      $('#masthead > .active').slideUp(400).removeClass('active');
      $('.menu-item-object-icon').removeClass('active');
  });
  
  $doc.on('click','.menu-item-object-icon .flaticon-magnifying-glass34, .menu-item-object-icon .flaticon-like51, .menu-item-object-icon .flaticon-earthglobe25',function(){
      var $this = $(this);
      var $parent = $(this).parent();
      if($('#masthead > .active').length){
          $('.menu-item-object-icon').removeClass('active');
          $('#masthead > .active').slideUp(400, function() {
              var $active_item = $('#masthead > .active');
              $active_item.removeClass('active');
              if($this.hasClass('flaticon-like51')){
                  if(!$active_item.hasClass('header-share')){
                      $parent.addClass('active');
                      $('.header-share').slideDown(400).addClass('active');
                  }
              }
              if($this.hasClass('flaticon-magnifying-glass34')){
                  if(!$active_item.hasClass('header-search')){
                      $parent.addClass('active');
                      $('.header-search').slideDown(400).addClass('active');
                  }
              }
              if($this.hasClass('flaticon-earthglobe25')){
                  if(!$active_item.hasClass('header-wpml')){
                      $parent.addClass('active');
                      $('.header-wpml').slideDown(400).addClass('active');
                  }
              }
          });
      }else{
          if($parent.hasClass('active')){
              $('#masthead > .active').slideUp(400).removeClass('active');
              $parent.removeClass('active');
          }else{
              $parent.addClass('active');
              if($this.hasClass('flaticon-like51')){
                  $('.header-share').slideDown(400).addClass('active');
              }
              if($this.hasClass('flaticon-magnifying-glass34')){
                  $('.header-search').slideDown(400).addClass('active');
              }
              if($this.hasClass('flaticon-earthglobe25')){
                  $('.header-wpml').slideDown(400).addClass('active');
              }
          }
      }
      setTimeout(function(){
          $('.header-search input').focus();
      }, 500); 
      
  });
  
  $('.header-share .social-share ul li').each(function(d, e){
      var $url = $(this).parent().data('url');
      var $title = $(this).parent().data('title');
      var $media = $(this).parent().data('media');
      
      var social_network = $(this).data("social-network"),
          window_url = "",
          width = 900,
          height = 500;
      switch (social_network) {
          case "facebook":
              window_url = "http://www.facebook.com/sharer/sharer.php?u=" + $url;
              break;
          case "twitter":
              window_url = "https://twitter.com/intent/tweet?url=" + $url + "&text=" + $title, 
              width = 650,
              height = 360;
              break;
          case "googleplus":
              window_url = "https://plus.google.com/share?url=" + $url;
              break;
          case "pinterest":
              window_url = "http://pinterest.com/pin/create/button?url=" + $url + "&media=" + $media + "&description=" + $title,
              width = 700,
              height = 300;
              break;
          case "linkedin":
              window_url = "http://www.linkedin.com/shareArticle?mini=true&url=" + $url + "&title=" + $title,
              width = 550,
              height = 550
      }
      $(this).on("click", function(e) {
          e.preventDefault(), 
          window.open(window_url, "", "toolbar=0, status=0, width=" + width + ", height=" + height)
      });
  });
 
  $('.comments-link > a').on('click',function(){
      var scrollbar_vertical = $('#mCSB_1_scrollbar_vertical').outerHeight(true),
          dragger_offset = $('#mCSB_1_dragger_vertical').offset(),
          height = $('#off-canvas-wrap').height(),
          percentage = (100/scrollbar_vertical)*dragger_offset.top,
          total_scrolled = (height/100)*percentage,
          offset = $('#comments').offset(),
          header = $('#masthead').outerHeight(true);
      if(!$('#masthead').hasClass('fixed')){
          header = header*2;
      }
      $('#masthead').addClass('fixed');
      $("body").mCustomScrollbar('scrollTo', total_scrolled+offset.top-header);
  });
  
  if(($('body').hasClass('single-post')) || 
     ($('body').hasClass('page-template-default')) || 
     ($('body').hasClass('page-template-full-width')) || 
     ($('body').hasClass('page-template-content-left')) ||
     ($('body').hasClass('page-template-content-right')) ||
     ($('body').hasClass('page-template-content-no-sidebar')) ||
     ($('body').hasClass('page-template-portfolio')) ||
     ($('body').hasClass('archive tag')) ||
     ($('body').hasClass('archive category'))
    ) {
      $('.unique-page-header').last().css('display','table');
  }
  if($('body').hasClass('page-template-portfolio')){
      $('.featured-image .page-header.unique-page-header .page-title-container .the-breadcrumbs').insertAfter( ".featured-image .page-header .page-title-container .page-title" );
  }
  
  $('.variations_form.cart *').on('change',function(){
      setTimeout(function(){
          $('.woocommerce-main-image').each(function(){
              var $image_link = $(this).attr('href');
              $(this).css('background-image', 'url(' + $image_link + ')');
          });
      }, 1);
  });
  
  $('.images.wc-no-lightbox .woocommerce-main-image').attr('href', '#');
  $('.images.wc-no-lightbox .woocommerce-main-image').on('click', function () {
      return false;
  });
  $('.images.wc-no-lightbox .thumbnails > a').on('click', function () {
      var $image_link = $(this).attr('href');
      $('.woocommerce-main-image').css('background-image', 'url(' + $image_link + ')');
      return false;
  });

  $('.td-quantity-button').on('click', function () {
      var $this = $(this);
      var $input = $this.parent().find('input');
      var $quantity = $input.val();
      var $new_quantity = 0;
      if ($this.hasClass('plus')) {
          var $new_quantity = parseFloat($quantity) + 1;
      } else {
          if ($quantity > 0) {
              var $new_quantity = parseFloat($quantity) - 1;
          }
      }
      $input.val($new_quantity);
  });

  function resize_sidebar(){    
      var $window = $(window).width();
      if ($window < 625) {
          $('#secondary').css('min-height', '');
      } else {
          var $height = $('#content').outerHeight(true);
          var $margin_top = 0;
          if($('#secondary').length!=0){
              var $margin_top = $('#secondary').css('margin-top').replace("px", "");
          }
          $('#secondary').css('min-height', $height-$margin_top);
      }
  }
  
  function init_show_main_menu(){
      $('#masthead .header-wrap nav.main-navigation > ul > li').each(function(){
          if((!$(this).hasClass('menu-item-object-icon')) && (!$(this).hasClass('menu-item-object-hamburger'))){
              $(this).css('visibility','visible');
          }
      });
  }
  
  function init_remove_pre_load_state(){
      $('body').removeClass('pre-load');   
  }
  
  function init_min_height_content_if_footer(){
      if($('#site-footer').length){
          var $window = $(window).outerHeight(true);
          var $wrapper = $('#off-canvas-wrap').outerHeight(true);
          var $footer = $('#site-footer').outerHeight(true);
          var $content = $('#content').outerHeight(true);
          
          if($content + $footer < $wrapper){
              if($content+$footer < $window){
                 $('#content').css('min-height', $window-$footer);
              }
          }
      }
  }
  
  $('#primary *').on('click blur focus', function () {
      resize_sidebar();
  });


  $(window).on('load resize', function () {
      var $width = $(window).outerWidth(true);
      if($width<=1024){
          $('.woocommerce ul.products li.product > a').on('click',function(){
              return false;    
          });
      }
      $('.woocommerce > ul.products > li.product.type-product').each(function () {
          $(this).find('a > img.wp-post-image').css('display', '');
          var $height = $(this).outerWidth(true);
          $(this).children('a').css('height', $height).css('width', $height).css('background-image', 'url(' + $(this).find('a > img.wp-post-image').attr('src') + ')');
          $(this).find('a > img.wp-post-image').css('display', 'none');
      });
      $('#content-woocommerce > ul.products > li.product.type-product').each(function () {
          $(this).find('a > img.wp-post-image').css('display', '');
          var $height = $(this).outerWidth(true);
          $(this).children('a').css('height', $height).css('width', $height).css('background-image', 'url(' + $(this).find('a > img.wp-post-image').attr('src') + ')');
          $(this).find('a > img.wp-post-image').css('display', 'none');
      });
      if($('#content #primary #main article:eq(0) .entry-content:eq(0)').find('.rev_slider_wrapper').length){
          if(!$('#masthead').hasClass('fix-header')){
              var $header = $("#masthead.fix-header").height();
              $('#content').css('margin-top',-$header);           
          }else{
              $('#content').css('margin-top',0);           
          }

      }
      init_min_height_content_if_footer();
      resize_sidebar();
      init_show_main_menu();
      init_remove_pre_load_state();
  });

  window.setInterval(function(){
      resize_sidebar();
      init_min_height_content_if_footer();
  }, 100);

});