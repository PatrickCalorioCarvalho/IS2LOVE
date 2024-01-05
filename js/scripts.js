function primeiraPergunta()
{
    do{
        var respota = prompt("Precisamos saber se você é digna de prosseguir.!!!\nSe você é realmente quem estou pensado que é, me responda.", "Como você me chamaria?");
        if(respota){
            var respotaencode = btoa(respota.toUpperCase());
          }else{
            var respotaencode = "semresposta"
          }
    }while(respotaencode != "Rk9GTw==")
}
primeiraPergunta()
function gameOver()
{
    alert("ta vendo so achou que era facil comquistar o fofo aqui ne !!! ");
    location.reload();
}

const jogador = document.querySelector('.jogador');
const obstaculo = document.querySelector('.obstaculo');
const boot = document.querySelector('.boot');
const pular = () => {

    jogador.classList.add('pular');

    setTimeout(() =>{
        jogador.classList.remove('pular');
        const obstaculoPossicao = obstaculo.offsetLeft;
        const jogadorPossicao = jogador.offsetLeft;
        if(obstaculoPossicao < jogadorPossicao)
        {
            const bootPossicaoAtual = +boot.style.right.replace('%','');
            boot.style.right = `${bootPossicaoAtual + 10}%`;
        }
    },500);



}

const loop = setInterval(() => {
    const obstaculoPossicao = obstaculo.offsetLeft;
    const jogadorPossicao = +window.getComputedStyle(jogador).bottom.replace('px','');

    
    if(obstaculoPossicao <= 120 && obstaculoPossicao > 10 && jogadorPossicao <= 100)
    {
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPossicao}px`;

        jogador.style.animation = 'none';
        jogador.style.bottom = `${jogadorPossicao}px`;
        jogador.src = './img/pandaTriste.png'
        jogador.style.width = '180px'
        boot.src = './img/pandaPuto.png'
        boot.style.width = '180px'
        clearInterval(loop);

        setTimeout(() =>{
            gameOver()
        },500);
    }
    const bootPossicao = boot.offsetLeft;
    if(bootPossicao < obstaculoPossicao && obstaculoPossicao < bootPossicao + 200)
    {
        boot.classList.add('pular');
        setTimeout(() =>{
            boot.classList.remove('pular');
        },500);

        
    }

    if(bootPossicao <= 120)
    {
        clearInterval(loop);
        alert('parabems')
    }


},10)

document.addEventListener('keydown',pular)