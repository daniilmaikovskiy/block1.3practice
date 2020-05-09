// look q and qAll functions in trueQuerySelector.js

let brandBlocks = qAll('.brand-block');

hideSomeBrandBlocks(brandBlocks);

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