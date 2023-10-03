export default function menu(){

    const toggle = document.querySelector('.toggle');
    const menuList = document.querySelector('.js-menu');
    
    if (toggle && menuList) {
        function toggleMenu() {
            menuList.classList.toggle('active');
            const toggleIcon = toggle.querySelector('span');
            toggleIcon.classList.toggle('active');
            toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
        }
    
        toggle.addEventListener('click', toggleMenu);
    }
}
    
