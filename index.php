<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CMRE 2025</title>

    <!-- Preload critical CSS -->
    <link rel="preload" href="css/footer-custom.css" as="style">
    <link rel="preload" href="../cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" as="style">
    <link rel="preload" href="images/hero-section/banner-1.webp" as="image">
    <link rel="preload" href="images/hero-section/banner-2.webp" as="image">
    <link rel="preload" href="images/hero-section/banner-3.webp" as="image">

    <!-- Base stylesheets first -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/responsive.css" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="../cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    <!-- Custom CSS with high specificity - MUST load after main CSS -->
    <link rel="stylesheet" href="css/footer-custom.css" type="text/css" media="all">
    <link href="css/registration-cards.css" rel="stylesheet">

    <!-- Additional stylesheets -->
    <link href="css/color-switcher-design.css" rel="stylesheet">
    <link href="css/button-fixes.css" rel="stylesheet">
    <link href="css/cta-section.css" rel="stylesheet">

    <link rel="shortcut icon" href="images/cmre-logo.png" type="image/x-icon">
    <link rel="icon" href="images/cmre-logo.png" type="image/x-icon">

    <!-- Responsive -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
    <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->
</head>

<body>

    <div class="page-wrapper">

        <!-- Preloader -->
        <div class="preloader"></div>

        <!-- Header -->
        <?php include_once 'components/header.php'; ?>

        <!-- Banner Section Two -->
        <section class="banner-section">
            <div class="banner-carousel home-banner owl-carousel owl-theme" style="overflow: hidden;">

                <!-- Slide Item -->
                <div class="slide-item" style="height: 100%;width: 100%;">
                    <div class="" style="height: 100%;width: 100%;">
                        <img style="height: 100%;width: 100%;" src="images/hero-section/banner-1.webp" alt="slider-1"
                            importance="high">
                    </div>
                </div>

                <!-- Slide Item -->
                <div class="slide-item" style="height: 100%;width: 100%;">
                    <div class="" style="height: 100%;width: 100%;">
                        <img style="height: 100%;width: 100%;" src="images/hero-section/banner-2.webp" alt="slider-2"
                            importance="high">
                    </div>
                </div>

                <!-- Slide Item -->
                <div class="slide-item" style="height: 100%;width: 100%;">
                    <div class="" style="height: 100%;width: 100%;">
                        <img style="height: 100%;width: 100%;" src="images/hero-section/banner-3.webp" alt="slider-3"
                            importance="high">
                    </div>
                </div>
            </div>
        </section>
        <!-- End Banner Section Two -->

        <!-- Coming Soon -->
        <section class="coming-soon-section">
            <div class="auto-container">
                <div class="outer-box">
                    <div class="time-counter">
                        <div class="time-countdown clearfix" data-countdown="09/26/2025"></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Coming Soon -->

        <!-- About Section -->
        <section class="about-section">
            <div class="auto-container">
                <div class="row">
                    <!-- Content Column -->
                    <div class="content-column col-lg-6 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <div class="sec-title">
                                <span class="title">12th CMRE International Symposium in Diabetes (2025)</span>
                                <h2>Welcome Message</h2>
                                <div class="text">Dear Esteemed Colleagues,</div>
                                <div class="text">We are delighted to invite you to the 12th CMRE International
                                    Symposium in Diabetes, a premier gathering in the field of diabetes care, scheduled
                                    for 26th - 28th September 2025. This year’s symposium continues in a hybrid
                                    format, with virtual sessions on 26th September, followed by an in-person scientific
                                    meeting on 28th September at Le Méridien, New Delhi.
                                </div>
                                <div class="text">Organized by CMRE, in collaboration with AASD and DIPSI, the symposium
                                    will convene an international faculty of leading experts, clinicians, and
                                    researchers to share transformative insights and evidence-based advances in diabetes
                                    research, management, and technology.
                                </div>
                            </div>
                            <div class="btn-box"><a href="about-isar.html" class="theme-btn btn-style-one"><span
                                        class="btn-title">Read More</span></a></div>
                        </div>
                    </div>

                    <!-- Image Column -->
                    <div class="image-column col-lg-6 col-md-12 col-sm-12">
                        <div class="image-box">
                            <figure class="image wow fadeIn"><img src="images/places/delhi-art.webp" alt=""></figure>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-relative">
                <div class="icon icon-circle-mandala-right wow fadeIn"></div>
            </div>
        </section>
        <!--End About Section -->

        <!-- Organizer commitee card container -->
        <section class="committee-section">
            <div class="container">
                <div class="sec-title">
                    <span class="title text-center">Meet our amazing committee for CMRE 2025</span>
                    <h2 class="text-center">Organizing Committee </h2>
                </div>
                <!-- <h2 class="committee-title">Organizing Committee</h2> -->
                <div class="card-container">
                    <?php
                    require_once 'data/organizing-committe.php';

                    foreach ($organizingCommittee as $member) {
                        ?>
                        <div class="card">
                            <div class="profile">
                                <img src="<?php echo $member['image']; ?>" alt="<?php echo $member['name']; ?>">
                            </div>
                            <h2 class="delgateName"><?php echo $member['name']; ?></h2>
                            <p class="designation"><?php echo $member['position']; ?></p>
                            <p class="designation"><?php echo $member['org']; ?></p>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>
            <div class="position-relative">
                <div class="icon icon-circle-mandala-left wow fadeIn"></div>
            </div>
        </section>
        <!-- Organizer commitee end card container -->

        <!-- Pricing Section -->
        <section class="pricing-section-two alternate"
            style="background-color: #eef2f7; padding-top: 50px; padding-bottom: 50px;">
            <div class="auto-container">
                <div class="sec-title text-center">
                    <span class="title" style="margin-top: 15px; line-height: 1.5;">Early Bird Registration Till 31st
                        August 2025</span>
                    <h2>Registration Details</h2>
                </div>

                <?php include_once 'components/registration-price.php'; ?>
                <div class="text-center mt-5">
                    <a href="registration.php" class="theme-btn btn-style-three"><span class="btn-title">View All
                            Registration Details</span></a>
                </div>
            </div>
            <div class="position-relative">
                <div class="icon icon-circle-mandala-right wow fadeIn"></div>
            </div>
        </section>
        <!--End Pricing Section -->

        <!-- Event Info Section -->
        <section class="event-info-section">
            <div class="auto-container">
                <div class="row">
                    <!-- Info Column -->
                    <div class="info-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div class="inner-column">
                            <div class="sec-title style-two">
                                <span class="title">Event Venue</span>
                                <h2>Direction for the <br>Event Conference</h2>
                            </div>

                            <div class="event-info-tabs tabs-box">
                                <!--Tabs Box-->
                                <ul class="tab-buttons clearfix">
                                    <li class="tab-btn active-btn" data-tab="#tab1">Time</li>
                                    <li class="tab-btn" data-tab="#tab2">Venue</li>
                                </ul>

                                <div class="tabs-content">
                                    <!--Tab-->
                                    <div class="tab active-tab" id="tab1">
                                        <h4><span class="icon far fa-calendar"></span> 26<sup>th</sup> - 28<sup>th</sup>
                                            Sept 2025</h4>
                                        <div class="text">28<sup>th</sup> Sept - Face to Face</div>
                                        <ul class="info-list">
                                            <li><span class="icon icon_phone"></span> <a href="tel:+8200765771"> +91
                                                    8200765771</a></li>
                                            <li><span class="icon icon_mail"></span> <a
                                                    href="<?php echo "mailto:" . EMAIL; ?>"><?php echo EMAIL; ?></a>
                                            </li>
                                        </ul>
                                    </div>

                                    <!--Tab-->
                                    <div class="tab" id="tab2">
                                        <h4><span class="icon fa fa-map-marker-alt"></span>Le Méridien New Delhi</h4>
                                        <div class="text">Over the last three decades, Le Meridien New Delhi has
                                            transformed itself into a masterpiece par excellence. The 5-star hotel in
                                            New Delhi, India is an epitome of world-class architecture, cuisine, design
                                            and fashion. </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Image Column -->
                    <div class="map-column col-lg-6 col-md-12 col-sm-12">
                        <!--Map Outer-->
                        <div class="map-outer">
                            <!--Map Canvas-->
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.36431966738!2d77.21828339999999!3d28.6188412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2ca0c39c7e7%3A0x82c747212ebedb21!2sLe%20M%C3%A9ridien%20New%20Delhi!5e0!3m2!1sen!2sin!4v1754493993306!5m2!1sen!2sin"
                                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-relative">
                <div class="icon icon-circle-mandala-left wow fadeIn"></div>
            </div>
        </section>
        <!--End Event Info Section -->

        <!-- CTA Section -->
        <section class="cta-section">
            <div class="auto-container">
                <div class="sec-title text-center">
                    <span class="title" style="margin-top: 15px; line-height: 1.5;">Everything you need for a successful
                        conference experience in Ahmedabad</span>
                    <h2>Plan Your Visit</h2>
                </div>
                <div class="row">
                    <!-- Accommodation CTA -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="cta-box">
                            <div class="inner-box">
                                <h3>Scientific Program</h3>
                                <p>Find the latest diabetic topics in CMRE 2025</p>
                                <a href="scientific-program.php" class="fixed-btn">
                                    <span class="btn-content">View Program <i class="fas fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Local Attractions CTA -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="cta-box">
                            <div class="inner-box">
                                <h3>Local Attractions</h3>
                                <p>Discover must-visit places in and around Delhi</p>
                                <a href="place-to-visit.php" class="fixed-btn">
                                    <span class="btn-content">Learn More <i class="fas fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Register CTA -->
                    <div class="col-lg-4 col-md-6 col-sm-12 mx-auto">
                        <div class="cta-box" style="position: relative; z-index: 99">
                            <div class="inner-box">
                                <h3>Register Now</h3>
                                <p>Secure your place at the CMRE 2025 conference</p>
                                <a href="registration.php" class="fixed-btn">
                                    <span class="btn-content">Register <i class="fas fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-relative">
                <div class="icon icon-circle-mandala-right wow fadeIn"></div>
            </div>
        </section>
        <!--End CTA Section -->

        <!-- Main Footer -->
        <?php require_once 'components/footer.php'; ?>
        <!-- End Footer -->

    </div>
    <!--End pagewrapper-->

    <!-- Color Palate / Color Switcher -->
    <div class="color-palate">
        <div class="color-trigger">
            <i class="fa fa-cog"></i>
        </div>
        <div class="color-palate-head">
            <h6>Choose Your Demo</h6>
        </div>
        <ul class="box-version option-box">
            <li>Full width</li>
            <li class="box">Boxed</li>
        </ul>
        <ul class="rtl-version option-box">
            <li>LTR Version</li>
            <li class="rtl">RTL Version</li>
        </ul>
        <div class="palate-foo">
            <span>You will find much more options for colors and styling in admin panel. This color picker is used only
                for demonstation purposes.</span>
        </div>
        <a href="#" class="purchase-btn">Purchase now</a>
    </div><!-- End Color Switcher -->

    <!--Scroll to top-->
    <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-double-up"></span></div>
    <script src="js/jquery.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script src="js/jquery.fancybox.js"></script>
    <script src="js/jquery.countdown.js"></script>
    <script src="js/appear.js"></script>
    <script src="js/owl.js"></script>
    <script src="js/wow.js"></script>
    <script src="js/script.js"></script>
    <!-- Custom fixes for the site -->
    <script src="js/custom-fixes.js"></script>
    <!-- Color Setting -->
    <!-- <script src="js/color-settings.js"></script> -->
    <script>
        document.getElementById('index-php').classList.add('current');
    </script>
</body>

</html>