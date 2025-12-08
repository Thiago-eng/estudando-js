let numero1 = 150
let numero2 = 100
let numero3 = 50

let maior

if (numero1 > numero2) {
    maior = numero1
} else {
    maior = numero2
}
if (maior < numero3) { 
    maior = numero3
}

let menor
if (numero1 < numero2) {
    menor = numero1
} else {
    menor = numero2
}

if (menor > numero3) {
    menor = numero3
}

let mediano

if ((numero1 != maior) && (numero1 != menor)) {
    mediano = numero1
} else if ((numero2 != maior) && (numero2 != menor)) {
    mediano = numero2
} else {
    mediano = numero3
}