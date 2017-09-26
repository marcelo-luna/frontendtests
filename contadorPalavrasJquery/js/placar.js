$("#btn-async").click(sincronizaPlacar);

function inserirPlacar(){
	console.log("inserirPlacar");
	var corpoTabela = $(".placar").find("tbody");
	var usuario = $("#usuarios").val();
	var btnRemover = "<a href='#' class='botao-remover'><i class='small material-icons'>delete</i></a>";
	var numPalavras = $("#span-palavras").text();
	//criaLinha(usuario, numPalavras);
	/*var NovaLinha = "<tr>" +
						"<td>" + usuario + "</td>" + 
						"<td>" + numPalavras + "</td>" + 
						"<td>" + btnRemover + "</td>" + 
					"</tr>";*/
	corpoTabela.prepend(criaLinha(usuario, numPalavras));
	$(".placar").slideDown(250);
	scrollPlacar();
};

function criaLinha(usuario, numPalavras){
	var linha = $("<tr>");
	var colunaUsuario = $("<td>").text(usuario);
	var colunaPontos = $("<td>").text(numPalavras);
	var link = $("<a>").addClass("botao-remover").attr("href","#");
	var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");
	var colunaRemover = $("<td>");

	link.append(icone);
	colunaRemover.append(link);
	linha.append(colunaUsuario);
	linha.append(colunaPontos);
	linha.append(colunaRemover);

	linha.find(".botao-remover").click(removeLinha);
	return(linha);
};

function scrollPlacar(){
	var posicaoplacar = $(".placar").offset().top;

	$("body").animate(
	{
		scrollTop: posicaoplacar + "px"
	},1000);
}

function removeLinha()
{
	event.preventDefault();
	var linha = $(this).parent().parent();
	linha.fadeOut();
    setTimeout(function() {
        linha.remove();
    }, 1000);
	console.log("clicado");
};

/*$(".botao-remover").click(function(event){
	event.preventDefault();
	$(this).parent().parent().remove();
	console.log("clicado");
});*/

function sincronizaPlacar(){
	var placar = [];

	var linhas = $("tbody>tr");


	linhas.each(function(){
		var usuario = $(this).find("td:nth-child(1)").text();
		var palavras = $(this).find("td:nth-child(2)").text();

			var score = {
		usuario: usuario,
		pontos: palavras
	}
	placar.push(score);
	});

	var dados = {
		placar: placar
	}

	$.post("http://localhost:3000/placar", dados, function(){
		$(".tooltip").tooltipster("open");
		console.log("Placar inserido com suesso!!");
	}).fail(function(){
		$(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar");
	}).always(function(){
		setTimeout(function(){
			$(".tooltip").tooltipster("close"); 
		},1300)
		
	})
	
}

function atualizaPlacar(){
	$.get("http://localhost:3000/placar",function(data){
		$(data).each(function(){
			var linha = criaLinha(this.usuario, this.pontos);
			linha.find(".botao-remover").click(removeLinha);
			$("tbody").append(linha);
		});
	});
}