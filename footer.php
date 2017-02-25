<footer>
	<?php if (!is_singular('post')){?>
	<?php
	$dav_nav_menu = array (
			'theme_location' => 'Footer Nav Menu',
			'container' => 'nav',
			'container_id' => 'ddata-footer-nav' 
	);
	wp_nav_menu ( $dav_nav_menu );
	?>
	<?php }?>
	<?php wp_footer();?>
	<?php include_once("analyticstracking.php") ?>
</footer>
</body>
</html>