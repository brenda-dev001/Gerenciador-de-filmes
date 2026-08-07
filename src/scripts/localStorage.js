//armazena Json no LocalStorage

export function adicionarLocalStorage(nomeFilme, objeto){

    localStorage.setItem(nomeFilme, JSON.stringify(objeto));

}

//Remove do LocalStorage pela chave

export function removerLocalStorage(nomeFilme){
    localStorage.removeItem(nomeFilme);
}