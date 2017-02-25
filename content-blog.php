<section id="blog" class="home-panel back-top-panel">
<div id="blog-container">
 <?php 
       		$fileName = basename(__FILE__, '.php'); 
       		$title = explode('-', $fileName);?>
       		<h2><?php echo ucfirst($title[1]);?></h2>
<?php
global $wpdb;
$args = array(
		'category_name' => 'blog-list'
);
$query = new WP_QUERY($args);
$i = 0;
?>
        	<?php 
        	if ($query->have_posts()): while ($query->have_posts()) : $query->the_post() 
        	?>
        		<?php if ($i % 3 == 0) {?> <div class="service-list"><?php  }?>
        		<a href="<?php echo get_permalink()?>"><span class="serviceTitle"><?php the_title(); ?></span></a><?php the_excerpt();?><?php if ($i % 3 != 0) {?><br /><?php }?>
        		<?php $i++; ?>
        	 <?php if ($i % 3 == 0) {?>
        	 		</div>
        	 		<?php } ?>
       
        <?php endwhile;?>
        <?php endif;?>
         </div>
         </div>
         
         
         
         
         
         
         
         
         
         
         
         
         
