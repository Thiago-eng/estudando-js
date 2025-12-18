let temperatura = 37

function classificarTemperatura(temperatura) {
    if (temperatura <= 10) {
        return "Muito frio"
    } else if (temperatura <= 25) {
        return "Agradável"
    } else {
        return "Quente"
    }
}
console.log(classificarTemperatura(5))
console.log(classificarTemperatura(20))