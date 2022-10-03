

// Свайпер-слайдер для отзывов
const column = document.querySelectorAll('.slider .slider-line .reviews__column .reviews__item');
const sliderLine = document.querySelector('.slider-line');
let widthWindow = window.innerWidth;
let styleSliderLine = getComputedStyle(sliderLine)
let gapSliderLine = parseInt(styleSliderLine.gap);
let widthColumn = document.querySelector('.reviews__column').offsetWidth + gapSliderLine;
console.log(gapSliderLine);


let count = 0;
let width;

function init (){
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*column.length + 'px';
}
window.addEventListener('resize', init)
init()
document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if(count< 0){
        count = column.length -1;
    }
    rollSlider();
});
document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if(count>= column.length){
        count = 0;
    }
    rollSlider();
});


sliderLine.addEventListener('touchstart',  handleTouchStart, false)
sliderLine.addEventListener('touchmove',handleTouchMove, false)

let x1 = null

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
}
function handleTouchMove(event) {
    if(!x1){
        return false;
    }
    let x2 = event.touches[0].clientX;
    let  xDiff = x2 - x1;
    console.log(xDiff);
 
    if(xDiff > 0) {
        console.log('right');
        if(count!=0){
            count--;
        }
        if(count>= column.length){
            count = 0;
        }
        rollSlider();
        } else {
            console.log('left');
            count++;
            if(count>= column.length){
                count = 0;
            }
            rollSlider();
        };
    x1 = null;
}
function rollSlider(){
    sliderLine.style.transform = 'translate(-' + count * widthColumn + 'px)'
}
