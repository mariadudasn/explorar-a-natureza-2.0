export default function modal() {
    const modal = document.querySelector('.js-modal');
    const forms = document.querySelector('.modal-forms');
    const close = document.querySelector('.modal-close');
    const desfoque = document.querySelector(".js-desfoque");
    const dados = {}

    if (localStorage.getItem("email") === null) {
        setTimeout(() => {
          modal.classList.add("active");
          desfoque.classList.add("active");
        }, 3000);
    }else {
      modal.classList.remove("active");
      desfoque.classList.remove("active");
    }

    function pegarValorForm(event){
      dados[event.target.name] = event.target.value
      console.log(dados)
    }
    
    modal.addEventListener('change', pegarValorForm)

    forms.addEventListener("submit", (event) => {
      event.preventDefault();
      localStorage.setItem("email", JSON.stringify(dados.email))
      alert("Dados salvos com sucesso")
      modal.classList.remove("active");
      desfoque.classList.remove("active");
    });
    

    close.addEventListener("click", () => {
      modal.classList.remove("active");
      desfoque.classList.remove("active");
    })
}