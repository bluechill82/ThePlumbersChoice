<form action="core/includes/pages/contact-us/mailer.php" method="post">
	<span id="contact-us-form-line-1">
		<span id="firstname">First Name: <input type="text" name="FirstName"></span>
		<span id="lastname">Last Name: <input type="text" name="LastName"></span>
	</span>
	<br>
	<span id="contact-us-form-line-2">
		<span id="email">Email: <input type="text" name="Email"></span>
		<span id="phonenumber">Phone Number: <input type="text" name="PhoneNumber"></span>
	</span>
	<br>
	<span id="question">Comments / Questions: <textarea rows="6" cols="40" name="Questions"></textarea></span>
	<br>
	<span id="captcha">Are You Human?<br />4 + 6 =</span><input id="captcha-box" type="text" name="captcha" />
	<input id="submit-button" type="submit" name="submit" value="Submit Question">
  </form>
  