let mario = document.querySelector(".mario");
let obstaculo = document.querySelector(".obstaculo");
let reiniciar_jogo = document.querySelector(".reiniciar_jogo");
let loop;

function jump() {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
}

function game() {
  loop = setInterval(() => {
    const positionObstaculo = window
      .getComputedStyle(obstaculo)
      .left.replace("px", "");
    const positionMario = window
      .getComputedStyle(mario)
      .bottom.replace("px", "");
    console.log(positionMario);
    if (
      positionObstaculo <= 100 &&
      positionObstaculo > 50 &&
      positionMario < 70
    ) {
      GameOver();
    }
  }, 10);

  //O Mario está fixo no lado esquerdo da tela.
  // Digamos que o Mario comece em left: 100px e tenha
  // 50px de largura.
  // Isso significa que o Mario ocupa o espaço entre o pixel 100 e o pixel 150 da tela.
}

function ReiniciarJogo() {
  reiniciar_jogo.innerHTML = "";
  mario.classList.remove("gameOver");
  obstaculo.classList.remove("gameOver");
  //como eu faço o cano ficar depois do mário?
  game();
}

function GameOver() {
  clearInterval(loop);
  obstaculo.classList.add("gameOver");
  mario.classList.add("gameOver");
  const div = document.createElement("div");

  div.innerHTML = `
   
    <h2> Game over! </h2>
    <button onclick = "ReiniciarJogo()"> Jogar novamente </button>
   
   `;
  //Como a função está no meu Javascript eu não preciso adicionar a interpolação?
  reiniciar_jogo.appendChild(div);
}

//não coloco o () dentro de uma string para que a função não seja executada exatamente no momento que minha tela for renderizada

document.addEventListener("keydown", jump);
game();
