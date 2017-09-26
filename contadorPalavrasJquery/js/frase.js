$("#btn-frase").click(pegarFrase);
$("#botao-frase-id").click(buscaFrase);

function pegarFrase(){
	$("#spinner").toggle();
	$.get("http://localhost:3000/frases",fraseAleatoria).fail(
		function(){
			$("#erro").toggle();
			setTimeout(function(){
				$("#erro").toggle();
			},1000)
		}).always(function(){
		$("#spinner").toggle();
	});

}

function fraseAleatoria(data) {
	var frase = $("#principal");
	var numeroAleatorio = Math.floor(Math.random() * data.length);

	frase.text(data[numeroAleatorio].texto);
	numeroDePalavras();
	atualizaTempo(data[numeroAleatorio].tempo);
}

function buscaFrase(){
	 $("#spinner").toggle();

	 var fraseId = $("#txt-frase-id").val();
	 var dados = {id : fraseId};

	 $.get("http://localhost:3000/frases", dados, trocaFrase).fail(function(){
	 	$("#erro").toggle();
	 	setTimeout(function(){
	 		$("#erro").toggle();
	 	},2000);
	 }).always(function(){
	 	$("#spinner").toggle();
	 });
}

function trocaFrase(data){
	var frase = $("#principal");
	frase.text(data.texto);
	numeroDePalavras();
	atualizaTempo(data.tempo);
}