// CARREGAR AS FOTOS
// selecionando as imagens da galeria
let imagensDaGaleria = document.querySelectorAll(".galeria-grid img");

// lightbox sendo o efeito de abrir uma imagem em destaque
// lightboxOverlay é a camada escura atrás da foto
let lightbox = document.getElementById("lightboxOverlay");

// imagem grande que aparece no lightbox
let imagemGrande = document.getElementById("lightboxImage");

// botão de fechar
let botaoFechar = document.querySelector(".lightbox-close");

// loop para adicionar um clique em cada imagem
imagensDaGaleria.forEach(function(img){
    
    img.addEventListener("click", function(){
        // quando clicado, pega o caminho maior da imagem
        let caminhoMaior = img.getAttribute("data-large");

        // troca o src da imagem grande para a imagem clicada
        imagemGrande.src = caminhoMaior;

        // faz o lightbox aparecer
        lightbox.style.display = "flex";
    });
});

// fecha o lightbox quando clico no X
botaoFechar.addEventListener("click", function(){
    lightbox.style.display = "none";
});



