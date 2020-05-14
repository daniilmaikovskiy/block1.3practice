function addElement(classStr, parent, tagStr) {
    if (tagStr === undefined) tagStr = 'div';
    
    let element = document.createElement(tagStr);
    element.classList.add(classStr);
    parent.appendChild(element);
    
    return element;
}