import { data } from "./entradas.js";

//Cria estrutura para a lista de filmes adicionados

const criaDivs = function(){
    const criaDiv = $("<div></div>");
    const criaDivImg = $("<div></div>");
    const criaDivBtn = $("<div></div>");
    const criaBtn = $("<button></button>");
    const criaSection = $("<section></section>");
    

   
    $(".lista-filmes").append(criaSection);
    $(".lista-filmes section").append(criaDiv);
    $(".lista-filmes section div").append(criaDivImg).addClass("img_add");
    $(".lista-filmes section div").after(criaDivBtn);
    $(".lista-filmes section div").append(criaBtn).addClass("remover");   
    //$(".lista-filmes section div button").html(`<i class=bi-trash>Remover</i>`);

    //OLHAR DEPOISSS
    

    
    // selecionarArticle[selecionarArticle.length - 1].appendChild(criaSection);
    
    // criaSection.appendChild(criaDiv).classList.add("alinhar-divs");
    // criaDiv.appendChild(criaDivImg).classList.add("img_add");
    // criaDiv.appendChild(criaDivBtn);
    // criaDivBtn.appendChild(criaBtn).classList.add("remover");
    // criaBtn.innerHTML = `Remover<i class=bi-trash></i>`;
    
}

//Adiciona o filme na lista de filmes adicionados

$("#addFilme").click(function(){
    criaDivs();
    AddImg(data);
    $(".info-filme").addClass("esconderModal");
});

//cria e retorna objeto com informações do filme adicionado

function retornaObjeto(nomeFilme, linkImagem){
    const obj = {  
        Titulo: nomeFilme,
        Poster: linkImagem,
    }
    return obj;
}

//Adicionar filme na lista
let listaFilmes = [];

function addNaLista(objeto){
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

function AddImg(data){
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
