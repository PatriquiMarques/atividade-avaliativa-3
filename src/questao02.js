import leia from "readline-sync"

var valorHora = leia.questionFloat("Digite a valor da hora\n")
var  quantidadeHora = leia.questionFloat (" Digite a quantidade de hora\n")
var desconto = leia.questionFloat (" Digite o percentual do desconto\n")

var salarioBruto= valorHora * quantidadeHora
var valorDesconto= (salarioBruto*desconto) /100
var salarioLiquido= salarioBruto - valorDesconto

console.log("O salario bruto é R$ " + salarioBruto)
console.log("O valor do desconto é R$ " + valorDesconto)
console.log("O salario liquido é  é R$ " + salarioLiquido)






