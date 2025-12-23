let energia = 80

if (energia < 0 || energia > 100) {
    console.log("Energia inválida")
} else if (energia <= 20) {
    console.log("Exausto")
} else if (energia <= 50) {
    console.log("Cansado")
} else if (energia <= 80) {
    console.log("normal")
} else if (energia <= 100) {
    console.log("Energizado")
}