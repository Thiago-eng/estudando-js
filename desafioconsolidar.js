function contadorNumero(valor) {
    if (valor < 0 || valor > 100) {
        return "Inválido"
    } 
    if (valor <= 30) return "Fraco"
    if (valor <= 70) return "Médio"
    return "Forte"
}