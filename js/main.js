// function menuBar(){ 
// let menuBar=document.getElementById('menu-bar')
// menuBar.style.backgroundColor="red"
// console.log(menuBar)
// }

const menuBar=document.querySelector('#menu-bar');
const navLinks=document.querySelector('.nav-links');

menuBar.addEventListener("click" , ()=>{
    menuBar.classList.toggle('active')
    navLinks.classList.toggle('active')
});
