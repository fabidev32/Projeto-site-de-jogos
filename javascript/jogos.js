let jogos_cadastrados = JSON.parse(localStorage.getItem("jogos")) || [];
let lista_de_jogos = document.querySelector(".lista_de_jogos");

const RenderizarJogos = () => {
  lista_de_jogos.innerHTML = "";
  jogos_cadastrados.map(function (elemento, indice) {
    div = CardJogo(elemento, indice);
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
        <button onclick = "Remover_Elemento(${indice})">Remover</button>

        `;
  return div;
};

const Adicionar_Aos_Favoritos = (indice) => {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []; // ✅
  favoritos.push(jogos_cadastrados[indice]); 
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  alert("Jogo adicionado aos favoritos!");
};

const Remover_Elemento = (indice) => {
  jogos_cadastrados.splice(indice, 1);
  localStorage.setItem("jogos", JSON.stringify(jogos_cadastrados));
  RenderizarFavoritos();
};

RenderizarJogos(); // chama ao carregar a página
