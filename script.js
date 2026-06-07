const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const olho = document.getElementById("olhinho");
const resultado = document.getElementById("resultado");
const logo = document.getElementById("imagem");

olho.addEventListener("mousedown", (e) => {
    e.preventDefault(); // o preventDefault impede a ação padrão, no caso ele teria que sair do input pra clicar no olho com essa função não precisa
    if (senha.type === "password") {
        senha.type = 'text';
        olho.classList.remove('bx-eye-closed');
        olho.classList.add('bx-eye-alt');
    } else {
        senha.type = "password";
        olho.classList.remove('bx-eye-alt');
        olho.classList.add('bx-eye-closed');
    }
});
function logar(){
    if(usuario.value == "Paulo" && senha.value == "6769" ){
        resultado.innerHTML = "Login feito com sucesso!"
        resultado.style.color = '#2CFF05'
        setTimeout(() => {
            location.href = 'https://paulin-cyber.github.io/Portfolio2.0/'
        },1000)
    }
    else{
        resultado.innerHTML = "Usuário ou senha incorretos"
        resultado.style.color = '#950606'
        setTimeout(() => {
           resultado.innerHTML = ""
        },2000)
    }
    }
function tema() {
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        logo.src = "icone.png"
    }
    else{
        logo.src = 'logoroxa.png'
    }
}