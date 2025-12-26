function valorExcesso(definicaoDeValor) {
    if (definicaoDeValor < 0 || definicaoDeValor > 10) {
        return "Valor inválido"
    } 

    if (definicaoDeValor <= 4) return "Reprovado"
    if (definicaoDeValor <= 6) return "Recuperação"
    return "Aprovado"
}
console.log(valorExcesso(9))