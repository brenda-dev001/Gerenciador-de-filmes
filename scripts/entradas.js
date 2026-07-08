import { criarModal } from "./modal.js";
export let data;

//Faz captura de resposta da API.

async function buscarDados(){
    try{
        
        const res = await fetch(geradorNome());
        data = await res.json();
        if(data.Error){
            notie.alert({text: "Filme não encontrado.",
                type: 'error',
            });
        }else{
            $(".filme-modal").removeClass("filme-modal--oculto filme-modal--saindo");
        }
        criarModal(data);
        nome_filme.value = "";
        ano.value = "";
        
    }catch (error){
        notie.alert({text: error.message,
            type: 'error',
            time: 1.5,
        });
    }
}

//Realiza captura de entradas e formata URL aceita pela API.

function geradorNome(){
    const nome = $("#nome_filme").val().trim();
    const ano = $("#ano").val().trim();
  
    let  URLapi;
    if(nome === "" || nome === null){
        throw new Error("O nome do filme deve ser informado!");
    }
    let nomeFormatado = nome.split(" ").join("+");
    if(ano === "" || ano === null){
        URLapi = `http://www.omdbapi.com/?apikey=${APIkey}&t=${nomeFormatado}`;
    }else{
        if(ano.length !== 4 || isNaN(Number(ano))){
            throw new Error("O ano deve ser números e conter 4 digitos.");
            
        }else{
            URLapi = `http://www.omdbapi.com/?apikey=${APIkey}&t=${nomeFormatado}&y=${ano}`;
        }
    }
    
    return URLapi;
}

$("#botao_buscar").on("click", buscarDados);
