let pontuacao = 1050

if (pontuacao <= 0) {
    console.log("Pontuação inválida")
} else if (pontuacao <= 49) {
    console.log("Muito baixo")
} else if (pontuacao <= 99) {
    console.log("Regular")
} else if (pontuacao <= 199) {
    console.log("Bom") 
} else if (pontuacao <= 499) {
    console.log("Muito bom")
} else {
    console.log("Excelente")
}
