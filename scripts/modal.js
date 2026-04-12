
const botaoFechar = document.getElementById("fechar-div");
export const selecionarModal = document.getElementsByClassName("info-filme");

botaoFechar.addEventListener("click", function(){
  
    selecionarModal[0].classList.add("puxarModal");
    selecionarModal[0].classList.add("esconderModal");
});

export function criarModal(data){
    const nomeFilme = document.getElementById("nome-filme");
    const resumoFilme = document.getElementsByClassName("resumo-filme");
    const elencoFilme = document.getElementById("elenco-filme");
    const generoFilme = document.getElementById("genero-filme");
    const imgFilme = document.getElementById("mudarIMG");

    nomeFilme.textContent = data.Title;
    imgFilme.setAttribute("src", data.Poster);
    resumoFilme[0].textContent = data.Plot;
    elencoFilme.textContent = data.Actors;
    generoFilme.textContent = data.Genre;
}




