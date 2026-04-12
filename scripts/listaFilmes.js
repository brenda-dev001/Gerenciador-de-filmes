import { data } from "./entradas.js";
import { selecionarModal } from "./modal.js";

const criaDivs = function(){
    const criaDiv = document.createElement("div");
    const criaDivImg = document.createElement("div");
    const criaDivBtn = document.createElement("div");
    const criaBtn = document.createElement("button");
    const criaSection = document.createElement("section");
    
    const selecionarArticle = document.getElementsByClassName("lista-filmes");
    
    selecionarArticle[selecionarArticle.length - 1].appendChild(criaSection);
    
    criaSection.appendChild(criaDiv).classList.add("alinhar-divs");
    criaDiv.appendChild(criaDivImg).classList.add("img_add");
    criaDiv.appendChild(criaDivBtn);
    criaDivBtn.appendChild(criaBtn).classList.add("remover");
    criaBtn.innerHTML = `Remover<i class=bi-trash></i>`;
    
}

const AddImg = function(data){
    const selecionarDiv = document.getElementsByClassName("img_add");
    selecionarDiv[selecionarDiv.length - 1].innerHTML = `<img src="${data.Poster}" alt="imagem do filme ${data.Title}">`;
    return data;
}


const adicionarFilme = document.getElementById("addFilme");

adicionarFilme.addEventListener("click", function(){
    criaDivs();
    AddImg(data);
    selecionarModal[0].classList.add("esconderModal");
});

const btnRemover = document.getElementsByClassName("remover");

console.log(btnRemover[0]);
//olhar erro aqui
btnRemover[0].addEventListener("click", function(){
    const selecionarPai = btnRemover[0].parentElement;
    const selecionarAvo = selecionarPai.parentElement;
    const selecionarFilme = selecionarAvo.parentElement;
    selecionarFilme.remove();
});