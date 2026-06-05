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
    if (marioEnconstou() && marioNaoPulou()) {
      GameOver();
    }
  }, 10);
}

function marioEnconstou() {
  const leftObstaculo = window.getComputedStyle(obstaculo).left.replace("px", "");
  if (leftObstaculo >= 450 && leftObstaculo <= 500) {
    return true;
  }
}

function marioNaoPulou() {
  const leftObstaculo = window.getComputedStyle(obstaculo).left.replace("px", "");
  const bottomMario = window.getComputedStyle(mario).bottom.replace("px", "");
  if (bottomMario < 70) {
    return true;
  }
}

function ReiniciarJogo() {
  reiniciar_jogo.innerHTML = "";
  mario.classList.remove("gameOver");
  obstaculo.classList.remove("gameOver");
  game();
}

function GameOver() {
  clearInterval(loop);
  obstaculo.classList.add("gameOver");
  mario.classList.add("gameOver");
  const div = document.createElement("div");
  div.classList.add("reiniciar");

  div.innerHTML = `
   
    <h2> Game over! </h2>
    <button onclick = "ReiniciarJogo()"> Jogar novamente </button>
   
   `;
  reiniciar_jogo.appendChild(div);
}


document.addEventListener("keydown", jump);
game();
