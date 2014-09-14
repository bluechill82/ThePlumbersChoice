<?php
/* Set e-mail recipient */
$myemail = "theplumberschoice@gmail.com";

/* Captcha */
$captcha = check_input($_POST['captcha']);

if (!preg_match("/10/", $captcha))
{
show_error("You were not successful at entering the correct answer<br /> to simple math problem proving you are human ");
}
/* Check all form inputs using check_input function */
$FirstName = check_input($_POST['FirstName'], "Enter your first name");
$LastName = check_input($_POST['LastName'], "Enter your last name");
$Email = check_input($_POST['Email']);
$PhoneNumber = check_input($_POST['PhoneNumber']);
$Questions = check_input($_POST['Questions'], "We look forward to hearing what you have to say");

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $Email))
{
show_error("E-mail address not valid");
}
/* Let's prepare the message for the e-mail */
$Questions = "

First Name: $FirstName
Last Name: $LastName
E-mail: $Email
Phone Number: $PhoneNumber

Questions:
$Questions

";

/* Send the message using mail() function */
mail($myemail, $Email, $Questions);

/* Redirect visitor to the thank you page */
header('Location: https://s3-us-west-2.amazonaws.com/theplumberschoice/order-now');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}

function show_error($myError)
{
?>

<html>
<head>

<title>Error Page | The Plumbers Choice </title>
<meta name="description" content="">
<meta name="keywords" content="anode, choice, rod, lightning, blue, rods, plumbers, flexible, magnesium">	
<meta name="robots" content="index,follow" />

<div align="center" id="head-tags">
<?php
    include("core/includes/head-tags.php");
?>
</div>
</head>

<body style="background-image: url(core/images/body-background.png); background-size: 100%; background-repeat: no-repeat no-repeat;height: 98%;width: 100%;position: absolute;overflow: hidden;">
<!--        Header          -->
<div align="center" id="header">
<?php
    include("core/includes/header.php");
?>
</div>

<!--       Nav Bar         -->
<div align="center" id="nav-bar">
<?php
    include("core/includes/nav-bar.php")
?>
</div>

<!--       Content Window         -->
<div align="center" id="content">
  <!--div align="center" id="left-content">
  
  </div-->
  
  <div align="center" id="center-content">

<link rel="stylesheet" type="text/css" href="core/css/home-page.css">

<div id="contact-us-slide-one"> 
	<a id="contact-us-slide-one"> 
		<link rel="stylesheet" href="core/css/contact-us.css" type="text/css" media="all" />

		<div id="contact-us">

			<div id="content-block">

				<div id="meat-n-bones">

					<!--  This Part holds Dynamic Content-->
					<div id="default-main">
						<div id="error-message">
							<p>Please correct the following error:</p>
							<strong><?php echo $myError; ?></strong>
							<p>Hit the back button and try again</p>
						</div>
					</div>
				</div>
 <!-- End of Dynamic Content -->
 
			</div>
		</div>
	<div id="home-bottom">
		<?php
		include ("core/includes/pages/home/home-bottom.php")
		?>
	</div>

	</a>
</div>
  
  </div>
</div>

<!--       Footer         -->
<div align="center" id="footer">
<?php
    include("core/includes/footer.php")
?>
</div>


</body>
</html>

<?php
exit();
}
?>