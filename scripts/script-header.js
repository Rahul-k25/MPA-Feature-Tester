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


// sidebarTemplate.innerHTML = `<a href="dashboard.html" class="sidebar--item">
//     <svg class="svg-sidebar-icons">
//         <use xlink:href="#svg-dashboard"></use>
//     </svg> <span class="sidebar-text">Dashboard</span></a>
//     <a href="tasks.html" class="sidebar--item button--active">
//         <svg class="svg-sidebar-icons">
//             <use xlink:href="#svg-tasks"></use>
//         </svg> <span class="sidebar-text">Tasks</span></a>
//     <a href="products.html" class="sidebar--item">
//         <svg class="svg-sidebar-icons">
//             <use xlink:href="#svg-products"></use>
//         </svg> <span class="sidebar-text">Products</span></a>
//     <a href="contracts.html" class="sidebar--item">
//         <svg class="svg-sidebar-icons">
//             <use xlink:href="#svg-deals"></use>
//         </svg> <span class="sidebar-text">Contracts</span></a>
//     <div class="sidebar__separator"></div>
//     <a href="login.html" class="sidebar--item">
//         <svg class="svg-sidebar-icons">
//             <use xlink:href="#svg-logout"></use>
//         </svg> <span class="sidebar-text">Log out</span></a>
//     <a href="#" class="sidebar--item sidebar-toggle-open">
//         <svg class="svg-sidebar-icons">
//             <use xlink:href="#svg-l-arrow"></use>
//         </svg> <span class="sidebar-text">Toggle sidebar</span>
//     </a>`;

// document.getElementsByClassName("sidebar")[0].appendChild(sidebarTemplate.content);

document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId) =>{
       const toggle = document.getElementById(toggleId),
       nav = document.getElementById(navId),
       bodypd = document.getElementById(bodyId);
       //  headerpd = document.getElementById(headerId)
       
       // Validate that all variables exist
       if(toggle && nav && bodypd){
       toggle.addEventListener('click', ()=>{
        console.log('hello');
       // show navbar
       nav.classList.toggle('show')
       // change icon
       toggle.classList.toggle('bx-x')
       // add padding to body
       bodypd.classList.toggle('body-pd')
       // add padding to header
       //  headerpd.classList.toggle('body-pd')
       })
       }
    }
    
    showNavbar('header-toggle','side-bar','body-pd')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });
