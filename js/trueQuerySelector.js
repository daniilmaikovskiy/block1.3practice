// trueQuerySelector.js
// version 1.0

// short record of querySelector

function q(selectorStr, where) {
    if (where == undefined) {

        where = document;
    } else if (typeof where === 'string') {

        where = document.querySelector(where);
    }

    return where.querySelector(selectorStr);
}

function qAll(selectorStr, where) {
    if (where === undefined) {

        where = document;
    } else if (typeof where === 'string') {

        where = document.querySelector(where);
    }

    return where.querySelectorAll(selectorStr);
}