// constants in globalSettings.js

let menu = document.querySelector('.menu');
let showHideButton = document.querySelector('.show-hide-button');
let showHideButtonText = document.querySelector('.show-hide-button__text');
let showHideButtonImg = document.querySelector('.show-hide-button__img');
let isShowMenu = false;

generateSwiperHTML();
addSwiper();
addShowHideButton();
//
// functions

function generateSwiperHTML() {

    generateSwiperContainer();
    generateSwiperPagination();

    function generateSwiperContainer() {
        // helper.js function addElement
        let swiperContainer = addElement('swiper-container', menu);
        let swiperWrapper = addElement('swiper-wrapper', swiperContainer);
        
        for (let i = 0; i < BRAND_IMGS.length; i++) {
            let swiperSlide = addElement('swiper-slide', swiperWrapper);
            let brandBlock = addElement('brand-block', swiperSlide);
            brandBlock.classList.add('swiper-slide__brand-block');

            let img = addElement('brand-block__img', brandBlock, 'img');
            img.src = IMG_FOLDER + '/' + BRAND_IMGS[i].src;
            img.alt = BRAND_IMGS[i].alt;

            if (BRAND_IMGS[i].sizeModifier) {
                img.classList.add('brand-block__img--' 
                    + BRAND_IMGS[i].sizeModifier);
            }

            addElement('brand-block__button', brandBlock, 'button');
        }
    }

    function generateSwiperPagination() {
        // helper.js function addElement
        let swiperPagination = addElement('swiper-pagination', menu);
        swiperPagination.classList.add('main__swiper-pagination');
    }
}

function addSwiper() {
    const breakpoint = window.matchMedia( '(min-width:768px)' );
    let mySwiper;
    
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();

    function breakpointChecker() {
        if ( breakpoint.matches === true ) {
    
            if ( mySwiper !== undefined ) {
                    
                mySwiper.destroy( true, true );
                return;
            }
        } else if ( breakpoint.matches === false ) {
    
            return enableSwiper();
        }
    };
  
    function enableSwiper() {
        mySwiper = new Swiper ('.swiper-container', SWIPER_SETTINGS);
    };
}

function addShowHideButton() {
    showHideButton.addEventListener('click', function () {
        if (isShowMenu) {
            menu.removeAttribute('style');

            showHideButtonText.textContent = SHOW_BUTTON_TEXT;
            showHideButtonImg.classList.remove('show-hide-button__img--hide-icon');
        }
        else {
            menu.style = `height: ${menu.scrollHeight}px;`;

            showHideButtonText.textContent = HIDE_BUTTON_TEXT;
            showHideButtonImg.classList.add('show-hide-button__img--hide-icon');
        }

        isShowMenu = !isShowMenu;
        hideShowHideButtonOnLargeScreen();
    });
}

window.onload = function () {
    hideShowHideButtonOnLargeScreen();
}

window.onresize = function () {
    hideShowHideButtonOnLargeScreen();
}

function hideShowHideButtonOnLargeScreen() {
    if (isShowMenu === false && menu.scrollHeight <= menu.clientHeight) {
        showHideButton.classList.add('show-hide-button--hidden');
    }
    else {
        showHideButton.classList.remove('show-hide-button--hidden');
    }
}