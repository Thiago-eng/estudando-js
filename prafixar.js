let velocidadeAtual = 120
let limiteDaVia = 100
let excessoDeVelocidade = velocidadeAtual - limiteDaVia

if (excessoDeVelocidade <= 0) {
    console.log("Velocidade dentro do limite permitido")
} else if (excessoDeVelocidade <= 20) {
    console.log("Atenção: Você está acima do limite de velocidade")
} else if (excessoDeVelocidade <= 40) {
    console.log("Multa grave por excesso de velocidade")
} else if (excessoDeVelocidade > 40) {
    console.log("Multa gravíssima por excesso de velocidade")
}

