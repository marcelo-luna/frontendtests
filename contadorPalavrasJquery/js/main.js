var spanpalavras = $("#span-palavras");
var tempoTotal = $("#tempo").text();
var tempoRestante = tempoTotal;
var spancaracteres = $("#span-caracteres")
var campo = $("#texto");

$("#btn-placar").click(mostrarPlacar);

$(function(){
	//cronometro();
	alterarBorda();
	limpar();
	numeroDePalavras();
	atualizaPlacar();
	
	$(".tooltip").tooltipster({
		trigger: "custom"
	});
	
	$("#usuarios").selectize({
		create:true,
		sortField: 'text'
	
	});
});

function alterarBorda(){
	campo.on("input",function(){
		var textoprincipal = $("#principal").text();
		var textoprincipalstr = textoprincipal.substr(0,campo.val().length);

		if (textoprincipalstr == campo.val() && campo.val().length > 0)
		{
			atualizaInfos();
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
	//campo.on("input",function(){
		var caracteres = campo.val().length;
		var palavras = campo.val().trim().split(/\S+/).length - 1;
		spancaracteres.text(caracteres);
		spanpalavras.text(palavras);
	//});
};

function cronometro(){
	campo.one("focus",function(){
		tempoRestante = $("#tempo").text();
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
	$("#tempo").text(tempoTotal);
	tempoRestante =  tempoTotal;
	spancaracteres.text("0");
	campo.val("");
	cronometro();
}

$("#btn-reiniciar").click(function(){
	console.log("clicked")
	limpar();
	campo.toggleClass("campo-desabilitado");
	campo.removeClass("borda-vermelha");
	campo.removeClass("borda-verde");
	campo.attr("disabled",false);
});

function mostrarPlacar(){
	$(".placar").stop().slideToggle(600);
}

function numeroDePalavras(){
	var palavras = $("#principal").text().split(" ").length;
	
	$("#palavras").text(palavras);
}

function atualizaTempo(tempo){
	$("#tempo").text(tempo);
	tempoTotal = tempo;
	tempoRestante = tempo;
}