$("#fechar_modal").click(()=>{
    $(".filme-modal").removeClass("filme-modal--entrando");
    $(".filme-modal").addClass("filme-modal--saindo filme-modal--oculto");
});

export function criarModal(data){
    $("#titulo_filme").text(data.Title);  
    $("#poster_filme").attr("src", data.Poster);  
    $("#resumo_filme").text(data.Plot);   
    $("#elenco_filme").text(data.Actors);  
    $("#genero_filme").text(data.Genre);
  
}


