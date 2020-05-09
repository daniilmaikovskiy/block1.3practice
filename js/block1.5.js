// look q and qAll functions in trueQuerySelector.js

const FIRST_HIDDEN_BLOCK = 7;

let brandBlocks = qAll('.brand-block');

for (let i = FIRST_HIDDEN_BLOCK - 1; i < brandBlocks.length; i++) {
    
    if (i < FIRST_HIDDEN_BLOCK + 1) {

        brandBlocks[i].classList.add('brand-block--hidden@middle-screen');
    } else {
        brandBlocks[i].classList.add('brand-block--hidden');
    }
}