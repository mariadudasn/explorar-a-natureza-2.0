export default function modal(){
    const modal = document.querySelector('.js-modal')
    const forms = document.querySelector(".modal-forms")
    const close = document.querySelector(".modal-close")
    const dados = {}

    
    let timeout;

    function mostrarModal() {
        modal.classList.add("active");
        timeout = setTimeout(() => {
            if (localStorage.getItem("email") === null) {
                modal.classList.add("active");
            }
            else {
                clearInterval(interval);
                modal.classList.remove("active");
            }
        }, 5000);
    }

    function pegarValorForm(event){
        dados[event.target.name] = event.target.value
        console.log(dados)
        if (event.target.name === "email") {
            clearTimeout(timeout);
        }
    }

    modal.addEventListener('change', pegarValorForm)
    forms.addEventListener('submit', (event) => {
        event.preventDefault()
        localStorage.setItem('email', dados.email); 
        JSON.stringify(dados);
        alert("Dados salvos com sucesso")
        modal.classList.remove("active");
        clearTimeout(timeout); 
    });

    close.addEventListener("click", () => {
        modal.classList.remove("active");
        clearTimeout(timeout);
        mostrarModal();
    });

    mostrarModal();
}