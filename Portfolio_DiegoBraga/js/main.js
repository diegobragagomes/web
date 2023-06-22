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
const start_overlay = document.querySelector("#start");
const start_overlay2 = document.querySelector("#start2");
const start_overlay3 = document.querySelector("#start3");
const width_window = window.innerWidth;


/*Toggle dark mode*/
if (+window.localStorage.getItem("preferDark")) {
    document.body.classList.toggle("dark_mode");
  }
  
  document.getElementById("btn_dark").addEventListener("click",() => {
    if (+window.localStorage.getItem("preferDark")) {
      window.localStorage.setItem("preferDark", 0);
    } else {
      window.localStorage.setItem("preferDark", 1);
    }
    document.body.classList.toggle("dark_mode");
  });



overlay.addEventListener("click",() => {
    if (width_window >= 1024){
        if (button1.checked === true) {
            projeto_flip.style.height = "calc(100vh - 100px)"
            projeto_flip2.style.display = "none";
            projeto_flip3.style.display = "none";
            rodape.style.display = "none";
            objetivo.style.display = "none";
            start_overlay.scrollIntoView({
                block: 'center'
            })
        }
        
        else {
            projeto_flip.style.height = "100vh";
            projeto_flip2.style.display = "flex";
            projeto_flip3.style.display = "flex";
            rodape.style.display = "flex";
            objetivo.style.display = "flex";
            projeto_flip.style.position = "static";
            projeto_flip.scrollIntoView({
                block: 'center'
            })
        }
    }

    else {
        if (button1.checked === true) {
            projeto_flip.style.height = "calc(100vh - 100px)"
            projeto_flip2.style.display = "none";
            projeto_flip3.style.display = "none";
            rodape.style.display = "none";
            objetivo.style.display = "none";
            start_overlay.scrollIntoView({
                block: 'center'
            })
        }
        
        else {
            projeto_flip.style.height = "50vh"
            projeto_flip2.style.display = "flex";
            projeto_flip3.style.display = "flex";
            rodape.style.display = "block";
            objetivo.style.display = "flex";
            projeto_flip.style.position = "static";
            projeto_flip.scrollIntoView({
                block: 'center'
            })
        }
    }
})


overlay2.addEventListener("click",() => {
    if (width_window >= 1024){
        if (button2.checked === true) {
            projeto_flip.style.display = "none";
            projeto_flip3.style.display = "none";
            rodape.style.display = "none";
            objetivo.style.display = "none";
            projeto_flip2.style.height = "calc(100vh - 100px)";
            start_overlay2.scrollIntoView({
                block: 'center'
            })
            
        }
        
        else {
            projeto_flip2.style.height = "100vh"
            projeto_flip3.style.display = "flex";
            rodape.style.display = "flex";
            projeto_flip.style.display = "flex";
            objetivo.style.display = "flex";
            projeto_flip2.scrollIntoView({
                block: 'center'
            })
        }
    }

    else {
        if (button2.checked === true) {
            projeto_flip.style.display = "none";
            projeto_flip3.style.display = "none";
            rodape.style.display = "none";
            objetivo.style.display = "none";
            projeto_flip2.style.height = "calc(100vh - 100px)";
            start_overlay2.scrollIntoView({
                block: 'center'
            })
            
        }
        
        else {
            projeto_flip2.style.height = "50vh"
            projeto_flip3.style.display = "flex";
            rodape.style.display = "block";
            projeto_flip.style.display = "flex";
            objetivo.style.display = "flex";
            projeto_flip2.scrollIntoView({
                block: 'center'
            })
        }
    }
})

overlay3.addEventListener("click",() => {
    if (width_window >= 1024){
        if (button3.checked === true) {
            projeto_flip.style.display = "none";
            projeto_flip2.style.display = "none";
            rodape.style.display = "none";
            objetivo.style.display = "none";
            projeto_flip3.style.height = "calc(100vh - 100px)";
            start_overlay3.scrollIntoView({
                block: 'center'
            })
        }
        
        else {
            projeto_flip3.style.height = "100vh"
            projeto_flip.style.display = "flex";
            projeto_flip2.style.display = "flex";
            rodape.style.display = "flex";
            objetivo.style.display = "flex";
            projeto_flip3.scrollIntoView({
                block: 'center'
            })
        }
    }
    
    else {
        if (button3.checked === true) {
            projeto_flip.style.display = "none";
            projeto_flip2.style.display = "none";
            rodape.style.display = "none";
            objetivo.style.display = "none";
            projeto_flip3.style.height = "calc(100vh - 100px)";
            start_overlay3.scrollIntoView({
                block: 'center'
            })
        }
        
        else {
            projeto_flip3.style.height = "50vh"
            projeto_flip.style.display = "flex";
            projeto_flip2.style.display = "flex";
            rodape.style.display = "block";
            objetivo.style.display = "flex";
            projeto_flip3.scrollIntoView({
                block: 'center'
            })
        }
    }
})

