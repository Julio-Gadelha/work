const usuarios = [
  { id: 1, username: "joao123", senha: "senha123" },
  { id: 2, username: "maria456", senha: "senha456" },
  { id: 3, username: "carlos789", senha: "senha789" },
  { id: 4, username: "ana321", senha: "senha321" },
  { id: 5, username: "elias001", senha: "1234" }
];

function login() {
    let username = document.querySelector("#username").value
    let senha = document.querySelector("#senha").value
    let form = document.querySelector(".login-form")
    let paragrafo = document.querySelector(".batata")
    let user = usuarios.filter(usuario => 
        usuario.username === username && usuario.senha === senha
    )
    if (user.length !== 0) {
        window.location.href = "./amenic.html"
    } else {
        if (!paragrafo) {
          let paragrafo = document.createElement("p")
            paragrafo.innerText += "Usuário não encontrado"
            paragrafo.classList.add("batata")
            form.appendChild(paragrafo)
        }
    }
}