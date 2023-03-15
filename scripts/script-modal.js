// function showModal(titleHtml, contentHtml) {
//     const modal = document.createElement('div');
  
//     modal.classList.add('modal');
//     modal.innerHTML = `
//         <div class="modal__inner">
//             <div class="modal__top">
//                 <div class="modal__title">${titleHtml}</div>
//                 <button class="modal__close" type="button">
//                     <span>Cancel</span><svg class="svg-icons">
//                         <use xlink:href="#svg-cancel"></use>
//                     </svg>
//                 </button>
//                 <span>|</span>
//                 <button class="modal__close" type="button">
//                     <span>Save</span><svg class="svg-icons">
//                         <use xlink:href="#svg-save"></use>
//                     </svg>
//                 </button>
//             </div>
//             <div class="modal__content">${contentHtml}</div>
//             <div class="modal__bottom"></div>
//         </div>
//     `;
  
//     const close = modal.querySelector('.modal__close');
//     close.addEventListener('click', () => {
//         document.body.removeChild(modal)
//         // document.querySelector(".header").style.background = "#fff";
//         // document.querySelector(".sidebar").style.background = "#fff";
//         document.querySelector(".header").style.filter = "blur(0)";
//         document.querySelector(".sidebar").style.filter = "blur(0)";
//     });
//     document.body.appendChild(modal);
//   }
  
//   const msgModal = 'New Contract';
//   const msgElement = `
//     <input type="text" placeholder="Contract Name">
//     <select name="Company">
//         <option value="" disabled selected>Company Name</option>
//     </select>
//     <input type="text" placeholder="Address">
//     <input type="text" placeholder="Conditions">
//     <select name="assignee">
//         <option value="" disabled selected>Assignee</option>
//     </select>
//   `;

//   document.querySelector('.modal__button').addEventListener('click', () => {
//     showModal(msgModal, msgElement);
//     // document.querySelector(".header").style.background = "#00000004";
//     // document.querySelector(".sidebar").style.background = "#00000004";
//     document.querySelector(".header").style.filter = "blur(5px)";
//     document.querySelector(".sidebar").style.filter = "blur(5px)";
//   });

document.querySelector('.modal__button').addEventListener('click', () => {
    document.querySelector(".modal").classList.add('modal-show');
});
document.querySelector('.modal__close').addEventListener('click', () => {
    document.querySelector(".modal").classList.remove('modal-show');
});