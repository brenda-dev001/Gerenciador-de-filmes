$("#fechar-div").click(function(){
    $(".info-filme").addClass("puxarModal");
    $(".info-filme").addClass("esconderModal");
});

export function criarModal(data){
    $("#nome-filme").text(data.Title);  
    $("#mudarIMG").attr("src", data.Poster);  
    $(".resumo-filme").text(data.Plot);   
    $("#elenco-filme").text(data.Actors);  
    $("#genero-filme").text(data.Genre);
  
}




