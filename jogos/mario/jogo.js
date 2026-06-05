let mario = document.querySelector(".mario");
let pine = document.querySelector(".pine");
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
    if (marioEnconstou() && marioNaoPulou()) {
      GameOver();
    }
  }, 10);
}

function marioEnconstou() {
  const leftPine = window.getComputedStyle(pine).left.replace("px", "");
  if (leftPine >= 400 && leftPine <= 500) {
    return true;
  }
}

function marioNaoPulou() {
  const leftPine = window.getComputedStyle(pine).left.replace("px", "");
  const bottomMario = window.getComputedStyle(mario).bottom.replace("px", "");
  if (bottomMario < 70) {
    return true;
  }
}

function ReiniciarJogo() {
  reiniciar_jogo.innerHTML = "";
  mario.classList.remove("gameOver");
  pine.classList.remove("gameOver");
  //como eu faço o cano ficar depois do mário?
  game();
}

function GameOver() {
  clearInterval(loop);
  pine.classList.add("gameOver");
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
