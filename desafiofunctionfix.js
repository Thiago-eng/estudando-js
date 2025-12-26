function nivelCargaBateria(percentual) {
    if (percentual < 0 || percentual > 100) {
        return "Percentual inválido"
    } else if (percentual <= 15) {
        return "Carga crítica"
    } else if (percentual <= 40) {
        return "Carga baixa"
    } else if (percentual <= 70) {
        return "Carga média"
    } else {
        return "Carga alta"
    }
}

console.log("Seu dispositivo está com: ") // Aprendendo a usar funções
console.log(nivelCargaBateria(63)) // output: Carga média