// criando avariaveis
let nome
let idade
let temCarta = false
let temCarro = false

//pedindo informacoes ao usuario
nome = prompt("digite seu nome")
idade = parseInt(prompt("digite sua idade"))

let opcaoCarta = prompt("voce tem carta de motorista? (sim/nao)")


let opcaoCarro = prompt("voce tem carro? (sim/nao)")
if (opcaoCarro == "sim"){
    temCarro = true
}

// exibindo mensagem no console

if (idade < 18 && temCarta){
    console.log(nome + ", voce nao pode dirigir")
}else if(idade >= 18 || temCarta && temCarro){
    console.log(nome + ",pode dirigir mas nao tem carro")
}else{
    console.log(nome + ", voce e o motorista")
}

