//Elementos HTML
let descricao = document.querySelector("#descricao");
let nome = document.querySelector("#nome");
let link = document.querySelector("#link");
let input_com_imagem = document.getElementById("input_com_imagem");
let visualizar_imagem_baixada = document.querySelector(
  ".visualizar_imagem_baixada",
);


//Array
let jogos = new Array();

/* Pegar a imagem selecionada pelo usuário */

function PegaURLImagem() {
  return (caminho_da_imagem = URL.createObjectURL(input_com_imagem.files[0]));
}

function ExibirImagem(caminho_da_imagem) {
  caminho_da_imagem == " " ? " " : CriarElementoImagem(caminho_da_imagem);
}

input_com_imagem.addEventListener("input", (event) => {
  const caminho_da_imagem = PegaURLImagem();
  ExibirImagem(caminho_da_imagem);
});

function CriarElementoImagem(urlImagem) {
  const imagem = document.createElement("img");
  visualizar_imagem_baixada.classList.add("mostrarImagem");
  imagem.src = urlImagem;
  visualizar_imagem_baixada.appendChild(imagem);
}

// Lógica para criar jogo

const CriarJogo = () => {
  const imagem = PegaURLImagem();
  const novoJogo = Jogo(nome.value, descricao.value, imagem, link.value);
  jogos.push(novoJogo);
  localStorage.setItem("jogos", JSON.stringify(jogos));
};

const Jogo = (nome, descricao, imagem, link) => ({
  nome,
  descricao,
  imagem,
  link,
});
