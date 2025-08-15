// Places to Visit - Main JavaScript File

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // First initialize visual components
  initMandalaAnimation();
  setTimeout(() => {
    animateIntroContent(); // Ensure this runs after mandala is initialized
  }, 100);

  // Then initialize functional components
  initAttractionsSlider();
  initFilters();
  initModal();
  initMagazineLayout();

  // Initialize card-related components
  initCardAnimations();

  // Explicitly load the Gujarat places initially
  populatePlaceCards("delhi");

  // Make sure to filter them right away
  const defaultCategory = "all";
  filterPlaces("delhi", defaultCategory);
});

// Function to initialize the mandala animation with scroll effects
function initMandalaAnimation() {
  const mandala = document.querySelector(".mandala-bg");

  if (mandala) {
    // Initialize GSAP ScrollTrigger for parallax effect
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.to(".mandala-bg", {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });

      // Parallax effect on scroll
      gsap.to(".mandala-bg", {
        scrollTrigger: {
          trigger: ".intro-parallax-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0.05,
        scale: 1.2,
        ease: "none",
      });
    } else {
      // Fallback for basic animation if GSAP is not available
      mandala.style.animation = "rotateBackground 40s linear infinite";
    }
  }

  // Initialize intro content animation
  animateIntroContent();
}

// Function to animate the intro content with fade-in effect
function animateIntroContent() {
  const introContent = document.querySelector(".intro-content");

  if (introContent && typeof gsap !== "undefined") {
    gsap.from(".intro-content h2", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
    });

    gsap.from(".intro-content p", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
    });
  }
}

