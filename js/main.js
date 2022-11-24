let headerNav = document.getElementById('header-nav');
let burgerBtn = document.querySelector('.burger-btn');
let body = document.querySelector('body');

burgerBtn.addEventListener('click', function(){
    headerNav.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    body.classList.toggle('closed');
});

// lang-bar
let basicLang = document.querySelector('.basic-lang');
    basicLang.addEventListener('click', function(e){
    e.preventDefault();
    basicLang.classList.toggle('active');
});

// slick slider
$('.carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 601,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 1
            }
        },
    ]
});