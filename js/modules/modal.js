export default function modal(){
    const modal = document.querySelector('.js-modal')
    const forms = document.querySelector(".modal-forms")
    const close = document.querySelector(".modal-close")
    const dados = {}

    if (localStorage.getItem("email") === null) {
        modal.classList.add("active");
      }
    else {
        modal.classList.remove("active");
    }

    function pegarValorForm(event){
        dados[event.target.name] = event.target.value
        console.log(dados)
    }

    modal.addEventListener('change', pegarValorForm)
    forms.addEventListener('submit', (event) => {
        event.preventDefault()
        localStorage.setItem(dados.email, JSON.stringify(dados))
        alert("Dados salvos com sucesso")
        modal.classList.remove("active");
    });

    close.addEventListener("click", () => {
        modal.classList.remove("active");
    });
}