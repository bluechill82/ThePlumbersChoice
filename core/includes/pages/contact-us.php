<link rel="stylesheet" href="core/css/contact-us.css" type="text/css" media="all" />

<div id="contact-us">

<div id="content-block">

<div id="meat-n-bones">

<!--  This Part holds Dynamic Content-->
 <div id="default-main">
	<div id="contact-us-content">

		<h1>Contact Us</h1>

			<p id="contact-us">
			The Plumber&#39s Choice prides itself on 100% customer satisfaction. If there are any questions about your order or general questions about our products and services, please use the information below to contact us, or simply fill out the contact form and a customer service representative will contact you.
			</p>
			<div id="contact-us-form">
				<?php
					include("core/includes/pages/contact-us/contact-us-form.php")  
				?>
			</div>
			<div id="company-address-schema" itemscope itemtype="http://schema.org/Organization"> 
				<span id="company-name" itemprop="name">The Plumber&#39s Choice</span> 
				<div id="company-address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
					<span id="company-street" itemprop="streetAddress">3655 E La Salle St</span>,
					<span id="company-city" itemprop="addressLocality">Phoenix</span>,
					<span id="company-state" itemprop="addressRegion">AZ</span>.
					<span id="company-zip" itemprop="postalCode">85040</span>
				</div>

				Phone: <span id="company-phone" itemprop="telephone">888 989 4260</span>
			</div>	
			
			<div class="map_canvas">
				<?php
					include("core/includes/pages/contact-us/google-map.php")  
				?>
			</div>

			
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
