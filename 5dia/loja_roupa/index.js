// CRIANDO AS VARIAVEIS
let camiseta
let short
let troca
let opcao = prompt("Bem vindo - Company.Inveest: Faca sua escolha " + "\n1 - Camiseta" + "\n2 - Short" + "\n3 - Troca")

// CRIANDO SWITCHCASE
switch(opcao){
    case "1":
        camiseta = parseInt(prompt("Quando voce deja gasta em camisetas"))
        quantidade = camiseta / 25
        console.log("Voce pode levar ate " + quantidade + " camisetas")
        break;
    case "2":
        short = parseInt(prompt("Quanto vode deseja gastar com shorts"))
        quantidade = short / 35
        console.log("Voce pode leva ate " + quantidade + " shorts")
        break;
    case "3":
        troca = parseInt(prompt("Quantos produtos seram trocados"))
        console.log("Troca realizada com sucesso..  BOOA")
        break;


}