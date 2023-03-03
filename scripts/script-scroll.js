document.querySelector('.show-item').addEventListener('click', ()=>{
    document.querySelectorAll('.show-less').forEach(element => {
        element.classList.add('show-more');
        element.classList.remove('show-less');
    });
});