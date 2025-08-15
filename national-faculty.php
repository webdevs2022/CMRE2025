<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>CMRE 2025 | National Faculty</title>

    <!-- Preload critical CSS -->
    <link rel="preload" href="css/footer-custom.css" as="style" />
    <link rel="preload" href="../cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" as="style" />

    <!-- Base stylesheets first -->
    <link href="css/bootstrap.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
    <link href="css/responsive.css" rel="stylesheet" />

    <!-- Font Awesome -->
    <link rel="stylesheet" href="../cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

    <!-- Custom CSS with high specificity - MUST load after main CSS -->
    <link rel="stylesheet" href="css/footer-custom.css" type="text/css" media="all" />

    <!-- Additional stylesheets -->
    <link href="css/color-switcher-design.css" rel="stylesheet" />

    <link rel="shortcut icon" href="images/cmre-logo.png" type="image/x-icon" />
    <link rel="icon" href="images/cmre-logo.png" type="image/x-icon" />

    <!-- Responsive -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />

    <!--[if lt IE 9
      ]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script
    ><![endif]-->
    <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->
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
                <h1>National Faculty</h1>
                <ul class="bread-crumb clearfix">
                    <li><a href="index.php">Home</a></li>
                    <li>National Faculty</li>
                </ul>
            </div>
        </section>
        <!--End Page Title-->

        <!-- Coming Soon Section -->
        <section class="coming-soon">
            <div class="anim-icons full-width">
                <span class="icon icon-dots wow fadeInleft"></span>
                <span class="icon icon-line-1 wow zoomIn"></span>
            </div>
            <div class="auto-container">
                <div class="content">
                    <h1>Coming Soon</h1>
                    <!-- <div class="text">We are currently working on an awesome new site. Stay tuned for more information.<br><div> -->
                </div>
            </div>
        </section>
        <!-- End Coming Soon Section -->

        <!-- Main Footer -->
        <?php include_once 'components/footer.php'; ?>
        <!-- End Footer -->
    </div>
    <!--End pagewrapper-->
    <!-- End Color Switcher -->

    <!--Scroll to top-->
    <div class="scroll-to-top scroll-to-target" data-target="html">
        <span class="fa fa-angle-double-up"></span>
    </div>
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
    <script>
        document.getElementById('faculty-php').classList.add('current');
    </script>
</body>

</html>