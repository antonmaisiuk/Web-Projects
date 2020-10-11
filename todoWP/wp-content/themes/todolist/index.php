<?php
	get_header();
?>

    <div class="container">

        <div class="todo_list">
            <h1>Твой ToDo list</h1>
            <form method="POST" action="" id="create_new_todo">

				<input type="text" id='task' name="message" placeholder="Описание задачи">
				<input type="hidden" name="action" value="myaction" />
                <button type="submit" id="add">Добавить</button>
			</form>
			
            <div class="wrapper">
                <ul id="todo">
					<?php
						if( have_posts() ){
						 	while( have_posts() ){
						 		the_post();
						 		?>
						 		<li <?php post_class(); ?> id="post-<?php the_ID(); ?>">
						 			
						 			<label for='item_<?php post_class(); ?>'><?php the_title(); ?></label>
						 			<input type="button" name="basket" id="post-<?php the_ID(); ?>" class='basket'></input>
						 		</li> 
								 <?php
								 
								
						 	}							
						 }
						 else {
						 	echo "<p id='notask'>Тут пусто, исправь это)</p>";
						}
                        ?>
						
				</ul>
            </div>

        </div>

	</div>
	
	
<?php get_footer(); ?>