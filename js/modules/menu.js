export default function menu(){
    // Criando constantes e chamando as classes definidas no html
    const toggle = document.querySelector('.toggle');
    const menuList = document.querySelector('.js-menu');
    
    // Verifica se 'toggle' e 'menuList' são definidos e não nulos
    if (toggle && menuList) {
        // Definição de uma função chamada 'toggleMenu'
        function toggleMenu() {
            // Alterna a presença da classe 'active' no elemento 'menuList'
            menuList.classList.toggle('active');
            // Seleciona o primeiro elemento 'span' dentro de 'toggle'
            const toggleIcon = toggle.querySelector('span');
            // Alterna a presença da classe 'active' no ícone
            toggleIcon.classList.toggle('active');
            // Altera o texto do ícone com base no texto atual
            toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
        }
    
        // Adiciona um ouvinte de evento de clique a 'toggle' que chama 'toggleMenu' quando clicado
        toggle.addEventListener('click', toggleMenu);
    }
}
    
