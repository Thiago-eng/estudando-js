let idade = 92

function classificarIdade(idade) {
    if (idade < 0 || idade > 120) {
        return "Idade inválida"

    } else if (idade <= 12) {
        return "Criança"
    } else if (idade <= 18) {
        return "Adolescente"
    } else if (idade <= 64) {
        return "Adulto"
    } else {
        return "Idoso"
    }
}

console.log(classificarIdade(idade))