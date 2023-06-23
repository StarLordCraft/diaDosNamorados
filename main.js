const img = document.getElementById('mainimage');

const btnNao = document.getElementById('nao');
const btnSim = document.getElementById('sim');

let counterFuga = 0;

const imgs = [...document.querySelectorAll('#countainer img')];
const divCarrosel = document.getElementById('countainer');

let currentImage = 0;

function carrosel(){
    ++currentImage;

    currentImage = (currentImage > (imgs.length - 1))? 0 : currentImage;

    divCarrosel.style.transform = `translateX(${currentImage * -400}px)`;
}

function penseNasCriancas(){
    document.getElementById('pensenascriancas').style.display = 'flex';

    const elements = [...document.querySelectorAll('.off')];
    elements.map((e) => {
        e.style.display = "none";
    })

    setInterval(carrosel, 3000);
}

function fugir(){
    const posX = Math.round(Math.random() * 100);
    const posY = Math.round(Math.random() * 100);

    btnNao.style.left = `${posX}%`
    btnNao.style.top = `${posY}%`

    if(counterFuga < 3){
        btnSim.style.width = `${btnSim.offsetWidth + 100}px`;
        btnSim.style.height = `${btnSim.offsetHeight + 20}px`;

        ++counterFuga;

        if(counterFuga === 1){
            img.src = "https://i.pinimg.com/originals/aa/c7/5f/aac75f885a4e3d2ee0b433c347611be1.png"
            document.getElementById('fala').innerHTML = "Ei, você tentou apertar no Não? FOI SEM QUERER NÉ?";
        }
        if(counterFuga === 2){
            img.src = 'https://gifs.eco.br/wp-content/uploads/2022/07/gifs-de-ursinho-fofo-0.gif';
            document.getElementById('fala').innerHTML = "O QUE VOCÊ TÁ FAZENDO? Tá vendo esse botão grandao aí embaixo? APERTA NELE LOGO!";
        }
    }else{
        if(counterFuga > 3){
            ++counterFuga;
            if(counterFuga === 5)btnNao.style.display = "none";
            return;
        }
        penseNasCriancas();

        document.getElementById('fala').innerHTML = "XÚNIOR????????? PENSE NAS CRIANÇAS! OLHA COMO A GENTE É BONITINHO JUNTO"
        ++counterFuga;
    }
}

btnNao.addEventListener('mouseover', fugir);
btnNao.addEventListener('touchstart', (event) => {
    event.preventDefault;
    fugir();
    event.preventDefault();
})