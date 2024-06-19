import leia from "readline-sync"

var ano = leia.questionInt("Digite um ano\n")

if ( ano %4==0 && ano %100!=0 || ano %400===0){
        console.log(ano + "  E UM ANO BISEXTO")
    
} else{
    console.log(ano + " NAO E UM ANO BISEXTO")
}

