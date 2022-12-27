
const menuBar=document.querySelector('#menu-bar');
const navLinks=document.querySelector('.nav-links');
const navLinks2=document.querySelector('#nav-links2');
const header=document.querySelector('header');
const section=document.querySelector('.section');

menuBar.addEventListener("click" , ()=>{
    menuBar.classList.toggle('active')
    navLinks.classList.toggle('active')
    navLinks2.classList.toggle('active')
    header.classList.toggle('active')
    section.classList.toggle('active')
});

