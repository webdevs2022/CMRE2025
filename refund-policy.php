<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CMRE 2025 | Refund Policy</title>

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

        <!-- Refund Policy Section -->
        <main class="policy-page"> <!-- Added main tag -->
            <section class="policy-header">
                <h1>Refund Policy</h1>
                <p><i class="fas fa-money-bill-alt"></i> Effective Date: August 07, 2025</p> <!--  Font Awesome -->
            </section>

            <section class="policy-content">

                <!-- <h2>Delegate Registration Cancellations</h2>
                <ul>
                    <li>Cancellations made on or before <b>November 30, 2025</b> will receive a <b>100% refund</b>, less
                        a processing fee of 1000 INR.</li>
                    <li>Cancellations made between <b>November 30, 2025</b> and <b>December 30, 2025</b> will receive a
                        <b>50% refund</b>, less a processing fee of 1000 INR.
                    </li>
                    <li>Cancellations made after <b>December 31, 2025</b> are <b>non-refundable</b>.</li>
                </ul> -->

                <h2>No-Shows</h2>
                <ul>
                    <li>Delegates who do not attend the conference ("no-shows") are not eligible for a refund.</li>
                </ul>

                <h2>Transfer of Registration</h2>
                <ul>
                    <li>Delegate registrations can be transferred to another individual, subject to approval by the CMRE
                        2025 organizing committee. A transfer fee of 500 INR will apply.</li>
                </ul>

                <h2>Conference Cancellation or Postponement</h2>
                <span>In the event that CMRE 2025 is canceled or postponed due to unforeseen circumstances, registered
                    delegates will have the option to:</span>
                <ul>
                    <li>Receive a full refund of their registration fee.</li>
                    <li>Transfer their registration to the rescheduled conference date (if applicable).</li>
                </ul>
                </li>


                <h2>Refund Process</h2>
                <ul>
                    <li>All refund requests must be submitted in writing to <a
                            href="<?php echo "mailto:" . EMAIL; ?>"><?php echo EMAIL; ?></a>.</li>
                    <li>Refunds will be processed within 30 business days of approval.</li>
                    <li>Refunds will be issued to the original payment method used during registration.</li>
                </ul>

                <h2>Exceptional Circumstances</h2>
                <p>Refunds may be considered in exceptional circumstances (e.g., medical emergencies, bereavement) at
                    the discretion of the CMRE 2025 organizing committee. Supporting documentation will be required.</p>

                <h2>Contact Information</h2>
                <p>For any questions regarding this Refund Policy, please contact us at: <a
                        href="<?php echo "mailto:" . EMAIL; ?>"><?php echo EMAIL; ?></a></p>

            </section>

        </main>
        <!-- End Refund Policy Section -->

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
</body>

</html>