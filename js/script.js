// Função para voltar ao topo da página

window.onscroll = function () { mostrarBotaoTopo() };

function mostrarBotaoTopo() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("voltar_topo").style.visibility = "visible";
    } else {
        document.getElementById("voltar_topo").style.visibility = "hidden";
    }
}

// Função para trocar o banner (slide) da página inicial

window.onload = function () { trocarBanner() };

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
        document.getElementById("legenda").innerHTML = banners[currentIndex].legenda;
        currentIndex = (currentIndex + 1) % banners.length;
    }

    mostrarProximoBanner();
    setInterval(mostrarProximoBanner, 7000);
}

// Função para controlar o menu responsivo

document.getElementById("botao_menu").addEventListener("click", function () {

    const item_menu = document.getElementsByClassName("item_menu");
    const menu = document.getElementsByClassName("menu")[0];

    if (item_menu[0].style.display === "none" || item_menu[0].style.display === "") {
        menu.style.flexDirection = "column";
        for (let i = 0; i < item_menu.length; i++) {
            item_menu[i].style.display = "list-item";
        }
    } else {
        for (let i = 0; i < item_menu.length; i++) {
            item_menu[i].style.display = "none";
        }
        menu.style.flexDirection = "row";
    }
});

// Função para exibir os dados do formulário

document.getElementById('form_contato').onsubmit = function (event) {

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let publicidade = document.getElementById('publicidade').value;
    let assunto = document.getElementById('assunto').value;
    let mensagem = document.querySelector('textarea[name="mensagem"]').value;

    alert("Nome: " + nome + "\nEmail: " + email + "\nTelefone: " + telefone + "\nPublicidade: " + publicidade + "\nAssunto: " + assunto + "\nMensagem: " + mensagem);
};