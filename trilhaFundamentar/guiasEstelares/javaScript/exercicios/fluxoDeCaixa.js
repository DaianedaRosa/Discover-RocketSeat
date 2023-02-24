/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/


let familia = {
    ganhos: [1500, 1000, 2500],
    despesas: [150, 1500, 200, 300]
}

function soma (array) {
    let total = 0

    for(let value of array) {
        total += value
    }

    return total
}

function calculando () {
    const calculandoGanhos = sum(familia.ganhos)
    const calculandoDespesas = sum(familia.despesas)

    const total = calculandoGanhos - calculandoDespesas;

    const saldoPositivo = total >=0;

    let aviso = "negativo";

    if (saldoPositivo) {
         let aviso = "positivo"
    }

    console.log('seu saldo é ${aviso}: ${total.toFixed(2)}')
}

calculando()