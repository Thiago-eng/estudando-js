let horaSonoDiario = 7

function avaliarSono(horaSonoDiario) {
    if (horaSonoDiario < 0 || horaSonoDiario > 24) {
        return "Valor inválido"
    }  if (horaSonoDiario <= 5) {
        return "Sono insuficiente"
    } else if (horaSonoDiario <= 7) {
        return "Sono leve"
    } else if (horaSonoDiario <= 9) {
        return "Sono adequado"
    } else {
        return "Sono excessivo"
    }
}
console.log(avaliarSono(horaSonoDiario))