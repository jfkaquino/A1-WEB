window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("voltar_topo").style.visibility = "visible";
    } else {
        document.getElementById("voltar_topo").style.visibility = "hidden";
    }
}