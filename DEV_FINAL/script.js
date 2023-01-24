function btn() {
    let btnmenu = document.querySelector(".botao");
    let btnheader = document.querySelector(".botao-2")
    let btnturmas = document.querySelector(".botao-turmas");
    
    btnmenu.innerHTML = "INSCRITO!";
    btnheader.innerHTML = "INSCRITO!";
    btnturmas.innerHTML = "INSCRITO!";
}


function btnMais (){
    let botaoMais = document.querySelector(".botao-menu");
    let caixa1 = document.querySelector(".caixa-retangulo");

    if(caixa1.style.height === "90px"){
        caixa1.style.height = "382px";
        botaoMais.innerHTML = "-";
    } else {
        caixa1.style.height = "90px";
        botaoMais.innerHTML = "+";
    }
}

function btnMenos (){
    let botaoMenos = document.querySelector(".botao-menu-2");
    let caixa2 = document.querySelector(".caixa-retangulo-2");
    let texto = document.querySelector(".texto-menu-2");
    let titulo = document.querySelector(".titulo-menu-2");
    let barra = document.querySelector(".barra-decoracao")

    if(caixa2.style.height === "382px") {
        caixa2.style.height = "90px";
        botaoMenos.innerHTML = "+";
        texto.hidden = true;
        titulo.hidden = true;
        barra.hidden = true;
    } else {
        caixa2.style.height = "382px";
        botaoMenos.innerHTML = "-";
        texto.hidden = false;
        titulo.hidden = false;
        barra.hidden = false;
    }
}