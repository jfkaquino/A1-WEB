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

    mostrarProximoBanner();
    setInterval(mostrarProximoBanner, 7000);
}

document.getElementById("botao_menu").addEventListener("click", function () {
    const item_menu = document.getElementsByClassName("item_menu");
    const menu = document.getElementsByClassName("menu")[0];
    const botao_menu = document.getElementById("botao_menu");

    if (item_menu[0].style.display === "none" || item_menu[0].style.display === "") {
        menu.style.flexDirection = "column";
        for (let i = 0; i < item_menu.length; i++) {
            item_menu[i].style.display = "list-item";
        }
        botao_menu.innerHTML = '<i class="bi bi-x"></i>';
    } else {
        for (let i = 0; i < item_menu.length; i++) {
            item_menu[i].style.display = "none";
        }
        menu.style.flexDirection = "row";
        botao_menu.innerHTML = '<i class="bi bi-list"></i>';
    }

    console.log(botao_menu.innerHTML);
});

document.getElementById('form_contato').onsubmit = function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coleta os dados do formulário
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let publicidade = document.getElementById('publicidade').value;
    let assunto = document.getElementById('assunto').value;
    let mensagem = document.querySelector('textarea[name="mensagem"]').value;

    alert("Nome: " + nome + "\nEmail: " + email + "\nTelefone: " + telefone + "\nPublicidade: " + publicidade + "\nAssunto: " + assunto + "\nMensagem: " + mensagem);
};