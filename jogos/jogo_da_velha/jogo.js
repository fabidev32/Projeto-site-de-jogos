/* Passo 01: Criar variáveis */
let vez_jogador = 0;
const tabuleiro = new Array();
/* 0 -> jogador O / 1 -> jogador X */
const posicoes_vencedoras = {
  primeira: [0, 4, 8],
  segunda: [2, 4, 6],
  terceira: [0, 1, 2],
  quarta: [3, 4, 5],
  quinta: [6, 7, 8],
  sexta: [0, 3, 6],
  setima: [1, 4, 7],
  oitava: [2, 5, 8],
};
const status_jogo = document.getElementById("status_jogo");

/* Passo 02: Adicionar as posições ao meu array */

tabuleiro.push(document.querySelector(".posicao_01"));
tabuleiro.push(document.querySelector(".posicao_02"));
tabuleiro.push(document.querySelector(".posicao_03"));
tabuleiro.push(document.querySelector(".posicao_04"));
tabuleiro.push(document.querySelector(".posicao_05"));
tabuleiro.push(document.querySelector(".posicao_06"));
tabuleiro.push(document.querySelector(".posicao_07"));
tabuleiro.push(document.querySelector(".posicao_08"));
tabuleiro.push(document.querySelector(".posicao_09"));

/* Passo 03: Lógica jogo */

const Iniciar_Jogo() = () => {

Jogo();

}

const Jogo = () => {
  do {
    const Controla_Click_Usuario = (posicao) => {
      let jogador = Vez_Jogador();
      case 01:
        VerificaRodada(posicao - 1, jogador);
        break;
   
        };
    };
  } while (Verifica_Empate != true);
};



const Verifica_Rodada(posicao, elemento_jogador){
          if (tabuleiro[posicao - 1].textContent == "") {
            if (Verifica_Se_Ganhou()) {
              status_jogo.textContent =
                return "O jogador " + elemento_jogador + " ganhou!";
            } else if (Verifica_Empate()) {
              return status_jogo.textContent = "Teve empate!";
            } else {
              Coloca_Elemento(elemento_jogador);
            }
         }
         
const Verifica_Se_Ganhou = () => {
  let elemento_jogador = Vez_Jogador();

  let tem_ganhador = false;
  posicoes_vencedoras.primeira.map(function (elemento) {
    tabuleiro[elemento].textContent == elemento_jogador
      ? tem_ganhador == true
      : tem_ganhador == false;
  });
  posicoes_vencedoras.segunda.map(function (elemento) {
    tabuleiro[elemento] == elemento_jogador
      ? tem_ganhador == true
      : tem_ganhador == false;
  });
  posicoes_vencedoras.terceira.map(function (elemento) {
    tabuleiro[elemento] == elemento_jogador
      ? tem_ganhador == true
      : tem_ganhador == false;
  });
  posicoes_vencedoras.quarta.map(function (elemento) {
    tabuleiro[elemento] == elemento_jogador
      ? tem_ganhador == true
      : tem_ganhador == false;
  });
  posicoes_vencedoras.quinta.map(function (elemento) {
    tabuleiro[elemento] == elemento_jogador
      ? tem_ganhador == true
      : tem_ganhador == false;
  });
  posicoes_vencedoras.sexta.map(function (elemento) {
    tabuleiro[elemento] == elemento_jogador
      ? tem_ganhador == true
      : tem_ganhador == false;
  });
  posicoes_vencedoras.setima.map(function (elemento) {
    tabuleiro[elemento] == elemento_jogador
      ? tem_ganhador == true
      : tem_ganhador == false;
  });
  posicoes_vencedoras.oitava.map(function (elemento) {
    tabuleiro[elemento] == elemento_jogador
      ? tem_ganhador == true
      : tem_ganhador == false;
  });
  return tem_ganhador;
};
const Verifica_Empate = () => {
  let tem_empate = false;
  for (let contadora = 0; contadora < tabuleiro.length; contadora++) {
    if (tabuleiro[contadora].textContent != "") {
      tem_empate == true;
    } else {
      return false;
    }
  }
  return tem_empate;
};

const Coloca_Elemento = (elemento_html, jogador) => {
    elemento_html.innerHTML = jogador;
    elemento_html.classList.add("jogador");
};
