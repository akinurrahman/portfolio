

  // section hover
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });
    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
  };
// responsive navbar
const menu = document.querySelector('.hamburger-container')
const hamburger = document.querySelector('.fa-solid')
const nav = document.querySelector('.navbar')
menu.addEventListener('click',()=>{
hamburger.classList.toggle('fa-xmark')
if(hamburger.contains="fa-xmark"){
  nav.classList.toggle('active')
}
})

//  resume comming soon alert 
const alertt = document.querySelector('.alert')
alertt.addEventListener('click',()=>{
  alert('Comming soon')
})
