let idade = 34

if (idade >= 0 && idade <= 12) {
    console.log("Idade de criança")
} else if (idade <= 18) {
    console.log("Idade de adolescente")
} else if (idade <= 64) {
    console.log("Idade de adulto")
} else if (idade <= 120) {
    console.log("Idade de idoso")
} else {
    console.log("Idade inválida")
}