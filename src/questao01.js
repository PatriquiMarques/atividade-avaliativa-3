import leia from "readline-sync"

var produto = leia.questionInt("Digite o valor do produto\n")

if(produto < 20){

    var valorfinal = (produto *0.45) + produto
    console.log(" O valor de venda do produto e  R$: " + valorfinal)

} else {
    var valorfinal = ( produto*0.30) + produto
    console.log("o valor de vendo do produto e R$:" + valorfinal)
}