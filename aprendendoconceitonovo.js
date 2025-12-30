function avaliarEstado(estado) {
    if (estado === undefined || estado === null) {
        return "Estado inválido"
    }
if (estado === "Baixo") return "Normalizado"
if (estado === "Normal") return "Atenção"
if (estado === "Alta") return "Alerta"
return "Crítico"
}

console.log(avaliarEstado("Alta"))