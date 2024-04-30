const burguerBtn = document.querySelector('.burguer--icon');
const menuMobile = document.querySelector('.menu--mobile');
const closeBtn = document.querySelector('.btn--close');

burguerBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--mobile__hidden');
});

closeBtn.addEventListener('click', () =>{
    menuMobile.classList.add('menu--mobile__hidden');
})


// function changeBgColor(mediaQueryListMobile) {
//     if (mediaQueryListMobile.matches) {
//         document.body.classList.add('bg-green');
//         document.body.classList.remove('bg-purple');

//     } else {
//         document.body.classList.add('bg-purple');
//         document.body.classList.remove('bg-green');
//     }
// }

// const mediaQueryListMobile = window.matchMedia('(min-width: 768px)');

// mediaQueryListMobile.addEventListener('change', () => { changeBgColor(mediaQueryListMobile) });

// changeBgColor(mediaQueryListMobile);