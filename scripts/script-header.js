const template = document.createElement('template');
const sidebarTemplate = document.createElement('template');

template.innerHTML = `
    <h2 class="header__title">Feature Tester</h2>
    <div class="header__profile">
        <a href="#">
            <i class="fa-regular fa-bell bell-icon"></i>
        </a>
        <a href="#">
            <svg class="svg-avatar">
                <use xlink:href="#svg-avatar"></use>
            </svg>
        </a>
    </div>
    `;

document.getElementsByTagName("header")[0].appendChild(template.content);

document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId) =>{
       const toggle = document.getElementById(toggleId),
       nav = document.getElementById(navId),
       bodypd = document.getElementById(bodyId);
       if(toggle && nav && bodypd){
       toggle.addEventListener('click', ()=>{
        console.log('hello');
       nav.classList.toggle('show')
       toggle.classList.toggle('bx-x')
       bodypd.classList.toggle('body-pd')
       })
       }
    }
    
    showNavbar('header-toggle','side-bar','body-pd')
    
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    });
