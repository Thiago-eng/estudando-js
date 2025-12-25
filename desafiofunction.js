function verificarEnergia(energia) {
    if (energia < 0 || energia > 100) {
        return "Energia inválida"
    } else if (energia <= 20) {
        return "Exausto"
    } else if (energia <= 50) {
        return "Cansado"
    } else if (energia <= 80) {
        return "Normal"
    } else if (energia <= 100) {
        return "Energizado"
    }
}
console.log(verificarEnergia(60)) // Output: Normal