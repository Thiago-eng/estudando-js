const focoMapa = {
    30: "Disperso",
    60: "Focado",
    85: "Muito Focado",
    100: "Hiperfoco"
}

function avaliarMapa(valor, mapa) {
    for (let limite in mapa) {
        if (valor <= limite) {
            return mapa[limite]
        }
    }
    return "Inválido"
}
console.log(avaliarMapa(87, focoMapa)) // "Hiperfoco"