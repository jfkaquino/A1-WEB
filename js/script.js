window.onscroll = function () { mostrarBotaoTopo() };
window.onload = function () { trocarBanner() };

function mostrarBotaoTopo() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("voltar_topo").style.visibility = "visible";
    } else {
        document.getElementById("voltar_topo").style.visibility = "hidden";
    }
}

function trocarBanner() {
    let banners = [
        {
            imagem: './img/slide/1.jpeg',
            legenda: 'Pão de Açúcar'

        },
        {
            imagem: './img/slide/2.jpg',
            legenda: 'Alpes Suíços'
        },
        {
            imagem: './img/slide/3.jpg',
            legenda: 'Monte Fuji'
        },
        {
            imagem: './img/slide/4.png',
            legenda: 'Grand Canyon'
        },
        {
            imagem: './img/slide/5.jpg',
            legenda: 'Muralha da China'
        }
    ];

    let currentIndex = 0;

    function mostrarProximoBanner() {
        document.getElementById("slides").style.backgroundImage = `url(${banners[currentIndex].imagem})`;
        document.getElementById("legenda").innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${banners[currentIndex].legenda}`;
        currentIndex = (currentIndex + 1) % banners.length;
    }

    mostrarProximoBanner(); // Mostrar o primeiro banner imediatamente
    setInterval(mostrarProximoBanner, 7000); // Trocar banner a cada 3 segundos
}

function mostrarDados() { }