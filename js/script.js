"use strict"
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    },
};
if (isMobile.any()) {
    document.body.classList.add('_touch');
}else{
    document.body.classList.add('_pc');
}


// drop для планшета
const dropDowns = document.querySelectorAll('.drop')

if(dropDowns.length > 0){
    for(let index = 0; index < dropDowns.length; index++){
        const dropDown = dropDowns[index];
        document.addEventListener('click', dropMenu)
        function dropMenu(event){
            if(event.target.closest('.drop')){
                dropDown.classList.toggle('_active')
            }
            if(!event.target.closest('.header__sub-list' && '.drop')){
                dropDown.classList.remove('_active')
            }
        }
    }
}

// Бургер
const burger = document.querySelector('.burger')
const munuBody = document.querySelector('.header__menu')
document.addEventListener('click', burgerMenu);
function burgerMenu(event){
    if(event.target.closest('.burger')){
        burger.classList.toggle('_active')
    };
    if(!event.target.closest('.burger') && !event.target.closest('.drop')){
        burger.classList.remove('_active')
    }
    if(event.target.closest('.header__sub-link')){
        burger.classList.remove('_active')
    }
    if(burger.classList.contains('_active')){
        munuBody.classList.add('_active')
    }
    if(!burger.classList.contains('_active')){
        munuBody.classList.remove('_active')
    }
}

