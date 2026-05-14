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

function VeImagem() {
  visualizar_imagem_baixada.innerHTML = "";
  const urlImagem = PegaURLImagem();
  const imagem = document.createElement("img");
  imagem.classList.add("estilo_imagem_baixada");
  imagem.src = urlImagem;
  visualizar_imagem_baixada.appendChild(imagem);
}

function PegaURLImagem() {
  return URL.createObjectURL(input_com_imagem.files[0]);
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



