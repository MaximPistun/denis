const allCards = document.querySelectorAll('.directory__card')

if(allCards.length > 0){
    for (let index = 0; index < allCards.length; index++){
        let card = allCards[index]
        card.addEventListener('mouseenter', sliderGo)
        
        function sliderGo(){
            const images = card.querySelectorAll('.directory__slider-img');
            const sliderLine = card.querySelector('.slider-line');
            let prevBtn = card.querySelector('.directory__btn--prev');
            let nextBtn = card.querySelector('.directory__btn--next');


            let count = 0; //Сыллается нак активный слайдер
            let width;
            
            function init(){
                width = card.querySelector('.slider').offsetWidth;
                sliderLine.style.width = width*images.length + 'px';
                images.forEach(item => {
                    item.style.width = width + 'px';
                    item.style.height = 'auto';
                });
                rollSlider()
            }
            window.addEventListener('resize', init)
            init();
            prevBtn.addEventListener('click', function () {
                count--;
                if(count< 0){
                    count = images.length -1;
                }
                rollSlider();
            });

            nextBtn.addEventListener('click', function () {
                count++;
                if(count >= images.length){
                    count = 0;
                }
                rollSlider();
            });

            sliderLine.addEventListener('touchstart',  handleTouchStart, false);
            sliderLine.addEventListener('touchmove',handleTouchMove, false);

            let x1 = null;

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
                if(xDiff > 0) {
                    console.log('right');
                    if(count!=0){
                        count--;
                    }
                    if(count>= images.length){
                        count = 0;
                    }
                    rollSlider();
                    } else {
                        console.log('left');
                        count++;
                        if(count >= images.length){
                            count = 0;
                        }
                        rollSlider();
                    };
                x1 = null;
         
            }
            function rollSlider(){
                sliderLine.style.transform = 'translate(-' + count * width + 'px)'
            }

        }

    }
}
