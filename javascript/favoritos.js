let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
let lista_de_favoritos = document.querySelector(".lista_de_favoritos");

const RenderizarFavoritos = () => {
  lista_de_favoritos.innerHTML = ""; // limpa
  favoritos.map(function (elemento, indice) {
    const div = document.createElement("div");
    div.classList.add("card_jogo"); //
    div.innerHTML = `
            <p>${elemento.nome}</p>
            <p>${elemento.descricao}</p>
            <button onclick="Remover_Dos_Favoritos(${indice})">Remover</button>
        `;
    lista_de_favoritos.appendChild(div);
  });
};

const Remover_Dos_Favoritos = (indice) => {
  favoritos.splice(indice, 1);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  RenderizarFavoritos(); // re-renderiza depois de remover
};

RenderizarFavoritos(); // chama ao carregar a página
