import { data } from "./entradas.js";
import { adicionarLocalStorage, removerLocalStorage } from "./localStorage.js";

//Cria estrutura para a lista de filmes adicionados.

function criaDivs(data){
    
    const elemento = $(
        `<section>
            <div class="alinhar_divs">
                <div class="img_add">
                    <img src="${data.Poster}" alt="${data.Title}">
                </div>
                <div>
                    <button class="remover">Remover<i class="bi-trash"></i></button>
                </div>
            </div>
        </section>`);

    $(".lista_filmes").append(elemento);
}

//cria e retorna objeto com informações do filme adicionado.

function retornaObjeto(nomeFilme, linkImagem){
    const obj = {  
        Titulo: nomeFilme,
        Poster: linkImagem,
        getTitulo: function(){
            return this.Titulo;
        },
        
        getLinkImagem: function(){
            return this.Poster;
        }
    }
    return obj;
    
}

let listaFilmes = [];

//Adiciona objeto com filme na lista de filmes.

function addNaLista(listaFilmes){
    const objeto = retornaObjeto(data.Title, data.Poster);
    listaFilmes.push(objeto);
    adicionarLocalStorage(objeto.getTitulo(), objeto);
    criaDivs(data);
    $(".info_filme").addClass("esconder_modal");
}

//Verifica se o filme existe na lista.

function existeNaLista(listaFilmes, tituloFilme){

    for(let i = 0; i < listaFilmes.length; i++){
        if(listaFilmes[i].getTitulo() === tituloFilme) return true;
    }
    return false;
}

//Realiza verificações finais e adiciona o filme na lista.

$("#add_filme").on("click", function(){
    
    if(existeNaLista(listaFilmes, data.Title)){
        notie.alert({text: "Esse filme já foi adicionado em sua lista.",
            type: 'error',
            time: 1.6,
        });
    }else{
        addNaLista(listaFilmes);
        notie.alert({text: "Filme adicionado em sua lista com sucesso!",
            type: "success",
            time: 1.7,
        });
    }
});


//Inteligencia para remover filme da lista de filmes

function removeFilmeLista(listaFilmes, nomeFilme){

    for(let i = 0; i < listaFilmes.length; i++){
        if(listaFilmes[i].getTitulo() === nomeFilme){
            removerLocalStorage(listaFilmes[i].getTitulo());
            listaFilmes.slice(i);
        }
    }
}

function verificacoesParaRemocao(listaFilmes, elementoImagem){

    const nomeFilme = $(elementoImagem).children().attr("alt");

    if(existeNaLista(listaFilmes, nomeFilme)){

        removeFilmeLista(listaFilmes, nomeFilme);
        notie.alert({text: "Filme removido com sucesso!",
            type: 'success',
            time: 1.6,
        });
        
    }else{
        notie.alert({text: "Erro ao excluir o filme.",
            type: 'error',
            time: 1.6,
        });
    }
}

//Inteligencia de remover o elemento da lista de adicionados.

$(document).on("click", ".remover", function(){
    const elementoRemover = $(this).parent().parent().parent().parent();
    const imagemElemento = $(this).parent().siblings("div");
    verificacoesParaRemocao(listaFilmes, imagemElemento);
    elementoRemover.remove();
});

