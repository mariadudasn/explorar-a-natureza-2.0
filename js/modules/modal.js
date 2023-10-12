export default function modal(){
    const form = document.querySelector('.js-modal')
    const dados = {}

    function pegarValorForm(event){
        dados[event.target.name] = event.target.value
        console.log(dados)
    }

    form.addEventListener('change', pegarValorForm)
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        localStorage.setItem(dados.email, JSON.stringify(dados))
        alert("Dados salvos com sucesso")
    })

}