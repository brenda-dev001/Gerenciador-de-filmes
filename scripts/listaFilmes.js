import { data } from "./entradas.js";
import { selecionarModal } from "./modal.js";

//Cria estrutura para a lista de filmes adicionados

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

//Seleciona botão de adicionar filme para adicionar inteligência ao mesmo

const adicionarFilme = document.getElementById("addFilme");

//Adiciona o filme na lista de filmes adicionados

adicionarFilme.addEventListener("click", function(){
    criaDivs();
    AddImg(data);
    selecionarModal[0].classList.add("esconderModal");
});

//cria e retorna objeto com informações do filme adicionado

const retornaObjeto = function(nomeFilme, linkImagem){
    const obj = {  
        Titulo: nomeFilme,
        Poster: linkImagem,
    }
    return obj;
}

//Adionar filme na lista
let listaFilmes = [];

const addNaLista = function(objeto){
    for(let i = 0; i < listaFilmes[listaFilmes.length]; i++){
        if(objeto === listaFilmes[i]){
            notie.alert({text: "Esse filme ja foi adicionado",
            type: 'error',
            time: 1.5,
            });
        }else{
            listaFilmes.push(retornaObjeto);
            return listaFilmes;
        }
    }
}

//Adiciona imagem do filme na estrutura div criada na lista

const AddImg = function(data){
    const selecionarDiv = document.getElementsByClassName("img_add");
    selecionarDiv[selecionarDiv.length - 1].innerHTML = `<img src="${data.Poster}" alt="imagem do filme ${data.Title}">`;
    addNaLista(retornaObjeto(data.Title, data.Poster));
}

//inteligencia de remover o filme da lista de filmes

// const btnRemover = document.getElementsByClassName("remover");

// console.log(btnRemover[0]);
// //olhar erro aqui
// btnRemover[0].addEventListener("click", function(){
//     const selecionarPai = btnRemover[0].parentElement;
//     const selecionarAvo = selecionarPai.parentElement;
//     const selecionarFilme = selecionarAvo.parentElement;
//     selecionarFilme.remove();
// });
