document.addEventListener("DOMContentLoaded", function(event) {
    const showNavbar = (toggleId, navId) =>{
       const toggle = document.getElementById(toggleId),
       nav = document.getElementById(navId);
       toggle.addEventListener('click', ()=>{
       nav.classList.toggle('show')
       })
    }
    
    showNavbar('header-toggle','side-bar')
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    

    const header_toggle = document.querySelector('#header-toggle')
    const expand = document.querySelector('.svg-expand');
    const shrink = document.querySelector('.svg-shrink');
    header_toggle.addEventListener('click', ()=>{
      if(shrink.style.display == 'none'){
         shrink.style.display = 'block';
         expand.style.display = 'none';
      }
      else{
         shrink.style.display = 'none';
         expand.style.display = 'block';
      }
    });
});

    