export default function modal() {
  // Seleciona os elementos do DOM relevantes para o modal
  const modal = document.querySelector('.js-modal');
  const forms = document.querySelector('.modal-forms');
  const close = document.querySelector('.modal-close');
  const desfoque = document.querySelector(".js-desfoque");
  const msg = document.querySelector('.js-msg');
  const dados = {} // Objeto para armazenar os dados do formulário

  // Verifica se o e-mail está armazenado no localStorage
  function verificarEmailNoLocalStorage() {
    if (localStorage.getItem("email") === null) {
      // Adiciona a classe 'active' ao modal e ao elemento de desfoque após 3.5 segundos (3500 milissegundos)
      setTimeout(() => {
        modal.classList.add("active");
        desfoque.classList.add("active");
      }, 3500);
    } else {
      // Remove a classe 'active' do modal e do elemento de desfoque
      modal.classList.remove("active");
      desfoque.classList.remove("active");
    }
  }

  // Chama a função para verificar o e-mail no localStorage
  verificarEmailNoLocalStorage();

  // Função para capturar o valor do formulário e armazenar no objeto 'dados'
  function pegarValorForm(event) {
    dados[event.target.name] = event.target.value
    console.log(dados)
  }

  // Adiciona um event listener para capturar mudanças no formulário
  forms.addEventListener('change', pegarValorForm);

  // Event listener para o evento 'submit' do formulário
  forms.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("email", JSON.stringify(dados.email))
    msg.classList.add("active"); // Adiciona a classe 'active' ao elemento de mensagem
  });


  // Event listener para o botão de fechar o modal
  close.addEventListener("click", () => {
    // Remove a classe 'active' do modal e do elemento de desfoque
    modal.classList.remove("active");
    desfoque.classList.remove("active");
    // Chama a função para verificar o e-mail no localStorage
    verificarEmailNoLocalStorage();
  })
}
