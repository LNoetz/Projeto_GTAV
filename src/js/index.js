/* 
Objetivo 1 Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    Passo 1 Pegar o botão de seleção de plataformas no JS para poder verificar quando o usário clicar em cima dele
    Passo 2 Adicionar a classe ativo no botão para que o conteúdo dele apareça
    Passo 3 pegar o clique do usuário
    Passo 4 Quandoi clicar, adicionar a classe ativo para que o conteúdo apareça
Objetivo 2 
    Passo 1 Caso a lista de plataformas já esteja aparecendo e o usuário clicar no botão de fechar, o coteúdo deve ser escondido
    Passo 2 Verificar se o botão já foi ativado pelo usuário, se sim, devemos remover a classe ativo para que ele esconda o coteúdo novamente.
*/
const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
   // const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

    elementoPlataformas.classList.toggle("ativo");


    // if (botaoEstaAberto) {
    //     elementoPlataformas.classList.remove("ativo");
    // } else {
    //     elementoPlataformas.classList.add("ativo");
    // }
});

