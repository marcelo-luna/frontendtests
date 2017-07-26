var trPaciente = document.getElementsByClassName("paciente");

percorreArray(trPaciente, function(pacienteTr){

  var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
  var pacienteAtual = {nome : tdNome.textContent};

    console.log("Paciente " + pacienteAtual.nome);
    //alert("imc é " + imc);
});
