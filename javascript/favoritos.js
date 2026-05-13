let favoritos_cadastrados = JSON.parse(localStorage.getItem("favoritos")) || [];
let lista_de_favoritos = document.querySelector(".lista_de_favoritos");

const RenderizarFavoritos = () => {
  lista_de_favoritos.innerHTML = "";
  favoritos_cadastrados.map(function (elemento, indice) {
    div = CardJogo(elemento, indice);
    lista_de_favoritos.appendChild(div);
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
        <button onclick = "Remover_Dos_Favoritos(${indice})">Remover</button>

        `;
  return div;
};

const Remover_Dos_Favoritos = (indice) => {
  favoritos_cadastrados.splice(indice, 1);
  localStorage.setItem("favoritos", JSON.stringify(favoritos_cadastrados));
  RenderizarFavoritos();
};

RenderizarFavoritos(); // chama ao carregar a página
