const temFome = prompt("Voce esta com fome ? ( sim / nao )")
const temDinheiro = prompt("Voce tem dinheiro ? (sim/nao)")
const restauranteAberto = prompt("O restaurante esta aberto? (sim/nao)")

if (temFome === "nao" || temDinheiro == "nao") {
    console.log("hoje a janta sera em casa");
}else if (temDinheiro === "sim" && restauranteAberto === "sim") {
    console.log("hoje o jantar sera no seu restaurante preferido!");
}else{
    console.log("peca um delivery!");
}