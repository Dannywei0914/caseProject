function mainProgressBar(e, t) {
  {
      var a = "#" + e.replace(/ /g, ""),
          i = t * jQuery(a).width() / 100,
          n = jQuery(a),
          s = jQuery(window).height(),
          o = n.offset();
      n.attr("data-animation")
  }
  o.top <= s && jQuery(a).find("div.main-pbar").animate({
      width: i
  }, 3e3), jQuery(".title-pblk").hide().fadeIn("slow")
}

function mpb_updateScroll(e, t) {
  {
      var a = "#" + e.replace(/ /g, ""),
          i = t * jQuery(a).width() / 100,
          n = jQuery(a),
          s = jQuery(window).height(),
          o = n.offset();
      n.attr("data-animation")
  }
  s > o.top - jQuery(window).scrollTop() && jQuery(a).find("div.main-pbar").animate({
      width: i
  }, 3e3)
}

function adjustIconGridHeight() {
  jQuery(".cbp-ig-grid").each(function () {
      var e = 100;
      jQuery("> li > a", this).each(function () {
          jQuery(this).height() > e && (e = jQuery(this).height())
      }), jQuery("> li > a", this).each(function () {
          jQuery(this).css({
              "min-height": e
          })
      })
  })
}

function onPictureChanged() {
  jQuery(".pp_social").append('<g:plusone data-action="share" href="' + encodeURIComponent(location.href.replace(location.hash, "")) + '" width="160px" ></g:plusone>'), jQuery(".pp_social").append("<script type='text/javascript'> 		(function() { 		var po = document.createElement('script'); 		po.type = 'text/javascript'; 		po.async = true; 		po.src = 'https://apis.google.com/js/plusone.js'; 		var s = document.getElementsByTagName('script')[0]; 		s.parentNode.insertBefore(po, s); 		})(); </script>")
}

function textRotate(e, t, a) {
  e = e || "", t = t || 6e3, a = a || 3e3;
  var i = jQuery(e + "> .current");
  0 == i.next().length ? i.removeClass("current").fadeOut(a, function () {
      jQuery(e + " .tds-textitem:first").addClass("current").fadeIn(a)
  }) : i.removeClass("current").fadeOut(a, function () {
      i.next().addClass("current").fadeIn(a)
  })
}

function setupRotator(e, t, a) {
  e = e || "", t = t || 1e4, a = a || 3e3, jQuery(e + " .tds-textitem").length > 1 && (jQuery(e + " .tds-textitem:first").addClass("current").fadeIn(a), setInterval(function () {
      textRotate(e, t, a)
  }, t))
}

function adjustcaptionHover() {
  jQuery(".tds-captionhover .icon-blk").each(function () {
      var e = jQuery(this).height(),
          t = jQuery(this).width(),
          a = jQuery("i", this).height(),
          i = 0,
          n = 0;
      e != t ? (jQuery(this).css({
          height: t
      }), i = t) : vartblkH = e, i > a && (n = (i - a) / 2, jQuery("i", this).css({
          marginTop: n
      }))
  })
}

function toggledivider() {
  jQuery(".tds-toggledivider").each(function () {
      jQuery(".tds-toggledivider-title", this).click(function () {
          var e = jQuery(this).siblings(".tds-toggledivider-content");
          e.is(":visible") ? jQuery(e).slideToggle("normal", function () {
              jQuery(e).css("opacity", 0)
          }) : jQuery(e).slideToggle("normal", function () {
              jQuery(e).fadeTo("normal", 1)
          }), jQuery("i", this).each(function () {
              jQuery(this).hasClass("active") ? (jQuery(this).removeClass("active"), jQuery(this).removeClass("fa-angle-down"), jQuery(this).addClass("fa-angle-up")) : (jQuery(this).addClass("active"), jQuery(this).removeClass("fa-angle-up"), jQuery(this).addClass("fa-angle-down"))
          })
      })
  })
}

function adjustPostThumbnail() {
  jQuery(".tds_postWidget_posts").each(function () {
      var e = jQuery(this).width();
      400 > e && (jQuery(" li img.medium", this).addClass("tds-fullwidth"), jQuery(" li img.thumbnail", this).addClass("tds-35pw"))
  })
}

function scrollToSection() {
  headH = 0, "fixed" == jQuery("#header").css("position") && (headH = jQuery("#header").outerHeight());
  var e = headH + jQuery("#wpadminbar").outerHeight();
  jQuery("a[href*=#]:not([href=#])").each(function () {
      jQuery(this).click(function () {
          if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
              var t = jQuery(this.hash);
              t = t.length ? t : jQuery("[name=" + this.hash.slice(1) + "]"), t.length && (jQuery("html,body").animate({
                  scrollTop: t.offset().top - e
              }, 1e3), !1)
          }
      })
  })
}

function scrollToSectionOnLoad() {
  var e = window.location.hash,
      t = 0;
  "fixed" == jQuery("#header").css("position") && (t = jQuery("#header").outerHeight());
  var a = t + jQuery("#wpadminbar").outerHeight(),
      i = "",
      n = "";
  if (e.length) {
      var s = e.replace("#", "");
      if (n = "#" + s, i = jQuery(n), jQuery(this).scrollTop(0), i.length) return jQuery("html,body").animate({
          scrollTop: i.offset().top - a
      }, 1e3), !1
  }
}

