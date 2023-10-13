export default function home(){
    // Criando constantes e chamando as classes definidas no html
    const imagens = document.querySelectorAll('.js-imagens li')
    const textos = document.querySelectorAll('.js-conteudo section')
 
    // Função chamada 'ativarConteudo' que recebe um índice como argumento
    function ativarConteudo(indice){
        // Remove a classe 'active' de todos os elementos dentro de 'textos'
        textos.forEach((item) => {
            item.classList.remove('active')
        })
        // Adiciona a classe 'active' ao elemento correspondente ao índice
        textos[indice].classList.add('active')
    }

    
    // Para cada elemento 'item' e seu índice 'indice' em 'imagens'
    imagens.forEach((item,indice) => {
    // Adiciona um ouvinte de evento de clique ao elemento 'item'
    item.addEventListener('click', () =>{
        // Chama a função 'ativarConteudo' com o índice como argumento
        ativarConteudo(indice)
    })
    })
}