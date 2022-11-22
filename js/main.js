let headerNav = document.getElementById('header-nav');
let burgerBtn = document.querySelector('.burger-btn');
let body = document.querySelector('body');

burgerBtn.addEventListener('click', function(){
    headerNav.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    body.classList.toggle('close');
});