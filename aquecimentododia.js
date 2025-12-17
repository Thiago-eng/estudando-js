let idade = 92

function classificarIdade(idade) {
    if (idade < 0 || idade > 12){
        return "Idade inválida"
    
} else if (idade <= 12) {
    return "Criança"
} else if (idade <= 64) {
    return "Adolescente"
} else if (idade <= 120) {
    return "Adulto"
} else {
    return "Idoso"
}
}

console.log(classificarIdade(idade))