let nota = 6

if (nota >= 0 && nota <= 4.9) {
    console.log("Reprovado")
} else if (nota <= 6.9) {
    console.log("Recuperação")
} else if (nota <= 10) {
    console.log("Aprovado")
} else {
    console.log("Nota inválida")
}