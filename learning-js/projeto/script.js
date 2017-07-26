var btnCalcImc = document.getElementById("calcula-imcs");
btnCalcImc.addEventListener("click",function calculall()
{
  percorreArray(trPaciente, function(pacienteTr) {

    var trPaciente = document.getElementsByClassName("paciente");
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

    var pacienteAtual = {nome : tdNome.textContent,
                        peso : tdPeso.textContent,
                        altura : tdAltura.textContent,
                        getimc :
                        function calculaimc()
                        {
                          if (this.altura != 0)
                          {
                            var imc = this.peso / (this.altura * this.altura);
                            return imc;
                          }
                          else
                          {
                              console.log("Altura precisa ser maior que 0");
                              //alert("Altura precisa ser maior que 0");
                          }
                        }
                      };

      var imc = pacienteAtual.getimc();
      console.log("imc é " + imc);
      var tdIMC = pacienteTr.getElementsByClassName("info-imc")[0];
      tdIMC.textContent = imc;
      //alert("imc é " + imc);
  });
});
