let dim = document.getElementById('dim');
let menu = document.getElementById('menu');
let closeMenu = document.getElementById('close-menu');
let navLinks = document.getElementById('nav-links');

function show(element, value){
    element.style.display = value;
}
function hide(element){
    element.style.display = 'none';
}

menu.addEventListener('click', () => {
    show(dim, 'block');
    hide(menu);
    show(closeMenu, 'block');
    show(navLinks, 'flex');
})

closeMenu.addEventListener('click', () => {
    hide(dim);
    hide(closeMenu);
    hide(navLinks);
    show(menu, 'block');
})