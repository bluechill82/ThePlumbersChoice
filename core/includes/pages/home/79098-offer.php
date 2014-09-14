<!-- Offer Schema -->
<h3 id="front-page-product" itemscope="itemscope" itemtype="http://schema.org/Product">
<span id="fp-l1" itemprop="brand">Blue Lightning</span><br />
<span id="fp-l2" itemprop="description">Flexible Magnesium</span><br />
<span id="fp-l3" itemprop="name">Anode Rod</span>
</h3>

<div id="fp-buy">
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="7FYC55HX7M9VL" />
    <table>
        <tbody>
            <tr>
                <td><input type="hidden" name="on0" value="Quantity" />Quantity</td>
            </tr>
            <tr>
                <td><select name="os0">
                <option value="Single">Single $46.97 USD</option>
                <option value="Box of 5">Box of 5 $195.70 USD</option>
                <option value="Box of 10">Box of 10 $326.20 USD</option>
                <option value="Box of 25">Box of 30 $815.40 USD</option>
                </select> </td>
            </tr>
        </tbody>
    </table>
    <input type="hidden" name="currency_code" value="USD" />
    <input class="fp-buy-image" type="image" src="core/images/buy-now.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
    <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" style="border-width: 0px; border-style: solid;" />
</form>
</div>

<h3 id="front-page-offer" itemscope="itemscope" itemprop="offers" itemtype="http://schema.org/Offer">
<span class="fp-l1" itemprop="availability" content="in_stock">In stock! </span>
<br /> 
<span class="fp-l2" itemprop="itemCondition" content="new"> Brand New</span>
<br />
<span class="fp-l3">Available from:</span>
<br />
<span class="fp-l4" itemprop="seller"> The Plumbers Choice</span>
<br />
<span class="fp-l5">				
	<span>(Sale ends 
		<?php
			include ("core/includes/adjustable-sale-date.php")
		?> )
	</span>
</span>
<br />
<span class="fp-l6">
$<span itemprop="price">46.97</span>
and FREE SHIPPING!!
</span>

</h3>