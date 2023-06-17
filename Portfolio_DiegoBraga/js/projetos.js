const overlay = document.querySelector(".projeto_flip_botao");
const overlay2 = document.querySelector(".projeto_flip_botao2");
const overlay3 = document.querySelector(".projeto_flip_botao3");
const projeto_flip2 = document.getElementById("projeto2");
const projeto_flip3 = document.getElementById("projeto3");
const button1 = document.getElementById("botao_projeto");
const button2 = document.getElementById("botao_projeto2");
const button3 = document.getElementById("botao_projeto3");
const background_overlay3 = document.querySelector(".overlay3");
const rodape = document.querySelector(".rodape");
const projeto_flip = document.getElementById("projeto1");
const cabecalho = document.querySelector(".cabecalho");
const objetivo= document.querySelector(".objetivo");


overlay.addEventListener("click",() => {
    if (button1.checked === true) {
        projeto_flip.style.height = "calc(100vh - 100px)"
        projeto_flip2.style.display = "none";
        projeto_flip3.style.display = "none";
        rodape.style.display = "none";
        objetivo.style.display = "none";
    }
    
    else {
        projeto_flip.style.height = "100vh"
        projeto_flip2.style.display = "flex";
        projeto_flip3.style.display = "flex";
        rodape.style.display = "flex";
        objetivo.style.display = "flex"
        projeto_flip.style.position = "static"
    }
})

overlay2.addEventListener("click",() => {
    if (button2.checked === true) {
        projeto_flip.style.display = "none";
        projeto_flip3.style.display = "none";
        rodape.style.display = "none";
        objetivo.style.display = "none"
        projeto_flip2.style.height = "calc(100vh - 100px)"
        
    }
    
    else {
        projeto_flip2.style.height = "100vh"
        projeto_flip.style.display = "flex";
        projeto_flip3.style.display = "flex";
        rodape.style.display = "flex";
        objetivo.style.display = "flex"
    }
})

overlay3.addEventListener("click",() => {
    if (button3.checked === true) {
        projeto_flip.style.display = "none";
        projeto_flip2.style.display = "none";
        rodape.style.display = "none";
        objetivo.style.display = "none"
        projeto_flip3.style.height = "calc(100vh - 100px)"
    }
    
    else {
        projeto_flip3.style.height = "100vh"
        projeto_flip.style.display = "flex";
        projeto_flip2.style.display = "flex";
        rodape.style.display = "flex";
        objetivo.style.display = "flex"
    }
})
