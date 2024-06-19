import leia from "readline-sync"

var nota1 = leia.questionFloat("Digite a primeira nota\n")
var  nota2 = leia.questionFloat (" Digite a segunda nota\n")
var nota3 = leia.questionFloat (" Digite a terceira nota\n")
var peso1 = leia.questionFloat("Digite a primeira nota\n")
var peso2 = leia.questionFloat("Digite a primeira nota\n")
var peso3 = leia.questionFloat (" Digite a terceira nota\n")

var media =  ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)

console.log( " A media ponderada do aluno é: " + media)