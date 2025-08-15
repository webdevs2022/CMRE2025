<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CMRE 2025 | Privacy Policy</title>

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

        <!-- Privacy Policy Section -->
        <main class="policy-page"> <!-- Added main tag -->
            <section class="policy-header">
                <h1>Privacy Policy</h1>
                <p><i class="fas fa-lock"></i> Effective Date: August 07, 2025</p> <!-- Lock icon using Font Awesome -->
            </section>

            <section class="policy-content">
                <h2>Information We Collect</h2>
                <ul>
                    <li><b>Personal Information:</b> We collect personal information you provide directly to us, such as
                        your name, email address, phone number, affiliation, and dietary restrictions.</li>
                    <li><b>Payment Information:</b> If you make payments for event registration, we collect payment
                        information through third-party payment processors. We do <b>not</b> directly store your credit
                        card details.</li>
                    <li><b>Usage Data:</b> We automatically collect information about your interaction with our website,
                        including your IP address, browser type, device information, pages visited, and referring URLs.
                    </li>
                    <li><b>Cookies and Similar Technologies:</b> We use cookies and similar tracking technologies to
                        enhance your user experience.</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <ul>
                    <li>Provide and Manage Services: To process your event registration, manage your account, respond to
                        your inquiries.</li>
                    <li>Communication: To send you event updates, newsletters, and important announcements.</li>
                    <li>Personalization: To personalize your experience on our website.</li>
                    <li>Analytics: To analyze website traffic and improve the performance of our website.</li>
                    <li>Legal Compliance: To comply with legal obligations.</li>
                </ul>

                <h2>Sharing Your Information</h2>
                <ul>
                    <li><b>Service Providers:</b> Third-party vendors who provide services on our behalf (e.g., payment
                        processing, email marketing, web hosting).</li>
                    <li><b>Event Partners:</b> In some cases, we may share your information with event partners (e.g.,
                        sponsors, co-organizers) to facilitate the event.</li>
                    <li><b>Legal Authorities:</b> We may disclose your information if required to do so by law.</li>
                </ul>

                <h2>Your Rights</h2>
                <ul>
                    <li><b>Access:</b> You have the right to request access to the personal information we hold about
                        you.</li>
                    <li><b>Correction:</b> You have the right to request that we correct any inaccurate or incomplete
                        information.</li>
                    <li><b>Deletion:</b> You have the right to request that we delete your personal information, subject
                        to certain exceptions.</li>
                    <li><b>Opt-Out:</b> You can opt out of receiving promotional emails by following the unsubscribe
                        instructions.</li>
                </ul>

                <h2>Data Security</h2>
                <p>We implement reasonable technical and organizational measures to protect your personal information
                    from unauthorized access, use, or disclosure. However, no method of transmission over the internet
                    is 100% secure.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a
                        href="<?php echo "mailto:" . EMAIL; ?>"><?php echo EMAIL; ?></a>.</p>

            </section>
        </main>
        <!-- End Privacy Policy Section -->

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
    <script src="js/owl.js"></script>
    <script src="js/wow.js"></script>
    <script src="js/script.js"></script>
    <!-- Color Setting -->
</body>

</html>