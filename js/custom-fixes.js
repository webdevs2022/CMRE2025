// Custom fixes for CMRE 2025 website
(function ($) {
  "use strict";

  $(document).ready(function () {
    // Immediately apply header fixes
    fixHeaderStyles();

    // Function to apply all header styling fixes
    function fixHeaderStyles() {
      // Ensure the top-left section floats left
      $(".main-header .header-top .top-left").css({
        float: "left",
        display: "block",
        position: "relative",
        width: "auto",
        padding: "0",
        margin: "0",
        "text-align": "left",
      });

      // Ensure the pull-right section floats right
      $(".main-header .header-top .pull-right").css({
        float: "right",
        display: "block",
        position: "relative",
        width: "auto",
        padding: "0",
        margin: "0",
        "text-align": "right",
      });

      // Fix contact info display
      $(".header-contact-info").css({
        position: "relative",
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
        padding: "0",
        margin: "0",
      });

      $(".header-contact-info .call, .header-contact-info .email").css({
        position: "relative",
        padding: "10px 0",
        paddingLeft: "30px",
        marginRight: "30px",
        fontSize: "14px",
        lineHeight: "30px",
        color: "#ffffff",
        fontWeight: "400",
        display: "inline-block",
      });

      // Fix social links
      $(".main-header .header-top .social-links").css({
        position: "relative",
        display: "inline-block",
        margin: "0",
        marginLeft: "20px",
        padding: "0",
      });

      $(".main-header .header-top .social-links li").css({
        position: "relative",
        float: "left",
        marginRight: "18px",
        fontSize: "14px",
        lineHeight: "30px",
        padding: "10px 0",
        listStyleType: "none",
      });

      // Fix registration button
      $(".main-header .header-top .register-btn").css({
        position: "relative",
        display: "inline-block",
        padding: "10px 20px",
        marginLeft: "20px",
        backgroundColor: "#56418B",
        borderRadius: "5px",
        color: "#ffffff",
        fontSize: "14px",
        lineHeight: "20px",
        textDecoration: "none",
      });

      // Fix logo in header top
      $(".main-header .btn-logo").css({
        width: "85px",
        maxWidth: "85px",
        marginLeft: "25px",
        padding: "4.5px 0px",
        display: "inline-block",
        verticalAlign: "middle",
      });
    }

    // Override the headerStyle function from script.js
    window.headerStyle = function () {
      if ($(".main-header").length) {
        var windowpos = $(window).scrollTop();
        var siteHeader = $(".main-header");
        var scrollLink = $(".scroll-to-top");

        // Added more specific conditions to match live site behavior
        if (windowpos >= 100) {
          siteHeader.addClass("fixed-header");
          scrollLink.fadeIn(300);

          // Add specific styling when fixed
          $(".main-header .main-box").css({
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            "background-color": "#ffffff",
            "box-shadow": "0 0 30px rgba(0,0,0,0.10)",
          });

          // Adjust padding for header elements
          $(
            ".main-header .logo-box, .main-header .nav-outer, .main-header .outer-box"
          ).css("padding", "10px 0");
        } else {
          siteHeader.removeClass("fixed-header");
          scrollLink.fadeOut(300);

          // Reset styles
          $(".main-header .main-box").css({
            position: "relative",
            top: "auto",
            left: "auto",
            "box-shadow": "none",
          });

          // Reset padding
          $(
            ".main-header .logo-box, .main-header .nav-outer, .main-header .outer-box"
          ).css("padding", "20px 0");
        }

        // Re-apply header fixes to ensure they remain in place
        fixHeaderStyles();
      }
    };

    // Call the headerStyle function on page load
    headerStyle();

    // Override the scroll event to use our custom headerStyle
    $(window).on("scroll", function () {
      headerStyle();
    });

    // Ensure fixes are applied on window resize
    $(window).on("resize", function () {
      fixHeaderStyles();
      responsiveAdjustments();
    });

    // Hide the color switcher and search popup
    $(".color-palate, #search-popup").hide();

    // Fix any other styling issues with JavaScript
    $(".header-span, .header-span.style-two").css({
      height: "0",
      display: "none",
    });

    // Ensure navigation menu is horizontal
    $(".main-menu .navigation > li").css({
      float: "left",
      display: "block",
    });

    // Responsive adjustments
    function responsiveAdjustments() {
      if ($(window).width() <= 767) {
        $(
          ".main-header .header-top .top-left, .main-header .header-top .pull-right"
        ).css({
          width: "100%",
          float: "none",
          "text-align": "center",
        });

        $(".header-contact-info").css({
          justifyContent: "center",
          flexWrap: "wrap",
        });

        $(".header-contact-info .call, .header-contact-info .email").css({
          marginRight: "0",
          padding: "5px 0 5px 25px",
          width: "100%",
          textAlign: "center",
        });

        $(".main-header .header-top .social-links").css("marginLeft", "0");
        $(".main-header .header-top .social-links li").css(
          "marginRight",
          "10px"
        );
        $(".main-header .header-top .register-btn").css({
          marginLeft: "0",
          padding: "8px 15px",
        });
        $(".main-header .btn-logo").css("marginLeft", "10px");
      } else {
        // Reset for larger screens
        $(".main-header .header-top .top-left").css({
          width: "auto",
          float: "left",
          "text-align": "left",
        });

        $(".main-header .header-top .pull-right").css({
          width: "auto",
          float: "right",
          "text-align": "right",
        });

        $(".header-contact-info").css({
          justifyContent: "flex-start",
          flexWrap: "nowrap",
        });

        $(".header-contact-info .call, .header-contact-info .email").css({
          marginRight: "30px",
          padding: "10px 0 10px 30px",
          width: "auto",
          textAlign: "left",
        });

        $(".main-header .header-top .social-links").css("marginLeft", "20px");
        $(".main-header .header-top .social-links li").css(
          "marginRight",
          "18px"
        );
        $(".main-header .header-top .register-btn").css({
          marginLeft: "20px",
          padding: "10px 20px",
        });
        $(".main-header .btn-logo").css("marginLeft", "25px");
      }
    }

    // Initial call to responsive adjustments
    responsiveAdjustments();

    // Fix the image paths in the header contact info
    $(".header-contact-info img").each(function () {
      var src = $(this).attr("src");
      if (src && src.startsWith("index.php")) {
        // Remove the leading slash to make the path relative
        $(this).attr("src", src.substring(1));
      }
    });

    // Ensure the filter: invert(1) is applied to header icons
    $(".header-contact-info img").css({
      filter: "invert(1)",
      "-webkit-filter": "invert(1)",
      "-moz-filter": "invert(1)",
      "-o-filter": "invert(1)",
      "-ms-filter": "invert(1)",
    });

    // Ensure the contact info items are properly styled
    $(".header-contact-info .call, .header-contact-info .email").css({
      color: "#ffffff",
      "font-weight": "400",
    });
  });
})(jQuery);
