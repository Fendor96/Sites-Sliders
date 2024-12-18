let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');
/*
nextDom.onclick = function () {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}
*/

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeout = setTimeout (()=>{
    nextDom.click();

}, timeAutoNext);
let runAutoRun;

function showSlider(type)   {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next'); 

    }else{
        let positionLastItem = itemSlider.length-1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemSlider[positionLastItem]);
        carouselDom.classList.add('prev');
    } /* this part is for when the user will press the button prev, on the first image, the last item will be displayed on first place*/

    clearTimeout (runTimeout);
    runTimeout = setTimeout (()=>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout (runAutoRun);
    runAutoRun = setTimeout (()=>{
        nextDom.click();

    }, timeAutoNext);
}

