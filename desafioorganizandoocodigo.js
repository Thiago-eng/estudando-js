let itens = 5

function verificarStatusPedido(itens) {
    if (itens === 0) {
        console.log("Pedido cancelado")
    } else if (itens <= 2) {
        console.log("Pedido está pendente")
    } else if (itens <= 5) {
        console.log("Pedido em preparação")
    } else 
        console.log("Pedido finalizado")
}

verificarStatusPedido(itens)