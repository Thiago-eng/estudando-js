let logado = true
let moderador = true
let banido = false

let podeLogar = false

if (logado) {
       podeLogar = true 
} else if (moderador) {
    podeLogar = true 
} else if (banido) {
    podeLogar = false
}

if (podeLogar) {
    console.log("Pode logar no sistema")
} else {
    console.log("Não pode logar no sistema")
}