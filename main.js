const avanca = document.querySelectorAll(".btn-proximo");

avanca.forEach(button => {
  button.addEventListener("click", function() {
    const atual = document.querySelector(".ativo");
    const proximoPasso = "passo-" + this.getAttribute("data-proximo");
    if (atual) atual.classList.remove("ativo");
    const proximo = document.getElementById(proximoPasso);
    if (proximo) {
      proximo.classList.add("ativo");
    } else {
      console.error("Passo não encontrado:", proximoPasso);
    }
  });
});
