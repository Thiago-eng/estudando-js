function energiaTotal(energia) {
    if (energia === null || energia === undefined){
        return "Valor inválido"
    } if (energia === "Baixa") return "Normalizado"
    if (energia === "Normal") return "Atenção"
    if (energia === "Alta") return "Perigo"
    return "crítico"
}

console.log(energiaTotal("Baixa")) // "Normalizado"