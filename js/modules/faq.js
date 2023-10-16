export default function faq(){
    // Criando constantes e chamando as classes definidas no html
    const perguntah3 = document.querySelectorAll('.js-pergunta h3')
    const resposta = document.querySelectorAll('.js-pergunta p')
    const seta = document.querySelectorAll('.js-pergunta span')

    // Função para girar a seta quando a resposta do faq estiver ativa
    function ativardesativarConteudo(indice){
        // A função 'toggle' alterna a presença da classe 'active' no elemento correspondente ao índice
        resposta[indice].classList.toggle('active')
        // Verifica se a classe 'active' está presente no elemento correspondente ao índice
        if (resposta[indice].classList.contains('active') == true) {
            // Se estiver presente, muda o texto do elemento correspondente ao índice para "▴"
            seta[indice].innerText = "▴"
             // Se não estiver presente, muda o texto do elemento correspondente ao índice para "▾"
        }else{
            seta[indice].innerText = "▾";
        }
    }
    
    // Para cada elemento 'item' e seu índice 'indice' em 'perguntah3'
    perguntah3.forEach((item,indice) => {
        // Adiciona um ouvinte de evento de clique ao elemento 'item'
        item.addEventListener('click', () =>{
            // Chama a função 'ativardesativarConteudo' com o índice como argumento
            ativardesativarConteudo(indice)
    })
    })
}