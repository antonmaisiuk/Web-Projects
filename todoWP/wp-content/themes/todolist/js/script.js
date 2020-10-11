
jQuery('#add').on('click', function (e) {
     e.preventDefault();
         var title = jQuery('#task').val();
        //  console.log(title);
           if (title === ''){
               alert('Вы ничего не ввели');
               return;
                } else {
                $.ajax({
                    url: 'wp-admin/admin-ajax.php',
                    type: 'POST',
                    data: {
                        action: 'ajax_order',
                        title: title
                    }, // можно также передать в виде массива или объекта
                    success: function (data) {
                    window.location.reload();
                    }
                });
            }
            });


jQuery('.basket').on('click', function (event) {
    var labelVal = $(this).attr('id').replace('post-', '');
     console.log(labelVal);

    $.ajax({
        url: 'wp-admin/admin-ajax.php',
        type: 'POST',
        data: {
            action: 'ajax_delete',
            labelVal: labelVal
        }, 
        success: function (data) {
            
            console.log('SEND');
            window.location.reload();
        }
    });
});
