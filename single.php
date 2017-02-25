<?php get_header();?>
<?php get_template_part('content', 'home')?>
<?php while(have_posts()): the_post()?>
<section id="dav-blog-post-<?php the_ID(); ?>" class="home-panel back-top-panel dav-blog-post">
<article class="blog-container">
<h2><?php the_title();?></h2>
<time datetime="<?php the_time('F j, Y') ?>"><?php the_time('F j, Y') ?></time>
<div class="my-blog-content"><?php the_content();?></div>
<a href="<?php echo get_home_url();?>"> Return to home</a>
</article>
<?php get_template_part( 'content', get_post_format() );
if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;?>
<?php endwhile;?>
<a href="<?php echo get_home_url();?>"> Return to home</a>
</section>
<?php get_footer();?>