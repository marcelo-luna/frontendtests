$(function(){
$("#cpfcnpj").on( "focusout", function() {
	var cpfcnpj = $("#cpfcnpj").val().replace(/\./g, '');
	cpfcnpj = cpfcnpj.replace(/\-/g, '');
	cpfcnpj = cpfcnpj.replace(/\//g, '');
	switch (cpfcnpj.length) { 
	case 11: 
		console.log("CPF");
		$("#cpfcnpj").mask('999.999.999-99');
		break;
	case 14: 
		console.log("CNPJ");
		$("#cpfcnpj").mask('99.999.999/9999-99');
		break;
	default: 
		console.log("SEM MASCARA");
		$("#cpfcnpj").val("");
		break;
	}
})

$("#cpfcnpj").on( "focusout", function() {
	$("#cpfcnpj").unmask();
  console.log($( this ).text());
})
});