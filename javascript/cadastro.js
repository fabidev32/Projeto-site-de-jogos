//Elementos HTML
let descricao = document.querySelector("#descricao");
let nome = document.querySelector("#nome");
let link = document.querySelector("#link");
let input_com_imagem = document.getElementById("input_com_imagem");
let visualizar_imagem_baixada = document.querySelector(
  ".visualizar_imagem_baixada",
);
let lista_de_jogos = document.querySelector(".lista_de_jogos");

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

  lista_de_jogos.innerHTML = "";
  jogos.map(function (elemento, indice) {
    const div = CardJogo(elemento, indice);
    lista_de_jogos.appendChild(div);
  });
};

const CardJogo = (elemento, indice) => {
  const div = document.createElement("div");
  div.classList.add("card_jogo");
  div.innerHTML = `
        <img src = "${elemento.imagem}" alt = "Imagem do jogo"/>
        <p>${elemento.nome}</p>
        <p>${elemento.descricao}</p>
        <a href = "${elemento.link}"> Link do jogo </a>
        <button onclick = "Adicionar_Aos_Favoritos(${indice})">Favoritar</button>
    `;
  return div;
};

const Jogo = (nome, descricao, imagem, link) => ({
  nome,
  descricao,
  imagem,
  link,
});



