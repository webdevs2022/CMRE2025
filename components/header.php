<?php
require_once 'links.php';
?>
<!-- Header Span -->
<span class="header-span style-two"></span>

<!-- Main Header-->
<header class="main-header header-style-two alternate">
    <div class="header-top">
        <div class="auto-container">
            <div class="clearfix">

                <div class="top-left pull-left">
                    <div class="header-contact-info">
                        <div class="call"><a href="tel:+918200765771"><img src="images/icons/call.svg" alt=""> +91
                                8200765771</a></div>
                        <div class="email"><a href="<?php echo "mailto:" . EMAIL; ?>"> <img src="images/icons/mail.svg"
                                    alt=""><?php echo EMAIL; ?></a></li>
                        </div>
                    </div>
                </div>

                <div class="pull-right">
                    <ul class="social-links">
                        <li><a href="<?php echo FACEBOOK; ?>" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="<?php echo TWITTER; ?>" target="_blank"><i class="fab fa-twitter x-icon"></i></a>
                        </li>
                        <li><a href="<?php echo INSTAGRAM; ?>" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="<?php echo LINKEDIN; ?>" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                    <a href="registration.php" class="theme-btn register-btn">Registration</a>
                    <!-- <div class="header-logo btn-logo"><img src="images/isar-combine-logo.png" alt=""></div> -->
                </div>

            </div>
        </div>
    </div>

    <div class="main-box">
        <div class="auto-container clearfix">
            <div class="logo-box logo-header">
                <div class="logo"><a href="index.php"><img src="images/cmre-logo.png" alt="" title=""></a></div>
            </div>

            <!--Nav Box-->
            <div class="nav-outer clearfix">
                <!--Mobile Navigation Toggler-->
                <div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span></div>
                <!-- Main Menu -->
                <nav class="main-menu navbar-expand-lg navbar-light">
                    <div class="navbar-header">
                        <!-- Togg le Button -->
                        <button class="navbar-toggler d-none" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon flaticon-menu-button"></span>
                        </button>
                    </div>

                    <div class="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                        <ul class="navigation clearfix">
                            <li id="index-php"><a href="index.php">Home</a>
                            <li id="about-php"><a href="about.php">About</a></li>
                            <li id="faculty-php" class="dropdown"><a href="#">Faculty</a>
                                <ul>
                                    <li><a href="international-faculty.php">International Faculty</a></li>
                                    <li><a href="national-faculty.php">National Faculty</a></li>
                                </ul>
                            </li>
                            <li id="registration-php"><a href="registration.php">Registration</a></li>
                            <li id="scientific-program-php"><a href="scientific-program.php">Scientific Program</a></li>
                            <li id="place-to-visit-php"><a href="place-to-visit.php">Place to Visit</a></li>
                            <!-- <li class="dropdown"><a href="#">Travel</a>
                                <ul>
                                    <li><a href="place-to-visit.html">Place to Visit</a></li>
                                    <li><a href="accommodation.html">Accomodation</a></li>
                                </ul>
                            </li> -->
                            <li id="contact-php"><a href="contact.php">Contact Us</a></li>
                            </li>
                        </ul>
                    </div>
                </nav>

                <!-- Main Menu End-->
            </div>
        </div>
    </div>

    <!-- Mobile Menu  -->
    <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <div class="close-btn"><span class="icon flaticon-cancel-1"></span></div>

        <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
        <nav class="menu-box">
            <div class="nav-logo"><a href="index.php"><img src="images/cmre-logo.png" alt="" title=""></a></div>

            <ul class="navigation clearfix"><!--Keep This Empty / Menu will come through Javascript-->
            </ul>
        </nav>
    </div><!-- End Mobile Menu -->
</header>
<!--End Main Header -->