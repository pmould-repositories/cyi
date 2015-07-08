	<div class="footer">
		<div class="inner-fluid">
			<p>Copyright &copy; 2014-2015 Culturally Yours Interpreting,
				Inc-All Rights Reserved.</p>
		</div>
	</div>
</body>

<script type="text/javascript">
	$(document).ready(
			function(e) {
				$('.item')
						.click(
								function(e) {
									if ($(this).next('.item-data').css(
											'display') != 'block') {
										$('.active').slideUp('fast')
												.removeClass('active');
										$(this).next('.item-data').addClass(
												'active').slideDown('slow');
									} else {
										$('.active').slideUp('fast')
												.removeClass('active');
									}
								});
			});

	//Modal script
		//close modal when done
		$('.close,#cancel').click(function(){
			$('.modal-holder,.modalBox').hide();
		});
		//show correct form on click
		$('.admin-controls p ').click(function(){
			var box = "#" + this.className;
			$('.modal-holder'+','+box).show();
		});
</script>
</html>