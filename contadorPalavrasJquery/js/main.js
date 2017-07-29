//var palavras = $("#principal").text().split(" ").length;
var spanpalavras = $("#span-palavras");
var tempoRestante = $("#tempo").text();
var spancaracteres = $("#span-caracteres")
var campo = $("#texto");

$(function(){
	cronometro();
	atualizaInfos();
	alterarBorda();
	limpar();
});

function alterarBorda(){
var textoprincipal = $("#principal").text();
campo.on("input",function(){
	var textoprincipalstr = textoprincipal.substr(0,campo.val().length);
	
	if (textoprincipalstr == campo.val())
	{
		campo.removeClass("borda-vermelha");
		campo.addClass("borda-verde");
		console.log("CERTO");
	}
	else
		{
			campo.removeClass("borda-verde");
			campo.addClass("borda-vermelha");
			console.log("ERRADO");
		}
});
};

//spanpalavras.text(palavras);
function atualizaInfos(){
	campo.on("input",function(){
		var caracteres = campo.val().length;
		var palavras = campo.val().split(/\S+/).length;
		spancaracteres.text(caracteres);
		spanpalavras.text(palavras);
	});
};

function cronometro(){
campo.one("focus",function(){
	$("#btn-reiniciar").attr("disabled",true);
	var cronometroID = setInterval(function(){
		tempoRestante--;
		$("#tempo").text(tempoRestante);
		if (tempoRestante < 1){
			campo.attr("disabled",true);
			$("#btn-reiniciar").attr("disabled",false);
			clearInterval(cronometroID);
			campo.toggleClass("campo-desabilitado");
			inserirPlacar();
		}
	},1000)
});
};

function limpar(){
	spanpalavras.text("0");
	 $("#tempo").text("3");
	 tempoRestante = 3;
	spancaracteres.text("0");
	campo.val("");
	campo.attr("disabled",false);
}

$("#btn-reiniciar").click(function(){
	console.log("clicked")
	limpar();
	cronometro();
	campo.toggleClass("campo-desabilitado");
	campo.removeClass("borda-vermelha");
	campo.removeClass("borda-verde");
});
