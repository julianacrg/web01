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

  $("#peso").blur(function(){
    validarCampo("#peso", "#gPeso", "#alertaP");
  });
  $("#altura").blur(function(){
    validarCampo("#altura", "#gAltura", "#alertaA");
  });


  $("button[name='calculo']").click(function(){

   if (validarCampo("#peso", "#gPeso", "#alertaP") &&
        validarCampo("#altura", "#gAltura", "#alertaA")) {
          // Operar
          var peso = parseFloat($("#peso").val());
          var altura = parseFloat($("#altura").val());

          var res = (peso / (altura * altura));

          var sau = (altura * altura) * 24.9;

          // Apresentar o resultado
          $("input[name='res']").val(res);

          $("input[name='sau']").val(sau);
        }

  });

});