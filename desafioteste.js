let velocidade = 50

if (velocidade < 0) {
    console.log("Velocidade inválida")
} else if (velocidade <= 40) {
    console.log("Muito lenta")
} else if (velocidade <= 80) {
    console.log("Velocidade permitida")
} else if (velocidade <= 120) {
    console.log("Alta velocidade")
} else {
    console.log("Velocidade perigosa")
}