import leia from "readline-sync"

var lado1 = leia.questionFloat("Digite o primeiro lado\n")
var  lado2 = leia.questionFloat (" Digite o segundo lado\n")
var  lado3 = leia.questionFloat (" Digite o terceiro lado\n")

if (lado1 > lado2 + lado3 || lado2 > lado1 + lado3 || lado3 > lado2 + lado1){

    console.log("Nao e um triangulo")

}else if (lado1 === lado2 && lado2=== lado3){

    console.log("E um Equilátero")

}else if (lado1 === lado2 || lado2=== lado3 || lado1=== lado3){

    console.log("E um Isósceles")

}else if (lado1 != lado2 && lado2!= lado3 && lado1!= lado3){

    console.log("E um Escaleno")
}