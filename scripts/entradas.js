import { criarModal } from "./modal.js";
export let data;

async function buscarDados(){
    try{
        
        const res = await fetch(geradorNome());
        data = await res.json();
        if(data.Error){
            notie.alert({text: "Filme não encontrado",
                type: 'error',
            });
        }else{
            $(".info-filme").removeClass("esconderModal");
        }
        criarModal(data);
        nome.value = "";
        ano.value = "";
        
    }catch (error){
        notie.alert({text: error.message,
            type: 'error',
            time: 1.5,
        });
    }
}

function geradorNome(){
    const nome = $("#nome").val().trim();
    const ano = $("#ano").val().trim();
  
    let  URLapi;
    if(nome === "" || nome === null){
        throw new Error("O nome do filme deve ser informado!");
    }
    let NovoNome = nome.split(" ").join("+");
    if(ano === "" || ano === null){
        URLapi = `http://www.omdbapi.com/?apikey=${APIkey}&t=${NovoNome}`;
    }else{
        if(ano.length !== 4 || isNaN(Number(ano))){
            throw new Error("O ano deve ser números e conter 4 digitos");
            
        }else{
            URLapi = `http://www.omdbapi.com/?apikey=${APIkey}&t=${NovoNome}&y=${ano}`;
        }
    }
    
    return URLapi;
}

$("#BotaoBuscar").click(buscarDados);
