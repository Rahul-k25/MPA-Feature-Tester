const showItems = document.querySelector('.show-item');
showItems.addEventListener('click', ()=>{
    const tasks = document.querySelectorAll('.show-less');
    if(tasks.length > 0){
        const showTasks = tasks.length > 3 ? 3 : tasks.length;
        for(var i = 0; i < showTasks; i++){
            tasks[i].classList.remove('show-less');
        }
        if(tasks.length < 3){
            showItems.parentNode.removeChild(showItems);
        }
    }
});