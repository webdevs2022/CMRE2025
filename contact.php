<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>CMRE 2025 | Contact Us</title>

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

        <!--Page Title-->
        <section class="page-title hero-bg">
            <div class="auto-container">
                <h1>Contact Us</h1>
                <ul class="bread-crumb clearfix">
                    <li><a href="index.php">Home</a></li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </section>
        <!--End Page Title-->

        <!-- Contact Page Section -->
        <section class="contact-page-section">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="contact-column col-lg-4 col-md-12 col-sm-12 order-2">
                        <div class="inner-column">
                            <div class="sec-title">
                                <h2>Contact Info</h2>
                            </div>
                            <ul class="contact-info">
                                <li>
                                    <span class="icon fa fa-building"></span>
                                    <p><strong>Professional Event Organizer</strong></p>
                                    <p style="margin-bottom: 10px; font-size: 16px; color: #000; font-weight: 600;">Rx
                                        Events</p>
                                    <p>401, Shyamak Complex,</p>
                                    <p>Opp. Sahjanand College, Ambavadi,</p>
                                    <p>Ahmedabad, Gujarat - 380015</p>
                                </li>
                                <li>
                                    <span class="icon icon_compass_alt"></span>
                                    <p><strong>For General, Travel & Accommodation</strong></p>
                                    <p style="margin-bottom: 10px; font-size: 16px; color: #000; font-weight: 600;">Mr.
                                        Rahul Sharma</p>
                                    <div class="text"><a href="tel:+919099331396"> +91
                                            9099331396</a></div>
                                    <div class="text"><a href="mailto:rahul@rxevents.co.in">rahul@rxevents.co.in</a>
                                    </div>
                                </li>
                                <li>
                                    <span class="icon icon_info"></span>
                                    <p><strong>For Registration</strong></p>
                                    <p style="margin-bottom: 10px; font-size: 16px; color: #000; font-weight: 600;">Mr.
                                        Ankit Mishra</p>
                                    <div class="text"><a href="tel:+919099331357"> +91
                                            9099331357</a></div>
                                    <div class="text"><a href="mailto:ankit@rxevents.co.in">ankit@rxevents.co.in</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Form Column -->
                    <div class="form-column col-lg-8 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <div class="contact-form">
                                <div class="sec-title">
                                    <h2>Get in Touch</h2>
                                </div>
                                <form method="post" id="contact-form">
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="name" placeholder="Name" required="">
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="phone" placeholder="Phone" required="">
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email" required="">
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="subject" placeholder="Subject" required="">
                                        </div>

                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>

                                        <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <button class="theme-btn submit-btn" type="submit" name="submit-form"
                                                style="background: linear-gradient(90deg, #6A144A 0%, #ba2b86ff 100%); color: #fff; border: none; border-radius: 8px; padding: 16px 48px; font-size: 20px; font-weight: 700; box-shadow: 0 4px 16px rgba(26,35,126,0.12); transition: all 0.3s ease; position: relative; overflow: hidden; width: 100%; text-align: center;"
                                                onmouseover="this.style.boxShadow='0 8px 24px rgba(26,35,126,0.2)';"
                                                onmouseout="this.style.boxShadow='0 4px 16px rgba(26,35,126,0.12)';"><span
                                                    class="btn-title"
                                                    style="position: relative; z-index: 2; color: #fff; font-size: 20px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Submit
                                                    Now</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Contact Page Section -->

        <!-- Map Section -->
        <section class="map-section">
            <div class="auto-container">
                <div class="map-outer">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.977021611099!2d72.5448866!3d23.0246159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85287fc18fb3%3A0x4b44456135db26e4!2sRx%20Events!5e0!3m2!1sen!2sin!4v1755259978397!5m2!1sen!2sin"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
        <!-- End Map Section -->
        <br>
        <br>
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
    <script src="js/validate.js"></script>
    <script src="js/script.js"></script>
    <!-- Color Setting -->
    <script>
        function showToast(message) {

        }
        document
            .getElementById("contact-form")
            .addEventListener("submit", function (e) {
                e.preventDefault();
                if (document.querySelectorAll('.error').length > 5) { return; }
                const formData = new FormData(this);
                document.querySelector('.preloader').style.display = "block";

                fetch("https://tech-itsolutions.com/contact-forms/cmre2025-contact.php", {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => response.text())
                    .then((data) => {
                        // document.getElementById("responseMessage").textContent = data;
                        // document.getElementById("responseMessage").style.color =
                        //   "#7a90c9";
                        console.log("Form submitted successfully:", data);
                        document.getElementById("contact-form").reset();
                        showToast("Success! Your request has been submitted.");
                    })
                    .catch((error) => {
                        console.log("Form failed:", error);
                        document.getElementById("contact-form").reset();
                        showToast("Success! Your request has been submitted.");
                        // document.getElementById("responseMessage").textContent =
                        //   "Error: " + error;
                        // document.getElementById("responseMessage").style.color = "red";
                    })
                    .finally(() => {
                        document.querySelector('.preloader').style.display = "none"
                        alert("Form submitted successfully!");
                        showToast("Success! Your request has been submitted.");
                    });
            });
    </script>

</body>

</html>