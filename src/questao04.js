import leia from "readline-sync"

var nota = leia.questionFloat("Digite a nota do aluno\n")

if(nota <0 || nota>10  ){

    console.log(" Digite uma nota valida")

}else if (nota ==10 || nota >= 9 ){

    console.log(" O aluno é conceito A")

}else if(nota >= 8 ){

    console.log(" O aluno é conceito B")

}else if(nota >= 7 ){

    console.log(" O aluno é conceito C")

}else if(nota >= 6 ){

    console.log(" O aluno é conceito D")

}else if(nota < 6 ){

    console.log(" O aluno é conceito F")
}

    

