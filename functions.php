<?php
	function dav_filter_title($currenttitle, $sep, $seplocal){
		//Grab the site name
		$site_name = get_bloginfo( 'name' );
		// Add the site name after the current page title
		$full_title = $site_name . $currenttitle;
		// If we are on the front_page or homepage append the description
		if ( is_front_page() || is_home() ) {
			//Grab the Site Description
			$site_desc = get_bloginfo( 'description' );
			//Append Site Description to title
			$full_title .= ' ' . $sep . ' ' . $site_desc;
		}
		return $full_title;
	}
	add_filter('wp_title', 'dav_filter_title', 5, 3);
	register_nav_menu('Main Nav Menu', 'Main Nav');
	register_nav_menu('Footer Nav Menu', 'Footer Nav');
	register_nav_menu('Post Menu', 'Post Nav');
	function dav_javascript_scripts() {
		wp_enqueue_script('jquery');
		wp_enqueue_script('main-script', get_template_directory_uri(). '/scripts/script.js', array('jquery'));
	}
	add_action('wp_enqueue_scripts', 'dav_javascript_scripts');
	function dav_style_scripts() {
		wp_enqueue_style('raleway-font', 'https://fonts.googleapis.com/css?family=Raleway', '', '', 'all');
		wp_enqueue_style('roboto-condensed-font', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:700', '', '', 'all');
		wp_enqueue_style('titillium-font', 'https://fonts.googleapis.com/css?family=Titillium+Web:600', '', '', 'all');
		wp_enqueue_style('main-style', get_stylesheet_uri());
		wp_enqueue_style('mobile-style', "stylesheet" , "https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css", '','', 'all');
	}
	add_action('wp_enqueue_scripts', 'dav_style_scripts');
	function upperCaseLevel($input){
		$title = explode('', $input);
		$upperTitle = strtoupper($title[0]);
		return $upperTitle;
	}
	function mytheme_comment($comment, $args, $depth) {
		if ( 'div' === $args['style'] ) {
			$tag       = 'div';
			$add_below = 'comment';
		} else {
			$tag       = 'li';
			$add_below = 'div-comment';
		}
		?>
	    <<?php echo $tag ?> <?php comment_class( empty( $args['has_children'] ) ? '' : 'parent' ) ?> id="comment-<?php comment_ID() ?>">
	    <?php if ( 'div' != $args['style'] ) : ?>
	        <div id="div-comment-<?php comment_ID() ?>" class="comment-body">
	    <?php endif; ?>
	    <div class="comment-author vcard">
	        <?php if ( $args['avatar_size'] != 0 ) echo get_avatar( $comment, $args['avatar_size'] ); ?>
	        <?php printf( __( '<h3 class="fn">' . get_comment_author() .':</h3>')); ?>
	    </div>
	    <?php if ( $comment->comment_approved == '0' ) : ?>
	         <em class="comment-awaiting-moderation"><?php _e( 'Your comment is awaiting moderation.' ); ?></em>
	          <br />
	          <?php else :?>
	             <?php comment_text(); ?>
	             <br />
	    
	    <?php endif; ?>
	
	 
	
	    <div class="reply">
	        <?php comment_reply_link( array_merge( $args, array( 'add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
	    </div>
	    <?php if ( 'div' != $args['style'] ) : ?>
	    </div>
	    <?php endif; ?>
	    <?php
	    }
		
?>