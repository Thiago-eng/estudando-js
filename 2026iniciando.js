function valorAleatorio(Valores) {
        if (Valores <= 0 || Valores > 100) {
            return "Inválido"
        }
        if (Valores <= 30) return "Mínimo"
        if (Valores <= 70) return "Médio"
        return "Máximo"        
}
console.log(valorAleatorio(150))
File: desafioconsolidar.js
function contadorNumero(valor) {
    if (valor < 0 || valor > 100) {
        return "Inválido"
    }
    if (valor <= 30) return "Fraco"
    if (valor <= 70) return "Médio"
    return "Forte"
}
console.log(contadorNumero(85))