// Function to initialize the 3D slider for top attractions
function initAttractionsSlider() {
  const sliderContainer = document.querySelector(
    ".swiper-container.attractions-slider"
  );

  if (sliderContainer) {
    // First, populate the slider with data
    const sliderWrapper = sliderContainer.querySelector(".swiper-wrapper");

    // Check if topAttractions data is available (from places-data.js)
    if (typeof topAttractions !== "undefined") {
      // Clear any existing slides first
      sliderWrapper.innerHTML = "";

      // Remove ALL existing navigation buttons first to avoid duplicates
      const allExistingNextButtons = document.querySelectorAll(
        ".swiper-button-next"
      );
      const allExistingPrevButtons = document.querySelectorAll(
        ".swiper-button-prev"
      );

      allExistingNextButtons.forEach((btn) => btn.remove());
      allExistingPrevButtons.forEach((btn) => btn.remove());

      // Add slides
      topAttractions.forEach((attraction) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
                    <div class="attraction-card" data-id="${attraction.id}">
                        <img src="${attraction.image}" alt="${attraction.title}" class="attraction-image" loading="lazy">
                        <div class="attraction-details">
                            <h3 class="attraction-title">${attraction.title}</h3>
                            <p class="attraction-location">${attraction.location}</p>
                        </div>
                    </div>
                `;
        sliderWrapper.appendChild(slide);
      });

      // Create fresh navigation buttons - only ONCE
      const navNextButton = document.createElement("div");
      navNextButton.className = "swiper-button-next";
      navNextButton.style.display = "flex";
      navNextButton.style.opacity = "1";
      navNextButton.style.visibility = "visible";
      navNextButton.style.zIndex = "100";

      const navPrevButton = document.createElement("div");
      navPrevButton.className = "swiper-button-prev";
      navPrevButton.style.display = "flex";
      navPrevButton.style.opacity = "1";
      navPrevButton.style.visibility = "visible";
      navPrevButton.style.zIndex = "100";

      // Add ONLY to slider container, not the document
      sliderContainer.appendChild(navPrevButton);
      sliderContainer.appendChild(navNextButton);

      // Destroy any existing Swiper instance first
      if (window.attractionsSwiper) {
        window.attractionsSwiper.destroy(true, true);
      }

      // Initialize Swiper with a very long delay and disable autoplay initially
      if (typeof Swiper !== "undefined") {
        window.attractionsSwiper = new Swiper(".attractions-slider", {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          initialSlide: 2,
          speed: 1000,
          loop: true,
          autoplay: false, // Disable autoplay initially
          coverflowEffect: {
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        // Add click event to open modal with attraction details after Swiper init
        setTimeout(() => {
          const attractionCards = document.querySelectorAll(".attraction-card");
          attractionCards.forEach((card) => {
            card.addEventListener("click", function () {
              const attractionId = this.getAttribute("data-id");
              openAttractionModal(attractionId);
            });
          });
        }, 500);

        // Add direct manual control for the buttons
        navNextButton.addEventListener("click", function () {
          if (
            window.attractionsSwiper &&
            typeof window.attractionsSwiper.slideNext === "function"
          ) {
            window.attractionsSwiper.slideNext();
          }
        });

        navPrevButton.addEventListener("click", function () {
          if (
            window.attractionsSwiper &&
            typeof window.attractionsSwiper.slidePrev === "function"
          ) {
            window.attractionsSwiper.slidePrev();
          }
        });

        // Manually control the autoplay with a very long delay
        // Enable autoplay after a 2-second delay to ensure everything is properly initialized
        setTimeout(() => {
          // Set up a manual interval-based slide advancement with a 10-second delay
          if (window.sliderInterval) {
            clearInterval(window.sliderInterval);
          }
          window.sliderInterval = setInterval(() => {
            if (
              window.attractionsSwiper &&
              typeof window.attractionsSwiper.slideNext === "function"
            ) {
              window.attractionsSwiper.slideNext();
            }
          }, 10000); // 10 seconds
        }, 2000);
      }
    }
  }
}

// Function to initialize location tabs and category filters
function initFilters() {
  // Location tabs
  const locationTabs = document.querySelectorAll(".location-tab");
  const delhiFilters = document.getElementById("delhi-filters");
  const ahmedabadFilters = document.getElementById("ahmedabad-filters");
  const delhiPlacesGrid = document.getElementById("delhi-places");
  const ahmedabadPlacesGrid = document.getElementById("ahmedabad-places");

  // Set default active location tab (Gujarat)
  const defaultLocationTab = document.querySelector(
    '.location-tab[data-location="delhi"]'
  );
  if (defaultLocationTab) {
    defaultLocationTab.classList.add("active");
  }

  // Show Gujarat filters and grid by default
  if (delhiFilters) delhiFilters.style.display = "flex";
  if (ahmedabadFilters) ahmedabadFilters.style.display = "none";
  if (delhiPlacesGrid) delhiPlacesGrid.style.display = "grid";
  if (ahmedabadPlacesGrid) ahmedabadPlacesGrid.style.display = "none";

  // Set default active category filter (All)
  const defaultCategoryFilter = document.querySelector(
    '#delhi-filters .category-filter[data-filter="all"]'
  );
  if (defaultCategoryFilter) {
    defaultCategoryFilter.classList.add("active");
  }

  locationTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      locationTabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      this.classList.add("active");

      const location = this.getAttribute("data-location");

      // Show appropriate filters and grid
      if (location === "delhi") {
        if (delhiFilters) delhiFilters.style.display = "flex";
        if (ahmedabadFilters) ahmedabadFilters.style.display = "none";
        if (delhiPlacesGrid) delhiPlacesGrid.style.display = "grid";
        if (ahmedabadPlacesGrid) ahmedabadPlacesGrid.style.display = "none";

        // Populate Gujarat places if not already populated
        if (delhiPlacesGrid && delhiPlacesGrid.children.length === 0) {
          populatePlaceCards("delhi");
        }

        // Reset active filter
        const delhiActiveFilter = document.querySelector(
          "#delhi-filters .category-filter.active"
        );
        if (delhiActiveFilter) {
          delhiActiveFilter.click();
        } else {
          // If no active filter, click the 'all' filter
          const allFilter = document.querySelector(
            '#delhi-filters .category-filter[data-filter="all"]'
          );
          if (allFilter) {
            allFilter.click();
          }
        }
      } else if (location === "ahmedabad") {
        if (delhiFilters) delhiFilters.style.display = "none";
        if (ahmedabadFilters) ahmedabadFilters.style.display = "flex";
        if (delhiPlacesGrid) delhiPlacesGrid.style.display = "none";
        if (ahmedabadPlacesGrid) ahmedabadPlacesGrid.style.display = "grid";

        // Populate Ahmedabad places if not already populated
        if (ahmedabadPlacesGrid && ahmedabadPlacesGrid.children.length === 0) {
          populatePlaceCards("ahmedabad");
        }

        // Reset active filter
        const ahmedabadActiveFilter = document.querySelector(
          "#ahmedabad-filters .category-filter.active"
        );
        if (ahmedabadActiveFilter) {
          ahmedabadActiveFilter.click();
        } else {
          // If no active filter, click the 'all' filter
          const allFilter = document.querySelector(
            '#ahmedabad-filters .category-filter[data-filter="all"]'
          );
          if (allFilter) {
            allFilter.click();
          }
        }
      }
    });
  });

  // Category filters for Gujarat
  const delhiCategoryFilters = document.querySelectorAll(
    "#delhi-filters .category-filter"
  );
  delhiCategoryFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      // Remove active class from all filters
      delhiCategoryFilters.forEach((f) => f.classList.remove("active"));

      // Add active class to clicked filter
      this.classList.add("active");

      const category = this.getAttribute("data-filter");
      filterPlaces("delhi", category);
    });
  });

  // Category filters for Ahmedabad
  const ahmedabadCategoryFilters = document.querySelectorAll(
    "#ahmedabad-filters .category-filter"
  );
  ahmedabadCategoryFilters.forEach((filter) => {
    filter.addEventListener("click", function () {
      // Remove active class from all filters
      ahmedabadCategoryFilters.forEach((f) => f.classList.remove("active"));

      // Add active class to clicked filter
      this.classList.add("active");

      const category = this.getAttribute("data-filter");
      filterPlaces("ahmedabad", category);
    });
  });
}

// Function to populate place cards based on location
function populatePlaceCards(location) {
  const placesGrid = document.getElementById(`${location}-places`);

  if (placesGrid) {
    // Clear existing content
    placesGrid.innerHTML = "";

    let placesData;

    // Get the appropriate data based on location
    if (location === "delhi" && typeof delhiPlaces !== "undefined") {
      placesData = delhiPlaces;
    } else if (
      location === "ahmedabad" &&
      typeof ahmedabadPlaces !== "undefined"
    ) {
      placesData = ahmedabadPlaces;
    } else {
      console.error("Places data not available");
      return;
    }

    // Loop through each category and add places
    for (const category in placesData) {
      if (placesData.hasOwnProperty(category)) {
        placesData[category].forEach((place) => {
          const placeCard = createPlaceCard(place);
          placesGrid.appendChild(placeCard);
        });
      }
    }

    // Initialize card animations if GSAP is available
    if (typeof gsap !== "undefined") {
      initCardAnimations();
    }
  }
}

// Function to create a place card element
function createPlaceCard(place) {
  const card = document.createElement("div");
  card.className = "place-card";
  card.setAttribute("data-id", place.id);
  card.setAttribute("data-category", place.category);

  // Create image element
  const imageContainer = document.createElement("div");
  imageContainer.className = "place-image-container";

  const image = document.createElement("img");
  image.className = "place-image";
  image.src = place.image;
  image.alt = place.title;

  imageContainer.appendChild(image);

  // Create content container
  const content = document.createElement("div");
  content.className = "place-content";

  // Create title
  const title = document.createElement("h3");
  title.className = "place-title";
  title.textContent = place.title;

  // Create description
  const description = document.createElement("p");
  description.className = "place-description";
  description.textContent =
    place.description.length > 120
      ? place.description.substring(0, 120) + "..."
      : place.description;

  //   // Create category wrapper
  //   const categoryWrapper = document.createElement("div");
  //   categoryWrapper.className = "place-category-wrapper";

  //   // Create category badge
  //   const category = document.createElement("span");
  //   category.className = `place-category ${place.category}`;
  //   category.textContent = capitalizeFirstLetter(
  //     place.category.replace(/-/g, " ")
  //   );

  //   categoryWrapper.appendChild(category);

  //   // Add subcategories if they exist
  //   if (place.subcategories && place.subcategories.length > 0) {
  //     place.subcategories.forEach((subcat) => {
  //       const subcategory = document.createElement("span");
  //       subcategory.className = `place-category ${subcat}`;
  //       subcategory.textContent = capitalizeFirstLetter(
  //         subcat.replace(/-/g, " ")
  //       );
  //       categoryWrapper.appendChild(subcategory);
  //     });
  //   }

  // Create footer
  const footer = document.createElement("div");
  footer.className = "place-footer";

  // Create location
  const location = document.createElement("span");
  location.className = "place-location";
  location.textContent = place.location;

  // Create view details button
  const viewDetails = document.createElement("a");
  viewDetails.className = "view-details";
  viewDetails.textContent = "View Details";
  viewDetails.href = "javascript:void(0)";

  // Append all elements
  footer.appendChild(location);
  footer.appendChild(viewDetails);

  content.appendChild(title);
  content.appendChild(description);
  //   content.appendChild(categoryWrapper);
  content.appendChild(footer);

  card.appendChild(imageContainer);
  card.appendChild(content);

  // Add click event only to the View Details button
  viewDetails.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event bubbling
    openPlaceModal(place.id);
  });

  // Add hover effects without click functionality
  card.addEventListener("mousemove", function (e) {
    const cardRect = this.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Subtle tilt effect
    const tiltX = ((mouseY - cardCenterY) / (cardRect.height / 2)) * 2;
    const tiltY = ((cardCenterX - mouseX) / (cardRect.width / 2)) * 2;

    this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "";
  });

  return card;
}

// Function to filter places based on category
function filterPlaces(location, category) {
  const placesGrid = document.getElementById(`${location}-places`);

  if (!placesGrid) {
    console.error(`Place grid for ${location} not found`);
    return;
  }

  // If there are no cards, populate them first
  if (placesGrid.querySelectorAll(".place-card").length === 0) {
    console.log(`No place cards found for ${location}, populating now`);
    populatePlaceCards(location);
  }

  const placeCards = placesGrid.querySelectorAll(".place-card");
  console.log(
    `Filtering ${placeCards.length} cards for ${location} with category ${category}`
  );

  if (category === "all") {
    // Show all places
    placeCards.forEach((card) => {
      card.style.display = "block";

      // Animate card if GSAP is available
      if (typeof gsap !== "undefined") {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: Math.random() * 0.3,
        });
      } else {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }
    });
  } else {
    // Show only places matching the category
    placeCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (cardCategory === category) {
        card.style.display = "block";

        // Animate card if GSAP is available
        if (typeof gsap !== "undefined") {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: Math.random() * 0.3,
          });
        } else {
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
        }
      } else {
        card.style.display = "none";
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
      }
    });
  }
}

// Function to initialize card animations on scroll
function initCardAnimations() {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.from(".place-card", {
      scrollTrigger: {
        trigger: ".places-grid",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.1,
    });
  }
}

// Initialize magazine layout interactions
function initMagazineLayout() {
  // Add click event to all magazine items
  const magazineItems = document.querySelectorAll(".magazine-item");

  magazineItems.forEach((item) => {
    item.addEventListener("click", function () {
      const placeId = this.getAttribute("data-id");
      if (placeId) {
        openPlaceModal(placeId);
      }
    });

    // Add 3D tilt effect on mouse move for magazine items
    item.addEventListener("mousemove", function (e) {
      const card = this;
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate tilt angles (max 5 degrees - subtle)
      const tiltX = ((mouseY - cardCenterY) / (cardRect.height / 2)) * 3;
      const tiltY = ((cardCenterX - mouseX) / (cardRect.width / 2)) * 3;

      // Apply the tilt
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`;
    });

    // Reset tilt on mouse leave
    item.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });
}

