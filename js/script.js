const robo = document.querySelector('.robo');
const cone = document.querySelector('.cone');
const ceu = document.querySelector('.ceu');
const nome = document.getElementById("nome");

const pulo = () => {
    robo.classList.add("pular");

    setTimeout(() => {
        robo.classList.remove("pular");
    }, 1000)
}


function executarJogo() {
    document.addEventListener('keydown', pulo);
    var nome_jogador = document.getElementById("nome-jogador").value;
    nome.innerHTML = `Jogador: ${nome_jogador}`;
    const loop = setInterval(() => {
        
        cone.style.animation = 'animacao-cone 3s infinite linear';
        ceu.style.animation = 'animacao-ceu 10s infinite linear';

        const posicaoCone = cone.offsetLeft;
        const posicaoRobo = +window.getComputedStyle(robo).bottom.replace('px', '');
        const posicaoCeu = ceu.offsetLeft;


        if (posicaoCone <= 120 && posicaoCone > 0 && posicaoRobo < 120) {
            cone.style.animation = 'none';
            cone.style.left = `${posicaoCone}px`;
            robo.style.animation = 'none';
            robo.style.bottom = `${posicaoRobo}px`;

            robo.src = './images/robo-parado.png';
            robo.style.marginLeft = '50px';

            ceu.style.animation = 'none';
            ceu.style.left = `${posicaoCeu}px`;

            clearInterval(loop);
        }
    }, 10)
}


