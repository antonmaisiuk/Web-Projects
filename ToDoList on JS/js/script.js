const message = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo'),
    todoLabel = document.querySelector('.todo_label');
let baskets, idDeleteTask; 
let i = localStorage.length;
console.log(baskets);
displayMessages();

let todoList = [];
    
    addButton.addEventListener('click', addTask);

    function addTask() {
        
        if (message.value != ""){

            let newTodo = {
                id: i,
                todo: message.value,                
            };
            localStorage.setItem(i,message.value);
            i++;
            //todoList.push(newTodo);
            message.value = '';
            displayMessages();
    
            // localStorage.setItem('todo', JSON.stringify(todoList));
        } else{
            alert("Write your task");
        }
    }

    function displayMessages() {

        // if (todoList.length == 0){
        //     todo.innerHTML = '';
        // } else{

            let displayMessage = '';

            for (let j = 0; j < localStorage.length; j++) {
                displayMessage += `
                <li class='${i}'>
                    <span>
                        <input type='checkbox' id='item_${i}' class = "todoItemCheckbox"}>
                        
                        <label for='item_${j}'>${localStorage.getItem(j)}</label>
                    </span>
                    <img src="https://img.icons8.com/wired/64/000000/delete-forever.png" id='${i}' class='basket'>
                </li>            
                `;
                todo.innerHTML = displayMessage;                
                
            }
        }    
        
    // baskets = document.querySelectorAll('.basket');                
    //     console.log(baskets);
    //     baskets.addEventListener('click', function(e){
    //         idDeleteTask = e.target.id;
    //         console.log('WORK');
    //         localStorage.removeItem(idDeleteTask);
    //         // todoList.splice(liToDelete, 1);
    //         displayMessages();
    //     });
    function deleteTask(event) {
                            let liToDelete = event.target.id;
                            console.log('WORK');
                            localStorage.removeItem(liToDelete);
                            // todoList.splice(liToDelete, 1);
                            displayMessages();
    }
            // localStorage.forEach(function(item, i){
            //     displayMessage += `
            //     <li class='${i}'>
            //         <span>
            //             <input type='checkbox' id='item_${i}' class = "todoItemCheckbox"}>
                        
            //             <label for='item_${i}'>${item}</label>
            //         </span>
            //         <img src="https://img.icons8.com/wired/64/000000/delete-forever.png" id='${i}' class='basket'>
            //     </li>            
            //     `;
            //     todo.innerHTML = displayMessage;   
            //     let basket = document.querySelectorAll('.basket');           
                      
            //     [].forEach.call(basket, function (e) {
            //         e.addEventListener('click', function (event) {
            //                 let liToDelete = event.target.id;
                            
            //                 todoList.splice(liToDelete, 1);
            //                 displayMessages();
            //         });
            //     });
            // });
            // todoList.forEach(function(item, i){
            //     displayMessage += `
            //     <li class='${i}'>
            //         <span>
            //             <input type='checkbox' id='item_${i}' class = "todoItemCheckbox"}>
                        
            //             <label for='item_${i}'>${item.todo}</label>
            //         </span>
            //         <img src="https://img.icons8.com/wired/64/000000/delete-forever.png" id='${i}' class='basket'>
            //     </li>            
            //     `;
            //     todo.innerHTML = displayMessage;   
            //     let basket = document.querySelectorAll('.basket');           
                      
            //     [].forEach.call(basket, function (e) {
            //         e.addEventListener('click', function (event) {
            //                 let liToDelete = event.target.id;
                            
            //                 todoList.splice(liToDelete, 1);
            //                 displayMessages();
            //         });
            //     });
            // });
        // }

    



    // if (localStorage.getItem('todo')){
    //     todoList = JSON.parse(localStorage.getItem('todo'));
    //     displayMessages();
    // }




    //  console.log(basket);
    // todo.addEventListener('change', function(event){
    //     console.log("ddd");
    //     let valueLabel = todo.querySelector('[for=' + event.target.getAttribute('id') + ']').innerHTML;
        
    //     todoList.forEach(function(item){
    //         if (item.todo === valueLabel){
    //             item.checked = !item.checked;
    //               localStorage.setItem('todo', JSON.stringify(todoList));
                
    //         }
    //     });

    // });



        
    // console.log(localStorage.length);
   
   
    
   
        //  let classDelete = liToDelete.getAttribute();
        //  console.log(classDelete);
        //  console.log('');
        
        // let todoList = JSON.parse(localStorage.getItem('todo'));
        // console.log(todoList[classDelete]);
        //tdoList = JSON.parse(localStorage.getItem('todo'));

        // console.log(localStorage.todoList);
        // todoList.forEach( (e)=>{
        //     if (todoList.value == classDelete) {
        //         e.pop();
        //     }
        // });      

        // console.log(todoList);
        // for (let i = 0; i < todoList.length; i++) {
        //     // let exmpl = JSON.parse(todoList[i]);
        //     if (todoList.value == ) {                
                
        //     }
        // }
        // console.log(todoList);
        // displayMessages();

        // insert the new stringified array into LocalStorage
        //localStorage.setItem('todo', JSON.stringify(todoList));
     /*   console.log();
        let delete = todoList[classDelete];
        delete.push(todoList);
        localStorage.setItem('todo', JSON.stringify(todoList));



       
        */
   