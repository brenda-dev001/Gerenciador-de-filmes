$("#fechar_div").click(function(){
    $(".info_filme").addClass("puxar_modal");
    $(".info_filme").addClass("esconder_modal");
});

export function criarModal(data){
    $("#nome_filme").text(data.Title);  
    $("#mudar_img").attr("src", data.Poster);  
    $(".resumo_filme").text(data.Plot);   
    $("#elenco_filme").text(data.Actors);  
    $("#genero_filme").text(data.Genre);
  
}




