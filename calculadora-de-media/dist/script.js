var nome = 'Diana'

var notaPrimeiroBimestre = prompt('Digite a nota do primeiro bimestre: ') 
var notaSegundoBimestre = prompt('Digite a nota do segundo bimestre: ')
var notaTerceiroBimestre = prompt('Digite a nota do terceiro bimestre: ')
var notaQuartoBimestre = prompt('Digite a nota do quarto bimestre: ') 

var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)
if(notaFixada > 7){
  console.log(`A(O) aluna(o) ${nome} foi aprovada(o)!!!!`)
}
if(notaFixada < 7){
  console.log(`A(O) aluna(o) ${nome} foi reprovada(o)!!!!`)
}

console.log(notaFixada)