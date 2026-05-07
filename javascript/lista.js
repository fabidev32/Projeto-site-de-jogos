// 1. Busca os jogos cadastrados (ou cria um array vazio se não houver nenhum)
let jogos_cadastrados = JSON.parse(localStorage.getItem("jogos")) || [];
let lista_container = document.querySelector(".lista_de_jogos");

const RenderizarJogos = () => {
    // 2. Verifica se o container existe na página para não dar erro no console
    lista_container.innerHTML = ""; // Limpa a lista antes de renderizar
    // 3. Mapeia o array de jogos para criar o HTML
    jogos_cadastrados.map(function(elemento, indice) {
        const div = document.createElement("div");
        div.classList.add("card-jogo"); // 
        div.innerHTML = `
            <h3>${elemento.nome}</h3>
            <p>${elemento.descricao}</p>
            <div class="botoes-acoes">
                <button onclick="Adicionar_Aos_Favoritos(${indice})">⭐ Favoritar</button>
                <button onclick="Excluir_Jogo(${indice})" style="background-color: #ff4d4d;">🗑️ Excluir</button>
            </div>
        `;
        lista_container.appendChild(div);
    });
};

// 4. Função para excluir um jogo da lista principal
const Excluir_Jogo = (indice) => {
    jogos_cadastrados.splice(indice, 1); // Remove do array
    localStorage.setItem("jogos", JSON.stringify(jogos_cadastrados)); // Atualiza o localStorage
    RenderizarJogos(); // Atualiza a tela
};

// 5. Função para favoritar (aproveitando o que você já tinha)
const Adicionar_Aos_Favoritos = (indice) => {
    let favoritos_atuais = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos_atuais.push(jogos_cadastrados[indice]);
    localStorage.setItem("favoritos", JSON.stringify(favoritos_atuais));
    alert("Jogo adicionado aos favoritos!");
};

// Inicializa a renderização ao carregar o script
RenderizarJogos();