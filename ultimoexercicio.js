function focoMentalValor(valor) {
    if (valor < 0 || valor >100) {
        return "Inválido"
    }
    if (valor <= 30) return "Disperso"
    if (valor <= 60) return "Focado"
    if (valor <= 85) return "Muito Focado"
    return "Hiperfoco"
}

console.log(focoMentalValor(87)) // "Hiperfoco"