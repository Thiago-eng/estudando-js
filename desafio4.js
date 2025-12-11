function medidorDeVelocidade(velocidade) {
    if (velocidade >= 100) {
        return "Perigo"
    } else if (velocidade >= 80){
        return "Cuidado"
    } else if (velocidade >= 60){
        return "Velocidade Moderada"
    } else {
        return "Seguro"
    }
}
console.log(medidorDeVelocidade(80)) // Atenção