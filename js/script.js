const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    
    if (pipePosition <= 120 && pipePosition > 0  && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        
        mario.style.animation = 'none';
        pipe.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';       
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
    }

    if (mario = 'img/game-over.png'){
        'img/game-ovr.png';
    }

}, 10);

function criarPlacar() {
    const placar = {
        pontuaçao: 0,
        desenha() {
            contexto.font = '50px serif';
            contexto.fillText('ooo ${placar.pontuacao}',50, 90);
        },
        atualiza() {
        }
    }
    return placar;
}


document.addEventListener("keydown", jump);