let descricao = document.querySelector("#descricao");
let nome = document.querySelector("#nome");
const lista_de_jogos = document.querySelector(".lista_de_jogos");
let jogos = new Array();
let lista_de_favoritos = new Array();

/* Exibe a lista de elementos */

const CriarJogo = () => {
  //Cria Jogo
  const novoJogo = Jogo(nome.value, descricao.value);
  jogos.push(novoJogo);
  console.log(novoJogo);

  lista_de_jogos.innerHTML = "";
  jogos.map(function (elemento, indice) {
    const div = document.createElement("div");
    div.classList.add("card_jogo"); //
    div.innerHTML = `
        <p>${elemento.nome}</p>
        <p>${elemento.descricao}</p>
        <button onclick = "Adicionar_Aos_Favoritos(${indice})">Favoritar</button>
    `;
    lista_de_jogos.appendChild(div);
  });
};

const Limparlista = () => {
  lista_de_jogos.innerHTML = "";
  jogos = [];
};

const Jogo = (nome, descricao) => ({
  nome,
  descricao,
});

/* Favoritar o meu elemento */

const Adicionar_Aos_Favoritos = (indice) => {
  lista_de_favoritos.push(jogos[indice]);
  localStorage.setItem("favoritos", JSON.stringify(lista_de_favoritos));
};

localStorage.setItem("favoritos", JSON.stringify(lista_de_favoritos));
localStorage.setItem("jogos", JSON.stringify(jogos));
