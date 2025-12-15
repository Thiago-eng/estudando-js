let saldo = 1500

if (saldo < 0) {
    console.log("Saldo negativo")
} else if (saldo === 0) {
    console.log("Saldo zerado")
} else if (saldo < 100) {
    console.log("Saldo baixo")
} else {
    console.log("Saldo saudável")
}

console.log("Saldo atual: R$" + saldo + ",00")