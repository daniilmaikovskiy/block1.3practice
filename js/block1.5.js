const HIDDENS_ON_MIDDLE_SCREEN = [7, 8];
const FIRST_HIDDEN_ON_LARGE_SCREEN 
    = HIDDENS_ON_MIDDLE_SCREEN[HIDDENS_ON_MIDDLE_SCREEN.length - 1] + 1;
const MIN_WIDTH_MIDDLE_SCREEN = 768;

// look q and qAll functions in trueQuerySelector.js
let brandBlocks = qAll('.brand-block', '.menu--hidden\\@small-screen');
let showButton = q('#show-button');
let hideButton = q('#hide-button');
let swiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 16,
    grabCursor: true,
    slidesOffsetBefore: 16,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

addHiddenModifiers(brandBlocks);
addShowButtonClickEvent(showButton, hideButton, brandBlocks);
addHideButtonClickEvent(showButton, hideButton, brandBlocks);

function addHiddenModifiers(brandBlocks) {
    for (let i = HIDDENS_ON_MIDDLE_SCREEN[0] - 1; 
        i < HIDDENS_ON_MIDDLE_SCREEN[HIDDENS_ON_MIDDLE_SCREEN.length - 1]; i++) {
    
        brandBlocks[i].classList.add('brand-block--hidden@middle-screen');
    }

    for (let i = FIRST_HIDDEN_ON_LARGE_SCREEN - 1; i < brandBlocks.length; i++) {
        
        brandBlocks[i].classList.add('brand-block--hidden@middle-large-screen');
    }
}

function removeHiddenModifiers (brandBlocks) {
    for (let i = HIDDENS_ON_MIDDLE_SCREEN[0] - 1; 
        i < HIDDENS_ON_MIDDLE_SCREEN[HIDDENS_ON_MIDDLE_SCREEN.length - 1]; i++) {
    
        brandBlocks[i].classList.remove('brand-block--hidden@middle-screen');
    }

    for (let i = FIRST_HIDDEN_ON_LARGE_SCREEN - 1; i < brandBlocks.length; i++) {
        
        brandBlocks[i].classList.remove('brand-block--hidden@middle-large-screen');
    }
}

function addShowButtonClickEvent(showButton, hideButton, brandBlocks) {
    showButton.addEventListener('click', function () {
        hideButton.classList.remove('show-hide-button--hidden');
        showButton.classList.add('show-hide-button--hidden');

        removeHiddenModifiers(brandBlocks);
    });
}

function addHideButtonClickEvent(showButton, hideButton, brandBlocks) {
    hideButton.addEventListener('click', function () {
        showButton.classList.remove('show-hide-button--hidden');
        hideButton.classList.add('show-hide-button--hidden');

        addHiddenModifiers(brandBlocks);
    });
}