// CRIANDO VARIAVEIS
let valor
let quantidade
let opcao = prompt("Bem vindo ao Company Inveest, voce deseja:" + "\n1 - Abastecer com gasolina; \n2 - Abastecer com a;cool; \n3 - Calibrar os pneus")

// CRIANDO SWITCHCASE
switch (opcao) {
    case "1":
        valor = parseInt(prompt("Digite o valor para abastecer"))
        quantidade = valor / 5
        console.log("Foram abastecidos " + quantidade + "L de gasolina")
        break;
    case "2":
        valor = parseInt(prompt("Digite o  valor para abastecer"))
        quantidade = valor / 3
        console.log("Foram abastecidos" + quantidade + "L de alcool")
        break;
    default:
        console.log("Pneus calibrado com sucesso")
        break;    
}