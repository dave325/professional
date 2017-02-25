<section id="services" class="home-panel back-top-panel">
        <?php 
       		$fileName = basename(__FILE__, '.php'); 
       		$title = explode('-', $fileName);?>
       		<h2><?php echo ucfirst($title[1]);?></h2>
       
        <div id="service-container">
        <?php 
        	global $wpdb;
        	$args = array(
        		'category_name' => 'service-list'
        	);
        	$query = new WP_QUERY($args);
        	$i = 0;
        	?> 
        	<?php 
        	if ($query->have_posts()): while ($query->have_posts()) : $query->the_post() 
        	?>
        		<?php if ($i % 3 == 0) {?> <div class="service-list"><?php  }?>
        		<span class="serviceTitle"><?php the_title(); ?></span><?php the_content();?><?php if ($i % 3 != 0) {?><br /><?php }?>
        		<?php $i++; ?>
        	 <?php if ($i % 3 == 0) {?>
        	 		</div>
        	 		<?php } ?>
        	<!--          <div class="service-list">
            <span class="serviceTitle">Freelance Web Designer</span><br/> <p class="first-service-description"></p><br/>
            <span class="serviceTitle">Customizable websites</span><br/> <p>Every project is hand-made and specially created for the client's need.</p><br/>
            <span class="serviceTitle">Graphic Design</span><br/> <p>Create specific illustrations and photo editing using cutting edge programs to guarantee a unique graphic design for your website.</p>
        </div>
        <div class="service-list">
            <span class="serviceTitle">Logo Designer</span><br/> <p>Get unique logos that will represent your website and/or business card.</p><br/>
            <span class="serviceTitle">Strong Client Communication</span><br/> <p>I maintain consistent communication during all phases of the project to ensure that every website can meet the client’s approval. </p><br/>
            <span class="serviceTitle">Wordpress Designer</span><br/> <p>I can create custom wordpress themes for clients to use and control. </p>
        </div>-->
        
       
        <?php endwhile;?>
        <?php endif;?>
         </div>
</section><!--End of Portfolio Screen section -->