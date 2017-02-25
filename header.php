<!DOCTYPE html>
<html>
<head>
<meta charset="<?php bloginfo('charset')?>;">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
<meta name="description" content="<?php bloginfo('description'); ?>" />
<title><?php wp_title(' | '); ?></title>
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<header>
		<div id="header-container">
			<div id="logo">
				<img src="<?php echo get_template_directory_uri() ?>/images/header_logo.png" alt="David Dataram Header Logo" />
			</div>
			<!-- End of logo div -->
			<div id="company-name-container">
				<img src="<?php echo get_template_directory_uri() ?>/images/fixed_logo.png" alt="David Dataram Header Logo" />
			</div>
			<?php if (!is_singular('post')){?>
			<div id="mobile-nav-icon"><img src="<?php echo get_template_directory_uri() ?>/images/mobile-nav.png" alt="David Dataram Header Logo" /></div>
			<nav id="header-nav-menu">
			<?php 
				$dav_nav_menu = array(
						'container' => false,
						'echo' => false,
						'items_wrap' =>'%3$s',
						'depth' => 0,
						'theme_location' => 'Main Nav Menu'
				);
				echo strip_tags(wp_nav_menu( $dav_nav_menu ), '<a>' );
			?></nav>
			<?php }?>
			<!-- End of navbar -->
		</div>
		<!-- End of header container div -->
	</header>
