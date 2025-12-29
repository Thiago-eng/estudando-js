function avaliarEmergencia(Estado) {
    if (Estado < 0 || Estado > 100) {
        return "Valor inválido" // Fora dos limites estebelecidos na regra proposta
    } 
 if (Estado <= 25) 
    return "Normalizado" // Reconhecimento de emergência controlada
 if (Estado <= 55) 
    return "Atenção" // Situação que requer monitoramento
 if (Estado <= 75) 
    return "Alerta" // Situação preocupante que exige ação
 return "Crítico" // Situação grave que necessita de intervenção imediata
 }

console.log(avaliarEmergencia(70))