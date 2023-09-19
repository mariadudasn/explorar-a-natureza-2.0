const imagens = document.querySelectorAll('.js-imagens li')
const textos = document.querySelectorAll('.js-conteudo section')
const perguntah3 = document.querySelectorAll('.js-pergunta h3')
const resposta = document.querySelectorAll('.js-pergunta p')
const setinhaa = document.querySelectorAll('.js-pergunta span')


function ativarConteudo(indice){
    textos.forEach((item) => {
        item.classList.remove('active')
    })
    textos[indice].classList.add('active')
}

imagens.forEach((item,indice) => {
   item.addEventListener('click', () =>{
        ativarConteudo(indice)
   })
})

function ativardesativarConteudo(indice){
    resposta[indice].classList.toggle('active')
}

perguntah3.forEach((item,indice) => {
    item.addEventListener('click', () =>{
        ativardesativarConteudo(indice)
})
})



