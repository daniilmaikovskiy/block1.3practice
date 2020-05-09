// look q and qAll functions in trueQuerySelector.js

let brandBlocks = qAll('.brand-block');
let showButton = q('#show-button');
let hideButton = q('#hide-button');

hideSomeBrandBlocks(brandBlocks);
addShowButtonClickEvent(showButton, hideButton);
addHideButtonClickEvent(showButton, hideButton);

function hideSomeBrandBlocks(brandBlocks) {
    const HIDDENS_ON_MIDDLE_SCREEN = [7, 8];
    const FIRST_HIDDEN_ON_LARGE_SCREEN = 9;

    for (let i = HIDDENS_ON_MIDDLE_SCREEN[0] - 1; 
        i < HIDDENS_ON_MIDDLE_SCREEN[HIDDENS_ON_MIDDLE_SCREEN.length - 1]; i++) {
    
        brandBlocks[i].classList.add('brand-block--hidden@middle-screen');
    }

    for (let i = FIRST_HIDDEN_ON_LARGE_SCREEN - 1; i < brandBlocks.length; i++) {
        
        brandBlocks[i].classList.add('brand-block--hidden@middle-large-screen');
    }
}

function addShowButtonClickEvent(showButton, hideButton) {
    showButton.addEventListener('click', function () {
        hideButton.classList.remove('show-hide-button--hidden');
        showButton.classList.add('show-hide-button--hidden');
    });
}

function addHideButtonClickEvent(showButton, hideButton) {
    hideButton.addEventListener('click', function () {
        showButton.classList.remove('show-hide-button--hidden');
        hideButton.classList.add('show-hide-button--hidden');
    });
}