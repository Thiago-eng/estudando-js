function valorAleatorio(Valores) {
        if (Valores <= 0 || Valores > 100) {
            return "Inválido"
        }
        if (Valores <= 30) return "Mínimo"
        if (Valores <= 70) return "Médio"
        return "Máximo"        
}
console.log(valorAleatorio(150))