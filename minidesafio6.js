let numero1 = 300
let numero2 = 250
let numero3 = 200

let numeroMaior = (numero1 > numero2 && numero1 > numero3)
let numeroMedio = (numero2 > numero3 && numero2 < numero1)
let numeroMenor = (numero3 < numero1 && numero3 < numero2)

if (numero1 >= numero2 && numero1 >= numero3) {
    console.log("O maior número é: " + numero1)
} else if (numero2 >= numero3 && numero2 < numero1) {
    console.log("O segundo maior número é: " + numero2)
} else if (numero3 < numero1 && numero3 < numero2) {
    console.log("O menor número é: " + numero3)
} else {
    console.log("Números iguais")
}