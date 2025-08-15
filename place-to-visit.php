<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CMRE 2025 | Places to Visit</title>

    <!-- Preload critical CSS -->
    <link rel="preload" href="css/footer-custom.css" as="style">
    <link rel="preload" href="../cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" as="style">

    <!-- Base stylesheets first -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/responsive.css" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="../cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    <!-- Custom CSS with high specificity - MUST load after main CSS -->
    <link rel="stylesheet" href="css/footer-custom.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/places-to-visit.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/place-to-visit.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/swiper.css" type="text/css" media="all">
    <link rel="stylesheet" href="css/intro-section.css" type="text/css" media="all">

    <!-- Additional stylesheets -->
    <link href="css/color-switcher-design.css" rel="stylesheet">

    <link rel="shortcut icon" href="images/cmre-logo.png" type="image/x-icon">
    <link rel="icon" href="images/cmre-logo.png" type="image/x-icon">

    <!-- Responsive -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

</head>

<body>

    <div class="page-wrapper">

        <!-- Preloader -->
        <div class="preloader"></div>

        <!-- Main Header-->
        <?php include_once 'components/header.php'; ?>
        <!--End Main Header -->

        <!--Page Title-->
        <section class="page-title hero-bg">
            <div class="auto-container">
                <h1>Places to Visit</h1>
                <ul class="bread-crumb clearfix">
                    <li>Travel</li>
                    <li>Places to Visit</li>
                </ul>
            </div>
        </section>
        <!--End Page Title-->

        <!-- Introduction Section with Parallax -->
        <section class="intro-section-container">
            <div class="intro-bg-element"></div>
            <div class="auto-container">
                <div class="intro-text-container">
                    <h2 class="intro-heading">Discover Delhi</h2>
                    <p class="intro-paragraph">New Delhi, the vibrant capital of India, offers a rich blend of history,
                        culture, architecture, and modernity. As you join us for CMRE 2025, take the opportunity to
                        explore this incredible city filled with iconic monuments, bustling markets, and culinary
                        delights. From centuries-old forts to serene gardens and vibrant bazaars, Delhi promises a
                        memorable experience beyond the conference.
                    </p>
                </div>
            </div>
        </section>

        <!-- Places Grid Section -->
        <section class="places-grid-section">
            <div class="auto-container">
                <div class="section-title">
                    <h2>Top Attractions</h2>
                </div>
            </div>
            <div class="auto-container">
                <div class="places-grid" id="delhi-places">
                    <!-- Delhi places cards will be populated with JavaScript -->
                </div>

                <!-- <div class="places-grid" id="ahmedabad-places" style="display: none;">
                   
                </div> -->
            </div>
        </section>

        <!-- Magazine Style Layout Section -->
        <!-- <section class="magazine-section" style="display: none;">
            <div class="auto-container">
                <div class="magazine-title-section">
                    <h2>Explore D's Beauty</h2>
                </div>

                <div class="places-magazine-grid" id="gujarat-magazine">
                    <div class="magazine-item magazine-small" data-category="wildlife" data-id="gir-national-park-main">
                        <div class="magazine-img-container">
                            <img src="images/places/gir-national-park.jpg" alt="Gir National Park">
                        </div>
                        <div class="magazine-overlay">
                            <span class="magazine-category wildlife">Wildlife</span>
                            <h3 class="magazine-title">Gir National Park</h3>
                            <p class="magazine-location">Junagadh, Gujarat</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <!-- Place Detail Modal -->
        <div class="place-detail-modal" id="placeDetailModal">
            <div class="modal-content">
                <!-- Modal content will be populated with JavaScript -->
            </div>
        </div>

        <!-- Main Footer -->
        <?php include_once 'components/footer.php'; ?>
        <!-- End Footer -->

    </div>
    <!--End pagewrapper-->

    <!--Scroll to top-->
    <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-double-up"></span></div>
    <script src="js/jquery.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script src="js/jquery.fancybox.js"></script>
    <script src="js/appear.js"></script>
    <script src="js/wow.js"></script>
    <script src="js/swiper.min.js"></script>
    <script src="js/places-data.js"></script>
    <script src="js/places-to-visit.js"></script>
    <script src="js/script.js"></script>

    <!-- Image optimization script -->
    <script>
        // Function to lazy load background images
        document.addEventListener('DOMContentLoaded', function () {
            // Optimize page title background
            const pageTitle = document.querySelector('.page-title');
            if (pageTitle) {
                const bgImage = getComputedStyle(pageTitle).backgroundImage;
                if (bgImage && bgImage !== 'none') {
                    const url = bgImage.slice(4, -1).replace(/["']/g, "");
                    const img = new Image();
                    img.onload = function () {
                        pageTitle.style.backgroundImage = `url(${url})`;
                    };
                    setTimeout(() => {
                        img.src = url;
                    }, 100);
                }
            }

            // Optimize all images with lazy loading
            const images = document.querySelectorAll('img:not([loading])');
            images.forEach(img => {
                if (!img.hasAttribute('loading')) {
                    img.setAttribute('loading', 'lazy');
                }
            });
        });
    </script>
</body>

</html>