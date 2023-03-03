document.querySelectorAll('.sidebar--item').forEach((button) => {
    button.addEventListener('click', ()=>{
        const sidebar = button.parentElement;
        sidebar.querySelectorAll('.sidebar--item').forEach(
            (btn) => {
                btn.classList.remove('button--active');
            }
        );
        button.classList.add('button--active');
    });
});

window.onload=function(){
    let toggleOpen = document.querySelector('.sidebar-toggle-open');
    let text = document.querySelectorAll('.sidebar-text');
    toggleOpen.addEventListener('click', ()=>{
        text.forEach((ele) => {ele.style.display = 'none';})
        toggleOpen.classList.toggle('sidebar-toggle-close');
        // toggleOpen.classList.remove('sidebar-toggle-open');
    });

    let toggleClose = document.querySelector('.sidebar-toggle-close');
    text = document.querySelectorAll('.sidebar-text');
    if(toggleClose){
        console.log('wqe');
        toggleClose.addEventListener('click', ()=>{
            text.forEach((ele) => {ele.style.display = 'block';})
            // toggleClose.classList.add('sidebar-toggle-open');
            // toggleClose.classList.remove('sidebar-toggle-close');
        });
    }
}
