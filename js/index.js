const imagens = document.querySelectorAll('.js-imagens li')
const textos = document.querySelectorAll('.js-conteudo section')
const perguntah3 = document.querySelectorAll('.js-pergunta h3')
const perguntap = document.querySelectorAll('.js-pergunta p')


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

function ativarConteudo(indice){
    perguntap[indice].classList.toggle('active')
}


perguntah3.forEach((item,indice) => {
    item.addEventListener('click', () =>{
        ativarConteudo(indice)
})
})


