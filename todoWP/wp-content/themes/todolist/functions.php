<?php
	add_action('wp_enqueue_scripts', 'childhood_styles');
	add_action('wp_enqueue_scripts', 'childhood_scripts');

	


	function childhood_styles(){
		wp_enqueue_style( 'childhood-style', get_stylesheet_uri() );
	};

	function childhood_scripts(){
			
			wp_enqueue_script( 'childhood-scripts', get_template_directory_uri() . '/js/script.js', array('jquery'), null, true);
	};



	// AjAX
add_action( 'wp_ajax_ajax_order', 'test_function' ); 
add_action( 'wp_ajax_nopriv_ajax_order', 'test_function' );  
 
function test_function(){
		$post_data = array(
			'post_title'    => $_POST['title'],
			'post_content'  => 'Здесь должен быть контент (текст) записи.',
			'post_status'   => 'publish',
			'post_author'   => 1,
			'post_category' => array(8,39)
		);

		
		$post_id = wp_insert_post( wp_slash($post_data) );
	die; 
}


// Delete

add_action( 'wp_ajax_ajax_delete', 'del_function' ); 
add_action( 'wp_ajax_nopriv_ajax_delete', 'del_function' );  
 
function del_function(){
		$deleted = wp_delete_post($_POST['labelVal'], true );
		die; 
}

?>