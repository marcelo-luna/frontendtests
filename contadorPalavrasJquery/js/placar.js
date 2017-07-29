function inserirPlacar(){
	console.log("inserirPlacar");
	var corpoTabela = $(".placar").find("tbody");
	var usuario = "User Teste"
	var btnRemover = "<a href='#' class='botao-remover'><i class='small material-icons'>delete</i></a>";
	var numPalavras = $("#span-caracteres").text();
	//criaLinha(usuario, numPalavras);
	/*var NovaLinha = "<tr>" +
						"<td>" + usuario + "</td>" + 
						"<td>" + numPalavras + "</td>" + 
						"<td>" + btnRemover + "</td>" + 
					"</tr>";*/
	corpoTabela.prepend(criaLinha(usuario, numPalavras));
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

function removeLinha()
{
	event.preventDefault();
	$(this).parent().parent().remove();
	console.log("clicado");
};

/*$(".botao-remover").click(function(event){
	event.preventDefault();
	$(this).parent().parent().remove();
	console.log("clicado");
});*/