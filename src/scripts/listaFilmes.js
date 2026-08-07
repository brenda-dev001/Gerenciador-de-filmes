import { data } from "./entradas.js";
import { adicionarLocalStorage, removerLocalStorage } from "./localStorage.js";


//Cria estrutura para a lista de filmes adicionados.

function criaDivs(nomeFilme, linkPoster){
    
    const elemento = $(
        `<section>
            <div class="lista-filmes__item">
                <div class="lista-filmes__poster">
                    <img src="${linkPoster}" alt="${nomeFilme}">
                </div>
                <div class="lista-filmes__acoes">
                    <button class="lista-filmes__botao-remover">Remover<i class="bi-trash"></i></button>
                </div>
            </div>
        </section>`);

    $(".lista-filmes").append(elemento);
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

//Adiciona filmes na lista ao recarregar/fechar página.

$(document).on('DOMContentLoaded', ()=>{
    if(localStorage.length > 0){
        $("#main__titulo-principal").addClass("filme-modal--oculto");
    }
    for(let i = 0; i < localStorage.length; i++){
        const filmeString = localStorage.getItem(localStorage.key(i));
        const objetoJsonFilme = JSON.parse(filmeString);
        const objetoFormatadoFilme = retornaObjeto(objetoJsonFilme.Titulo, objetoJsonFilme.Poster);
        criaDivs(objetoFormatadoFilme.getTitulo(), objetoFormatadoFilme.getLinkImagem());
        listaFilmes.push(objetoFormatadoFilme);
    }
});

//Adiciona objeto com filme na lista de filmes.

function addNaLista(listaFilmes){
    const objeto = retornaObjeto(data.Title, data.Poster);
    listaFilmes.push(objeto);
    adicionarLocalStorage(objeto.getTitulo(), objeto);
    criaDivs(objeto.getTitulo(), objeto.getLinkImagem());
    $(".filme-modal").addClass("filme-modal--oculto");
}

//Verifica se o filme existe na lista.

function existeNaLista(listaFilmes, tituloFilme){
    
    for(let i = 0; i < listaFilmes.length; i++){
        if(listaFilmes[i].getTitulo() === tituloFilme) return true;
    }
    return false;
}

//Realiza verificações finais e adiciona o filme na lista.

$("#add_filme").on("click", () =>{
    
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
        $("#main__titulo-principal").addClass("filme-modal--oculto");
    }
});


//Inteligencia para remover filme da lista de filmes

function removeFilmeLista(listaFilmes, nomeFilme){
    
    for(let i = 0; i < listaFilmes.length; i++){
        if(listaFilmes[i].getTitulo() === nomeFilme){
            removerLocalStorage(listaFilmes[i].getTitulo());
            listaFilmes.splice(i, 1);
            break;
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

$(document).on("click", ".lista-filmes__botao-remover", function(){
    const elementoRemover = $(this).parent().parent().parent();
    const imagemElemento = $(this).parent().siblings("div");
    verificacoesParaRemocao(listaFilmes, imagemElemento);
    elementoRemover.remove();
    if(localStorage.length == 0){
        $("#main__titulo-principal").removeClass("filme-modal--oculto");
    }
});
