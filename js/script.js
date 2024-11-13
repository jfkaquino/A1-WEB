window.onscroll = function () { scrollFunction() };
window.onload = function () { trocarBanner() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("voltar_topo").style.visibility = "visible";
    } else {
        document.getElementById("voltar_topo").style.visibility = "hidden";
    }
}

function trocarBanner() {
    let banners = [
        {
            image: './img/slide/1.jpeg',
            legenda: 'Pão de Açúcar'

        },
        {
            image: './img/slide/2.jpg',
            legenda: 'Alpes Suíços'
        },
        {
            image: './img/slide/3.jpg',
            legenda: 'Monte Fuji'
        },
        {
            image: './img/slide/4.png',
            legenda: 'Grand Canyon'
        },
        {
            image: './img/slide/5.jpg',
            legenda: 'Muralha da China'
        }
    ];

    let currentIndex = 0;

    function showNextBanner() {
        document.getElementById("slides").style.backgroundImage = `url(${banners[currentIndex].image})`;
        document.getElementById("legenda").innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${banners[currentIndex].legenda}`;
        currentIndex = (currentIndex + 1) % banners.length;
    }

    showNextBanner(); // Mostrar o primeiro banner imediatamente
    setInterval(showNextBanner, 5000); // Trocar banner a cada 3 segundos
}