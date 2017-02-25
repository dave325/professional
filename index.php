	<?php get_header(); ?>
		<?php if (is_home() || is_front_page()){
					 get_template_part('content' , 'home');
					 get_template_part('content' , 'services');
					 get_template_part('content' , 'portfolio');
					 get_template_part('content' , 'blog');
					 get_template_part('content' , 'contact');
			 }?>
     <?php get_footer(); ?>