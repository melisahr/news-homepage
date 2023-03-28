function openMenu(){
    document.querySelector('nav').classList.add('open');
    document.querySelector('.overlay').classList.add('show');
}
function closeMenu(){
    document.querySelector('nav').classList.remove('open');
    document.querySelector('.overlay').classList.remove('show');
}

document.getElementById('menu').addEventListener('click',openMenu);
document.getElementById('close').addEventListener('click',closeMenu);