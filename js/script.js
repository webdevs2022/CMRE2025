(function ($) {
  "use strict";

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(500);
    }
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-to-top");
      if (windowpos >= 15) {
        siteHeader.addClass("fixed-header");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.fadeOut(300);
      }
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $(
      ".main-header .nav-outer .main-menu .navigation"
    ).html();
    $(".mobile-menu").append(
      '<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>'
    );
    $(".mobile-menu .navigation").append(mobileMenuContent);
    $(".sticky-header .navigation").append(mobileMenuContent);
    $(".mobile-menu .close-btn").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });
    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).prev("ul").slideToggle(500);
    });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }

  //Shedule Block
  if ($(".schedule-block").length) {
    $(".schedule-block.active").find(".lower-content").slideDown();

    $(".schedule-block .toggle-btn").on("click", function () {
      $(this).parents(".schedule-block").toggleClass("active");
      $(this)
        .parents(".schedule-block")
        .find(".lower-content")
        .slideToggle(400);
      $(this)
        .parents(".schedule-block")
        .siblings()
        .find(".lower-content")
        .slideUp(400);
      $(this).parents(".schedule-block").siblings().removeClass("active");
    });
  }

  //Last Date
  if ($(".date-btn").length) {
    var last_date = $(".date-btn").attr("data-last-date");
    $(".date-btn").on("click", function () {
      $(this).html(last_date);
    });
  }

  //Search Popup
  if ($("#search-popup").length) {
    //Show Popup
    $(".search-box-btn").on("click", function () {
      $("#search-popup").addClass("popup-visible");
    });
    $(document).keydown(function (e) {
      if (e.keyCode == 27) {
        $("#search-popup").removeClass("popup-visible");
      }
    });
    //Hide Popup
    $(".close-search,.search-popup .overlay-layer").on("click", function () {
      $("#search-popup").removeClass("popup-visible");
    });
  }

  // Banner Carousel / Owl Carousel
  if ($(".banner-carousel").length) {
    $(".banner-carousel").owlCarousel({
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 5000,
      navText: [
        '<span class="fa fa-angle-left">',
        '<span class="fa fa-angle-right">',
      ],
      lazyLoad: false,
      rewind: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
      onInitialized: function () {
        $(".banner-carousel img").each(function () {
          const src = $(this).attr("src");
          const img = new Image();
          img.src = src;
        });
      },
    });
  }

  // Add window scroll handler to refresh carousel when scrolling back to top
  $(window).on("scroll", function () {
    if ($(window).scrollTop() < 300) {
      if ($(".banner-carousel").length) {
        $(".banner-carousel").trigger("refresh.owl.carousel");
      }
    }
  });

  // Single Item Carousel
  if ($(".single-item-carousel").length) {
    $(".single-item-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: true,
      navText: [
        '<span class="arrow_carrot-left"></span>',
        '<span class="arrow_carrot-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }

  // Gallery  Carousel
  if ($(".gallery-carousel").length) {
    $(".gallery-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: true,
      navText: [
        '<span class="arrow_carrot-left"></span>',
        '<span class="arrow_carrot-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        767: {
          items: 3,
        },
        800: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  $(document).on("click", ".pagination .page-link", function (event) {
    event.preventDefault(); // Prevent page reload
    let page = $(this).data("page"); // Get page number from "data-page" attribute

    // Fetch gallery data using AJAX
    $.ajax({
      url: "/gallery?page=" + page, // Replace with your endpoint
      type: "GET",
      success: function (data) {
        $("#gallery-section").html(data); // Update gallery content
      },
      error: function () {
        console.error("Failed to load gallery content.");
      },
    });
  });

  //Clients Carousel
  if ($(".sponsors-carousel").length) {
    $(".sponsors-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      lazyLoad: true,
      smartSpeed: 700,
      autoplay: true,
      navText: [
        '<span class="la la-angle-left"></span>',
        '<span class="la la-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1024: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  //Parallax Scene for Icons
  if ($(".parallax-scene-1").length) {
    var scene = $(".parallax-scene-1").get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($(".parallax-scene-2").length) {
    var scene = $(".parallax-scene-2").get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($(".parallax-scene-3").length) {
    var scene = $(".parallax-scene-3").get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($(".parallax-scene-4").length) {
    var scene = $(".parallax-scene-4").get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($(".parallax-scene-5").length) {
    var scene = $(".parallax-scene-5").get(0);
    var parallaxInstance = new Parallax(scene);
  }

  //Masonary
  function enableMasonry() {
    if ($(".masonry-items-container").length) {
      var winDow = $(window);
      // Needed variables
      var $container = $(".masonry-items-container");

      $container.isotope({
        itemSelector: ".masonry-item",
        masonry: {
          columnWidth: 1,
        },
        animationOptions: {
          duration: 500,
          easing: "linear",
        },
      });

      winDow.on("resize", function () {
        $container.isotope({
          itemSelector: ".masonry-item",
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false,
          },
        });
      });
    }
  }

  enableMasonry();

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate(
            {
              countNum: n,
            },
            {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      { accY: 0 }
    );
  }

  //Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab animated fadeIn");
        $(target).fadeIn(300);
        $(target).addClass("active-tab animated fadeIn");
      }
    });
  }

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).hasClass("active") !== true) {
        $(outerBox).find(".accordion .acc-btn").removeClass("active ");
      }

      if ($(this).next(".acc-content").is(":visible")) {
        return false;
      } else {
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

  //Event Countdown Timer
  if ($(".time-countdown").length) {
    $(".time-countdown").each(function () {
      var $this = $(this),
        finalDate = $(this).data("countdown");
      $this.countdown(finalDate, function (event) {
        var $this = $(this).html(
          event.strftime(
            "" +
              '<div class="counter-column"><span class="count">%D</span>Days</div> ' +
              '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' +
              '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' +
              '<div class="counter-column"><span class="count">%S</span>Second</div>'
          )
        );
      });
    });
  }

  if ($(".cs-countdown").length) {
    $(function () {
      $("[data-countdown]").each(function () {
        var $this = $(this),
          finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
          $this.html(event.strftime("%D days %H:%M:%S"));
        });
      });
    });

    $(".cs-countdown")
      .countdown("")
      .on("update.countdown", function (event) {
        var $this = $(this).html(
          event.strftime(
            "<div><span>%m</span><h6>Months</h6></div> <div><span>%D</span><h6>days</h6></div> <div><span>%H</span><h6>Hours</h6></div> <div><span>%M</span><h6>Minutes</h6></div> <div><span>%S</span><h6>Seconds</h6></div>"
          )
        );
      });
  }

  //LightBox / Fancybox
  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: {
        media: {},
      },
    });
  }

  //Contact Form Validation
  if ($("#contact-form").length) {
    $("#contact-form").validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        message: {
          required: true,
        },
      },
    });
  }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1500
      );
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card-container .card");
    const loadMoreBtn = document.getElementById("load-more-btn");
    const chunkSize = 2000;
    let visibleCount = 2000;

    // 🔹 Pehle sirf 6 cards show karo (fade-in animation ke sath)
    function showInitialCards() {
      cards.forEach((card, index) => {
        if (index < visibleCount) {
          card.style.display = "flex";
          card.style.opacity = "0";
          card.style.transform = "translateY(30px)";
          card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          card.style.transitionDelay = `${index * 0.1}s`;
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 100 * index);
        } else {
          card.style.display = "none";
        }
      });
      updateButtonPosition();
    }

    showInitialCards();

    // 🔹 Button ko last card ke neeche center me rakhna
    function updateButtonPosition() {
      setTimeout(() => {
        let lastVisibleCard = cards[visibleCount - 1];
        if (lastVisibleCard) {
          loadMoreBtn.style.position = "relative";
          loadMoreBtn.style.margin = "20px auto"; // Center me laane ke liye
          loadMoreBtn.style.display = "block";
          loadMoreBtn.style.textAlign = "center";
        }
      }, 300);
    }

    // 🔹 "Load More" button click event with animation effect
    loadMoreBtn.addEventListener("click", function () {
      if (visibleCount >= cards.length) return;

      loadMoreBtn.classList.add("loading"); // Button pe loading effect add karna
      loadMoreBtn.innerHTML = ""; // Text hatake animation show karna

      setTimeout(() => {
        let hiddenCards = 0;

        for (
          let i = visibleCount;
          i < visibleCount + chunkSize && i < cards.length;
          i++
        ) {
          cards[i].style.display = "inherit";
          cards[i].style.opacity = "0";
          cards[i].style.transform = "translateY(30px)";
          cards[i].style.transition = "opacity 0.6s ease, transform 0.6s ease";
          cards[i].style.transitionDelay = `${hiddenCards * 0.1}s`;
          setTimeout(() => {
            cards[i].style.opacity = "1";
            cards[i].style.transform = "translateY(0)";
          }, 200 * hiddenCards);

          hiddenCards++;
        }

        visibleCount += hiddenCards;

        loadMoreBtn.classList.remove("loading"); // Loading effect remove karega
        loadMoreBtn.innerHTML = "Load More"; // Button ka text wapas lane ke liye

        // 🔹 Agar saare cards show ho gaye to button chhupa do
        if (visibleCount >= cards.length) {
          setTimeout(() => {
            loadMoreBtn.style.display = "none";
          }, 500);
        } else {
          updateButtonPosition();
        }
      }, 1200);
    });
  });

  // Registration Cards Animation
  function initRegistrationCards() {
    if ($(".registration-card").length) {
      $(".registration-card")
        .on("mouseenter", function () {
          $(this).addClass("active");
        })
        .on("mouseleave", function () {
          $(this).removeClass("active");
        });
    }
  }

  /* ==========================================================================
	   When document is Scrollig, do
	   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
  });

  /* ==========================================================================
	   When document is loading, do
	   ========================================================================== */

  $(window).on("load", function () {
    handlePreloader();
    if ($("body.page-loaded").length) {
      $("body").addClass("page-done");
    }
    enableMasonry();
    showInitialCards();
  });

  /* ==========================================================================
	   When document is Resized
	   ========================================================================== */

  $(window).on("resize", function () {
    updateButtonPosition();
  });

  $(document).ready(function () {
    initFancyBox();
    initRegistrationCards();

    // Initialize functions
    handlePreloader();

    // Refresh banner carousel when document is ready
    if ($(".banner-carousel").length) {
      // Force refresh on document ready
      setTimeout(function () {
        $(".banner-carousel").trigger("refresh.owl.carousel");
      }, 500);
    }

    // Handle window resize to refresh carousel
    $(window).on("resize", function () {
      if ($(".banner-carousel").length) {
        $(".banner-carousel").trigger("refresh.owl.carousel");
      }
    });

    // When user scrolls, check if banner is visible
    var isScrolling;
    $(window).on("scroll", function () {
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function () {
        // Check if banner is in viewport
        var bannerTop = $(".banner-section").offset().top;
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();

        // If banner is in or near viewport
        if (
          scrollPosition <= bannerTop + 300 &&
          scrollPosition + windowHeight >= bannerTop
        ) {
          $(".banner-carousel").trigger("refresh.owl.carousel");
        }
      }, 100);
    });
  });

  // Committee section toggle functionality
  function toggleSection(id) {
    var content = document.getElementById(id);
    var headers = document.querySelectorAll(".category-header");
    var contents = document.querySelectorAll(".category-content");

    // Toggle the clicked section
    content.classList.toggle("active");

    // Update the toggle icon for all headers
    headers.forEach(function (header) {
      if (header.getAttribute("onclick").includes(id)) {
        var icon = header.querySelector(".toggle-icon");
        if (content.classList.contains("active")) {
          icon.textContent = "-";
          header.classList.add("active");
        } else {
          icon.textContent = "+";
          header.classList.remove("active");
        }
      }
    });
  }
})(window.jQuery);
