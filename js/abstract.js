/**
 * CMRE 2025 - Abstract Page JavaScript
 */

document.addEventListener("DOMContentLoaded", function () {
  // Elegant tab implementation
  function initTabs() {
    const tabButtons = document.querySelectorAll(".structure-tab-btn");
    const tabPanes = document.querySelectorAll(".structure-tab-pane");

    if (!tabButtons.length || !tabPanes.length) {
      return;
    }

    // Initialize tab panes - show first one
    tabPanes.forEach((pane, index) => {
      if (index === 0) {
        pane.style.display = "block";
        pane.classList.add("active");
        setTimeout(() => {
          pane.style.opacity = "1";
          pane.style.transform = "translateY(0)";
        }, 50);
      } else {
        pane.style.display = "none";
        pane.classList.remove("active");
        pane.style.opacity = "0";
        pane.style.transform = "translateY(20px)";
      }
    });

    // Add click handlers to buttons
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-tab");
        const targetPane = document.getElementById(targetId);

        if (!targetPane) {
          return;
        }

        // Update active state for buttons
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        // Elegant transition between tab panes
        tabPanes.forEach((pane) => {
          if (pane === targetPane) {
            // First make it display block but invisible
            pane.style.display = "block";

            // Force a reflow to ensure transition works
            void pane.offsetWidth;

            // Now make it visible with a transition
            pane.classList.add("active");
            pane.style.opacity = "1";
            pane.style.transform = "translateY(0)";
          } else {
            // Hide other panes
            pane.classList.remove("active");
            pane.style.opacity = "0";
            pane.style.transform = "translateY(20px)";

            // After transition, set display none
            setTimeout(() => {
              if (!pane.classList.contains("active")) {
                pane.style.display = "none";
              }
            }, 300);
          }
        });
      });
    });

    // Add CSS for transitions
    const style = document.createElement("style");
    style.textContent = `
            .structure-tab-pane {
                transition: opacity 0.3s ease, transform 0.3s ease;
            }
        `;
    document.head.appendChild(style);
  }

  // Elegant scroll reveal animations
  const initScrollAnimations = function () {
    const sections = [
      ".abstract-section",
      ".abstract-hero",
      ".dates-list li",
      ".submission-list li",
      ".category-card",
      ".topic-item",
      ".guideline-item",
      ".structure-item",
      ".help-card",
      ".prize-card",
      ".closing-note",
      ".submit-cta",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-element");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      document.querySelectorAll(section).forEach((element, index) => {
        // Add staggered reveal by setting delay based on index
        element.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(element);
      });
    });
  };

  // Add elegant hover effects
  const addHoverEffects = function () {
    const cards = document.querySelectorAll(
      ".category-card, .topic-item, .structure-item, .help-card, .prize-card"
    );

    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px)";
        this.style.boxShadow = "0 15px 30px rgba(87, 66, 141, 0.15)";
      });

      card.addEventListener("mouseleave", function () {
        this.style.transform = "";
        this.style.boxShadow = "";
      });
    });

    // Special hover effect for prize cards
    const prizeCards = document.querySelectorAll(".prize-card");
    prizeCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        const icon = this.querySelector(".prize-icon");
        if (icon) {
          icon.style.transform = "scale(1.1) rotate(5deg)";
        }

        const title = this.querySelector(".prize-title");
        if (title) {
          title.style.color = "#57428D";
        }
      });

      card.addEventListener("mouseleave", function () {
        const icon = this.querySelector(".prize-icon");
        if (icon) {
          icon.style.transform = "";
        }

        const title = this.querySelector(".prize-title");
        if (title) {
          title.style.color = "";
        }
      });
    });
  };

  // Add smooth scrolling for anchor links
  const addSmoothScrolling = function () {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        if (this.getAttribute("href") !== "#") {
          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: "smooth",
            });
          }
        }
      });
    });
  };

  // Initialize everything
  function init() {
    // Add animation styles
    const style = document.createElement("style");
    style.textContent = `
            .reveal-element {
                animation: fadeIn 0.8s cubic-bezier(0.5, 0, 0, 1) forwards;
                opacity: 0;
                transform: translateY(30px);
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
    document.head.appendChild(style);

    initTabs();
    initScrollAnimations();
    addHoverEffects();
    addSmoothScrolling();
    initPrizesSection();
  }

  // Add enhanced animations for prizes section
  const initPrizesSection = function () {
    // Create dynamic confetti SVG for background if image is missing
    if (document.querySelector(".prizes-section")) {
      const confettiSVG = createConfettiSVG();

      // Add staggered animation to prize cards
      const prizeCards = document.querySelectorAll(".prize-card");
      prizeCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add("prize-card-animated");
      });

      // Add animated gradient to prize badges
      const badges = document.querySelectorAll(".prize-badge");
      badges.forEach((badge) => {
        badge.classList.add("animated-gradient");
      });
    }
  };

  // Create SVG confetti pattern programmatically
  function createConfettiSVG() {
    // If confetti.svg exists, return early
    const confettiImgCheck = new Image();
    confettiImgCheck.src = "images/icons/confetti.svg";

    confettiImgCheck.onerror = function () {
      // Create SVG fallback if image doesn't exist
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("width", "100");
      svg.setAttribute("height", "100");
      svg.setAttribute("viewBox", "0 0 100 100");

      // Create some confetti shapes
      const colors = ["#57428D", "#4965AD", "#6E8CD5", "#BF4AA8"];

      for (let i = 0; i < 20; i++) {
        const shape = document.createElementNS(
          svgNS,
          Math.random() > 0.5 ? "rect" : "circle"
        );
        const size = 2 + Math.random() * 8;

        if (shape.tagName === "rect") {
          shape.setAttribute("x", Math.random() * 100);
          shape.setAttribute("y", Math.random() * 100);
          shape.setAttribute("width", size);
          shape.setAttribute("height", size);
          shape.setAttribute(
            "transform",
            `rotate(${Math.random() * 360} ${
              parseFloat(shape.getAttribute("x")) + size / 2
            } ${parseFloat(shape.getAttribute("y")) + size / 2})`
          );
        } else {
          shape.setAttribute("cx", Math.random() * 100);
          shape.setAttribute("cy", Math.random() * 100);
          shape.setAttribute("r", size / 2);
        }

        shape.setAttribute(
          "fill",
          colors[Math.floor(Math.random() * colors.length)]
        );
        shape.setAttribute("opacity", 0.3 + Math.random() * 0.7);

        svg.appendChild(shape);
      }

      // Convert SVG to data URL
      const serializer = new XMLSerializer();
      const svgStr = serializer.serializeToString(svg);
      const svgURL =
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgStr);

      // Apply this SVG as fallback
      document
        .querySelectorAll(
          ".prizes-decoration-wrapper:before, .prizes-decoration-wrapper:after"
        )
        .forEach((el) => {
          el.style.backgroundImage = `url(%24%7bsvgURL%7d.html)`;
        });

      return svgURL;
    };

    return null;
  }

  // Start initialization
  init();
});
