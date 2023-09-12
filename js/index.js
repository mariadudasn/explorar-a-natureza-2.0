const menu = document.querySelectorAll('.js-menu div')
const conteudo = document.querySelectorAll('.js.conteudo section')

function ativarTab(index){
    conteudo[index].classList.add('active')
}

menu.forEach((item,index) => {
   item.addEventListener('click', () =>{
    ativarTab(index)
   })
})