function transferStylesToHead() {
  jQuery(".tds-styleblk style").each(function () {
      jQuery(this).appendTo("head")
  }), jQuery(".tds-styleblk").each(function () {
      jQuery(this).remove()
  })
}! function ($) {
  "use strict";

  function init_animation() {
      var $window_height = $(window).height();
      var $scrolled = $(window).scrollTop();
      $('[class^="animation"], [class*="animation"]').each(function () {
          var $offset = $(this).offset();
          var $animation = $(this).data('animation');
          if(($offset.top - $scrolled) < $window_height){
              $(this).delay(300).removeClass("fadeOut");
              $(this).addClass($animation);
          }
      });
  }
  $(window).scroll(init_animation);
  
  $(document).ready(function () {
      $('[class^="animation"], [class*="animation"]').each(function () {
          $(this).addClass("animated fadeOut")
      });
      init_animation();
  });
  
  $(window).load(function () {
      init_animation();
  });
  
  /*
  function t() {
      e('[class^="animation"], [class*="animation"]').each(function (t, a) {
          var a = e(a),
              i = e(window).height(),
              n = a.offset(),
              s = a.data("animation");
          i > n.top - e(window).scrollTop() && (a.delay(300).removeClass("fadeOut"), a.addClass(s))
      })
  }
  e(document).ready(function () {
      e('[class^="animation"], [class*="animation"]').each(function (t, a) {
          a = e(a), a.addClass("animated fadeOut")
      })
  }), e(window).load(function () {
      e('[class^="animation"], [class*="animation"]').each(function (t, a) {
          var a = e(a),
              i = e(window).height(),
              n = a.offset(),
              s = a.data("animation");
          n.top <= i && (a.delay(300).removeClass("fadeOut"), a.addClass(s))
      })
  }), e(window).scroll(t)
  */
  
}(jQuery), jQuery(document).ready(function () {
  jQuery(".tds-tabs").each(function () {
      {
          var e = jQuery(this),
              t = jQuery(".titles", e),
              a = jQuery(".content", e);
          e.width()
      }
      jQuery(".tds-tab-title", this).each(function (i) {
          var n = jQuery(this),
              s = n.next();
          n.detach(), t.append(n), s.detach(), a.append(s), i > 0 ? s.hide() : n.addClass("active"), n.click(function () {
              "none" === s.css("display") && (e.find(".tds-tab:visible").slideUp(200), t.find(".active").removeClass("active"), s.slideDown(200), n.addClass("active"))
          })
      })
  }), jQuery(".tds-tabs.left .tds-tab-title").each(function () {
      var e = jQuery(this);
      e.append('<i class="fa fa-angle-right tds-arrow"></i> ')
  }), jQuery(".tds-tabs.right .tds-tab-title").each(function () {
      var e = jQuery(this);
      e.prepend('<i class="fa fa-angle-left tds-arrow"></i> ')
  }), jQuery(".tds-toggle > li > div.toggle-header").each(function (e, t) {
      t = jQuery(t);
      var a = t.siblings("div.content"),
          i = t.find("span.arrow"),
          n = t.find(".icon");
      i.css("top", t.outerHeight(!0) / 2 - i.outerHeight(!0) / 2 + "px"), t.bind("mouseenter", function () {
          i.stop(!0, !0).animate({
              right: "-5px"
          }, 200)
      }), t.bind("mouseleave", function () {
          i.stop(!0, !0).animate({
              right: "5px"
          }, 200)
      }), t.bind("click", function () {
          a.hasClass("visible") ? (a.stop(!0, !0).slideUp(300), a.removeClass("visible"), n.removeClass("fa-minus"), n.addClass("fa-plus"), n.removeClass("active")) : (a.stop(!0, !0).slideDown(300), a.addClass("visible"), n.removeClass("fa-plus"), n.addClass("active"), n.addClass("fa-minus"))
      })
  }), jQuery(".tds-divider.totop > a.totop").bind("click", function () {
      return jQuery("html, body").animate({
          scrollTop: 0
      }, 300), !1
  }), adjustIconGridHeight(), adjustcaptionHover(), toggledivider(), adjustPostThumbnail(), scrollToSection(), transferStylesToHead()
}), jQuery(window).load(function () {
  scrollToSectionOnLoad()
}), jQuery(document).ready(function (e) {
  var t = e(document);
  t.on("click", ".tdf-popup", function () {
      var t = e(this).attr("id");
      e("#" + t + "-popup").appendTo("body"), setTimeout(function () {
          e("#" + t + "-popup").addClass("active")
      }, 10)
  }), t.on("click", ".tdf-popup-close", function () {
      var t = e(this).parent(),
          a = t.attr("id"),
          a = a.replace(/-popup/g, ""),
          a = a.replace(/tdf-/g, "");
      t.removeClass("active").insertAfter("#tdf-popup-" + a)
  })
});