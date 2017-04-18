<section id="portfolio"
	class="content parallax-window-2 scrolling-screen">
	<?php
	$args = array (
			'pagename' => 'portfolio' 
	);
	$query = new WP_QUERY ( $args );
	if ($query->have_posts ()) :
		while ( $query->have_posts () ) :
			$query->the_post ()?>
		<?php the_content();?>
	
	<?php endwhile;?>
	<?php endif;?>
	<!--End of social media bar -->
</section>
<!--End of Parralax Scrolling window 2 -->