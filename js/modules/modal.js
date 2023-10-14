export default function modal() {
    const modal = document.querySelector('.js-modal');
    const forms = document.querySelector('.modal-forms');
    const close = document.querySelector('.modal-close');
    const emailInput = document.querySelector('input[name="email"]');
    const blur = document.querySelector('.blur');

    const dados = {};
    let timeout;

    function mostrarModal() {
        modal.classList.add("active");
        blur.classList.add("active");
        timeout = setTimeout(() => {
            if (!dados.email) {
                esconderModal();
                mostrarModal();
            }
        }, 5000);
    }

    function esconderModal() {
        modal.classList.remove("active");
        blur.classList.remove("active");
    }

    if (localStorage.getItem("email") === null) {
        mostrarModal();
    }

    function pegarValorForm(event) {
        dados[event.target.name] = event.target.value;
        console.log(dados);
        if (event.target.name === "email" && event.target.value !== "") {
            esconderModal();
            clearTimeout(timeout);
        }
    }

    forms.addEventListener("submit", (event) => {
        event.preventDefault();
        if (dados.email && dados.email !== "") {
            localStorage.setItem("email", JSON.stringify(dados.email));
            alert("Dados salvos com sucesso");
            esconderModal();
            clearTimeout(timeout);
        } else {
            alert("Por favor, insira seu e-mail.");
        }
    });

    close.addEventListener("click", () => {
        esconderModal();
        setTimeout(mostrarModal, 5000);
    });

    emailInput.addEventListener('input', pegarValorForm);
}
