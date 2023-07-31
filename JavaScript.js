// calculo IMC


var altura = document.getElementById("altura").value;
var peso = document.getElementById("peso").value;
const IMC = peso / (altura * altura);


//apresentando o resultado em uma div 


console.log(IMC);

// calculo quantidade de água 

var quant_agua_litro;

quant_agua_litro = (peso * 35) / 1000;



//apresentando o resultado da quantidade de água diária necessária em uma div 

console.log(quant_agua_litro);
