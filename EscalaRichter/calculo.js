function validarCampo(campo, grupo, alerta) {

  console.log("validarCampo: " + campo + " " + grupo + " " + alerta);

  // Validar os campos - valor1 e valor2
  var valor1 = parseFloat($(campo).val());

  // Validar - valor
  if (isNaN(valor1)) {
      // Exibe o alerta
      $(alerta).slideDown();
      // Adiciona a classe CSS de erro
      $(grupo).addClass("has-error");
      // Limpa o campo
      $(campo).val("");
      // Define o foco para o campo
      $(campo).focus();
      return false;
  }

  // Valor - correto
  // Remover a classe de erro;
  $(grupo).removeClass("has-error");
  // Ocultar o alerta - mensagem
  $(alerta).hide();
  return true;
}


// Aguardar que o documento esteja completo - carregado
$(document).ready(function(){

  console.log("Documento carregado.");

  $("#amplitude").blur(function(){
    validarCampo("#amplitude", "#gAmpli", "#alertaA");
  });
  $("#tempo").blur(function(){
    validarCampo("#tempo", "#gTempo", "#alertaT");
  });


  $("button[name='calculo']").click(function(){

   if (validarCampo("#amplitude", "#gAmpli", "#alertaA") &&
        validarCampo("#tempo", "#gTempo", "#alertaT")) {

          var amplitude = parseFloat($("#amplitude").val());
          var tempo = parseFloat($("#tempo").val());

          var mag = (Math.log10(amplitude)) + (3 * (Math.log10((8*tempo)))) - 2.92;

          
          $("input[name='mag']").val(mag);

          if(mag < 3.5){
            $("input[name='ef']").val("Geralmente não sentido, mas gravado.");

          }else if(mag >= 3.5 && mag < 5.5){
            $("input[name='ef']").val("Às vezes sentido, mas raramente causa danos.");

          }else if(mag >= 5.5 && mag <= 6){
            $("input[name='ef']").val("No máximo causa pequenos danos a prédios bem construídos, mas pode danificar seriamente casas mal construídas em regiões próximas.");

          }else if(mag >= 6.1 && mag <= 6.9){
            $("input[name='ef']").val("Pode ser destrutivo em áreas em torno de até 100 km do epicentro.");

          }else if(mag >= 7 && mag <= 7.9){
            $("input[name='ef']").val("Grande terremoto. Pode causar sérios danos numa grande faixa.");

          }else{
            $("input[name='ef']").val("Enorme terremoto. Pode causar graves danos em muitas áreas mesmo que estejam a centenas de quilômetros.");
          }
        }

  });

});