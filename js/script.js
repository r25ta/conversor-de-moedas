//Criação das variáveis para receber os valores que serão armazenados e utilizados para conversão.
var vlrEmDolar, vlrCotacaoDolarParaReal, vlrConvertidoDolarParaReal;

vlrCotacaoDolarParaReal = 5.51 

function convertUsToReal(vlrDolar){
  if (vlrDolar == "" || vlrDolar == null){
    document.getElementById("outVlrDolar").innerText = "Favor preencher o campo com valor que deseja converter para Reais (R$)!";
    
  } else if (vlrDolar <= 0 ){
  document.getElementById("outVlrDolar").innerText = "Valor inválido, favor preencher o campo corretamente!";
  
  } else {
    vlrConvertidoDolarParaReal = (parseFloat(vlrDolar) * vlrCotacaoDolarParaReal).toFixed(2); 
    document.getElementById("outVlrDolar").innerText = "O valor U$ " + vlrDolar + " convertido para Reais fica R$ " + vlrConvertidoDolarParaReal;  
 
    document.getElementById("inVlrDolar").value = null;
  };
}


