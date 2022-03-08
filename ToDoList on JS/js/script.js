let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add');
    todo = document.querySelector('.todo'),
    todoLabel = document.querySelector('.todo_label'),
    basket = '';

let i = 0;

let todoList = [];

    
    if (localStorage.getItem('todo')){
        todoList = JSON.parse(localStorage.getItem('todo'));
        displayMessages();
    
}

    addButton.addEventListener('click', function(){

        let newTodo = {
            todo: addMessage.value,
            checked: false,
            important: false,
            value: i
        };
        todoList.push(newTodo);
        addMessage.value = '';
        displayMessages();
        i++;
    
        localStorage.setItem('todo', JSON.stringify(todoList));
        
    });

    function displayMessages() {

        let displayMessage = '';
        // console.log(tdList);
        todoList.forEach(function(item, i){
            displayMessage += `
            <li class='${i}'>
                <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
                <label for='item_${i}'>${item.todo}</label>
                <img src="https://img.icons8.com/wired/64/000000/delete-forever.png" class='basket'>
            </li>            
            `;
            todo.innerHTML = displayMessage;   
            basket = document.querySelectorAll('.basket');
   

            
                   
        });
    }
    //  console.log(basket);
    todo.addEventListener('change', function(event){
        
        let valueLabel = todo.querySelector('[for=' + event.target.getAttribute('id') + ']').innerHTML;
        
        todoList.forEach(function(item){
            if (item.todo === valueLabel){
                item.checked = !item.checked;
                  localStorage.setItem('todo', JSON.stringify(todoList));
                
            }
        });

    });
    let liDelete;
    // console.log(localStorage.length);
   [].forEach.call(basket, function (e) {
       e.addEventListener('click', function (event) {
            liDelete = event.target;
            liDelete = liDelete.parentNode.parentNode.removeChild(liDelete.parentNode);
            console.log();
            // console.log(liDelete);
            todoDelete();
            // localStorage.removeItem('todo', JSON.stringify(todoList));
       });
   });
   

   function todoDelete() {
         let classDelete = liDelete.getAttribute('class');
        //  console.log(classDelete);
        //  console.log('');
        
        // let todoList = JSON.parse(localStorage.getItem('todo'));
        // console.log(todoList[classDelete]);
        tdoList = JSON.parse(localStorage.getItem('todo'));

        // console.log(localStorage.todoList);
        
        for (let i = 0; i < todoList.length; i++) {
            // let exmpl = JSON.parse(todoList[i]);
            if (todoList.value == classDelete) {
                todoList.splice(i, 1);
            }
        }

        // insert the new stringified array into LocalStorage
        localStorage.setItem('todo', JSON.stringify(todoList));
     /*   console.log();
        let delete = todoList[classDelete];
        delete.push(todoList);
        localStorage.setItem('todo', JSON.stringify(todoList));



       
        */
   }