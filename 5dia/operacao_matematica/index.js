
/* exemplo

var opcao = prompt("escolha uma opcao de 1 a 5")

switch (opcao){
    case "1":
        console.log("voce escolheu a opcao 1")
        break;
}
*/

/*
primero a ser feito
var number1 = prompt("digite um numero")
var number2 = prompt("digite um segundo numero")
var operacao = prompt("escolha qual opercao era utilizar")

switch()
*/

// CRIANDO VARIAVEIS
let num1 = parseInt(prompt("Digite o primeiro numero"))
let num2 = parseInt(prompt("Digite o segundo numero"))
let opcao = parseInt(prompt("Escolha a operacao que deseja realizar:" + "\n1 = +; \n2 = -; \n3 = *; \n4 = /"))

// CRIANDO SWITCHCASE
switch (opcao) {
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break;
    case 4:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;

}