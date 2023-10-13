export default function faq(){
    // Criando constantes e chamando as classes definidas no html
    const perguntah3 = document.querySelectorAll('.js-pergunta h3')
    const resposta = document.querySelectorAll('.js-pergunta p')
    const seta = document.querySelectorAll('.js-pergunta span')

    // Função para girar a seta quando a resposta do faq estiver ativa
    function ativardesativarConteudo(indice){
        resposta[indice].classList.toggle('active')
        if (resposta[indice].classList.contains('active') == true) {
            seta[indice].innerText = "▴"
        }else{
            seta[indice].innerText = "▾";
        }
    }
    
    perguntah3.forEach((item,indice) => {
        item.addEventListener('click', () =>{
            ativardesativarConteudo(indice)
    })
    })

}