// Initialize modal functionality
function initModal() {
  // Add event listener to all view-details buttons
  document.addEventListener("click", function (e) {
    // Check if clicked element is a view-details button or its child
    if (
      e.target.classList.contains("view-details") ||
      e.target.closest(".view-details")
    ) {
      const button = e.target.classList.contains("view-details")
        ? e.target
        : e.target.closest(".view-details");
      const placeId = button.getAttribute("data-id");
      if (placeId) {
        e.preventDefault();
        openPlaceModal(placeId);
      }
    }

    // Check if clicked element is modal background (outside of content)
    if (e.target.classList.contains("place-detail-modal")) {
      closeModal();
    }
  });

  // Close modal with escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

// Function to open modal with place details
function openPlaceModal(placeId) {
  // Look for the place in both Gujarat and Ahmedabad categories
  let place = null;
  let foundIn = "";

  // Check Gujarat places
  for (const category in delhiPlaces) {
    const foundPlace = delhiPlaces[category].find((p) => p.id === placeId);
    if (foundPlace) {
      place = foundPlace;
      foundIn = "delhi";
      break;
    }
  }

  // If not found, check Ahmedabad places
  if (!place) {
    for (const category in ahmedabadPlaces) {
      const foundPlace = ahmedabadPlaces[category].find(
        (p) => p.id === placeId
      );
      if (foundPlace) {
        place = foundPlace;
        foundIn = "ahmedabad";
        break;
      }
    }
  }

  if (!place) {
    console.error("Place not found:", placeId);
    return;
  }

  const modal = document.getElementById("placeDetailModal");
  const modalContent = modal.querySelector(".modal-content");

  // Generate highlights based on place type or category
  let highlights = [];
  let category = "";

  if (place.category) {
    category = place.category;
  } else if (
    placeId.includes("temple") ||
    place.title.includes("Temple") ||
    placeId.includes("mandir") ||
    place.title.includes("Mandir")
  ) {
    category = "religious";
  } else if (placeId.includes("fort") || place.title.includes("Fort")) {
    category = "historical";
  } else if (placeId.includes("museum") || place.title.includes("Museum")) {
    category = "cultural";
  } else if (
    placeId.includes("park") ||
    place.title.includes("Park") ||
    placeId.includes("wildlife") ||
    place.title.includes("Wildlife")
  ) {
    category = "wildlife";
  } else if (
    placeId.includes("lake") ||
    place.title.includes("Lake") ||
    placeId.includes("rann") ||
    place.title.includes("Rann")
  ) {
    category = "natural";
  }

  // Set highlights based on category
  if (category === "historical") {
    highlights = [
      "Rich historical significance",
      "Architectural marvel",
      "Cultural heritage site",
      "Historical storytelling",
    ];
  } else if (category === "religious") {
    highlights = [
      "Significant religious site",
      "Spiritual atmosphere",
      "Beautiful architectural details",
      "Cultural importance",
    ];
  } else if (category === "wildlife") {
    highlights = [
      "Diverse flora and fauna",
      "Natural habitat conservation",
      "Wildlife photography opportunity",
      "Eco-tourism destination",
    ];
  } else if (category === "natural") {
    highlights = [
      "Breathtaking natural landscape",
      "Pristine environment",
      "Unique geographical features",
      "Perfect for nature lovers",
    ];
  } else if (category === "modern") {
    highlights = [
      "Modern architectural design",
      "Contemporary attraction",
      "Technology and innovation",
      "Family-friendly activities",
    ];
  } else if (category === "monument") {
    highlights = [
      "Modern architectural design",
      "Contemporary attraction",
      "Technology and innovation",
      "Family-friendly activities",
    ];
  } else {
    // Default highlights
    highlights = [
      "Popular attraction in Gujarat",
      "Must-visit destination",
      "Cultural and historical significance",
      "Perfect photo opportunity",
    ];
  }

  // Use place's highlights if available, otherwise use our generated ones
  if (place.highlights && place.highlights.length > 0) {
    highlights = place.highlights;
  }

  // Get detailed info or provide defaults
  const visitingHours =
    place.detailedInfo?.visitingHours || "9:00 AM - 6:00 PM";
  const entryFee =
    place.detailedInfo?.entryFee ||
    "INR 50 for Indians, INR 200 for foreigners";
  const bestTimeToVisit =
    place.detailedInfo?.bestTimeToVisit || "October to March";

  // Create simple modal content with place data
  modalContent.innerHTML = `
        <div class="simple-modal">
            <span class="close-modal">&times;</span>
            <div class="simple-modal-header">
                <h2>${place.title}</h2>
                <p class="simple-location"><i class="fas fa-map-marker-alt"></i> ${
                  place.location
                }</p>
            </div>
            
            <div class="simple-modal-image">
                <img src="${place.image}" alt="${place.title}">
            </div>
            
            <div class="simple-modal-content">
                <h3>About</h3>
                <p>${place.description}</p>
                
                <h3>Key Highlights</h3>
                <ul class="simple-highlights">
                    ${highlights
                      .map((highlight) => `<li>${highlight}</li>`)
                      .join("")}
                </ul>
                
                <div class="simple-modal-info">
                    <div class="info-item">
                        <strong>Visiting Hours:</strong> ${visitingHours}
                    </div>
                    <div class="info-item">
                        <strong>Entry Fee:</strong> ${entryFee}
                    </div>
                    <div class="info-item">
                        <strong>Best Time to Visit:</strong> ${bestTimeToVisit}
                    </div>
                </div>
            </div>
        </div>
    `;

  // Add event listener to close button
  const closeButton = modalContent.querySelector(".close-modal");
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  // Show the modal
  modal.classList.add("show");

  // Prevent body scrolling when modal is open
  document.body.style.overflow = "hidden";
}

// Function to open modal with attraction details
function openAttractionModal(attractionId) {
  const attraction = topAttractions.find((a) => a.id === attractionId);
  if (!attraction) {
    console.error("Attraction not found:", attractionId);
    return;
  }

  const modal = document.getElementById("placeDetailModal");
  const modalContent = modal.querySelector(".modal-content");

  // Look in delhiPlaces for detailed info
  let detailedInfo = null;
  for (const category in delhiPlaces) {
    const foundPlace = delhiPlaces[category].find(
      (p) => p.id === attractionId || p.title === attraction.title
    );
    if (foundPlace && foundPlace.detailedInfo) {
      detailedInfo = foundPlace.detailedInfo;
      break;
    }
  }

  // If not found in Gujarat, look in Ahmedabad
  if (!detailedInfo) {
    for (const category in ahmedabadPlaces) {
      const foundPlace = ahmedabadPlaces[category].find(
        (p) => p.id === attractionId || p.title === attraction.title
      );
      if (foundPlace && foundPlace.detailedInfo) {
        detailedInfo = foundPlace.detailedInfo;
        break;
      }
    }
  }

  // Generate highlights based on attraction type
  let highlights = [];
  let category = "";

  // Try to determine the category
  if (
    attractionId.includes("temple") ||
    attraction.title.includes("Temple") ||
    attractionId.includes("mandir") ||
    attraction.title.includes("Mandir")
  ) {
    category = "religious";
    highlights = [
      "Significant religious site",
      "Spiritual atmosphere",
      "Beautiful architectural details",
      "Cultural importance",
    ];
  } else if (
    attractionId.includes("park") ||
    attraction.title.includes("Park") ||
    attractionId.includes("wildlife") ||
    attraction.title.includes("Wildlife")
  ) {
    category = "wildlife";
    highlights = [
      "Diverse flora and fauna",
      "Natural habitat conservation",
      "Wildlife photography opportunity",
      "Eco-tourism destination",
    ];
  } else if (
    attractionId.includes("ashram") ||
    attraction.title.includes("Ashram")
  ) {
    category = "historical";
    highlights = [
      "Rich historical significance",
      "Cultural heritage site",
      "Spiritual learning center",
      "Legacy of Mahatma Gandhi",
    ];
  } else if (
    attractionId.includes("rann") ||
    attraction.title.includes("Rann")
  ) {
    category = "natural";
    highlights = [
      "Breathtaking natural landscape",
      "Pristine salt desert",
      "Unique geographical features",
      "Perfect for nature photographers",
    ];
  } else if (
    attractionId.includes("unity") ||
    attraction.title.includes("Unity")
  ) {
    category = "modern";
    highlights = [
      "World's tallest statue",
      "Engineering marvel",
      "Tribute to Sardar Vallabhbhai Patel",
      "Spectacular viewing gallery",
    ];
  } else if (attractionId.includes("vav") || attraction.title.includes("Vav")) {
    category = "historical";
    highlights = [
      "UNESCO World Heritage Site",
      "Stunning architectural details",
      "Ancient water conservation system",
      "Historical significance",
    ];
  } else {
    // Default highlights
    highlights = [
      "Top attraction in Gujarat",
      "Perfect photo opportunity",
      "Cultural and historical significance",
      "Must-visit during your trip",
    ];
  }

  // Get detailed info or provide defaults
  const visitingHours = detailedInfo?.visitingHours || "9:00 AM - 6:00 PM";
  const entryFee = detailedInfo?.entryFee || "Varies by season";
  const bestTimeToVisit = detailedInfo?.bestTimeToVisit || "October to March";

  // Create simple modal content with attraction data
  modalContent.innerHTML = `
        <div class="simple-modal">
            <span class="close-modal">&times;</span>
            <div class="simple-modal-header">
                <h2>${attraction.title}</h2>
                <p class="simple-location"><i class="fas fa-map-marker-alt"></i> ${
                  attraction.location
                }</p>
            </div>
            
            <div class="simple-modal-image">
                <img src="${attraction.image}" alt="${attraction.title}">
            </div>
            
            <div class="simple-modal-content">
                <h3>About</h3>
                <p>${attraction.description}</p>
                
                <h3>Key Highlights</h3>
                <ul class="simple-highlights">
                    ${highlights
                      .map((highlight) => `<li>${highlight}</li>`)
                      .join("")}
                </ul>
                
                <div class="simple-modal-info">
                    <div class="info-item">
                        <strong>Visiting Hours:</strong> ${visitingHours}
                    </div>
                    <div class="info-item">
                        <strong>Entry Fee:</strong> ${entryFee}
                    </div>
                    <div class="info-item">
                        <strong>Best Time to Visit:</strong> ${bestTimeToVisit}
                    </div>
                </div>
            </div>
        </div>
    `;

  // Add event listener to close button
  const closeButton = modalContent.querySelector(".close-modal");
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  // Show the modal
  modal.classList.add("show");

  // Prevent body scrolling when modal is open
  document.body.style.overflow = "hidden";
}

// Close modal and enable scroll
function closeModal() {
  const modal = document.getElementById("placeDetailModal");
  modal.classList.remove("show");

  // Re-enable body scrolling
  document.body.style.overflow = "";

  // Optional: Clear the modal content after animation completes
  setTimeout(() => {
    const modalContent = modal.querySelector(".modal-content");
    if (modalContent) {
      modalContent.innerHTML = "";
    }
  }, 300);
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
