/*
    // 13 - Ticket médio por departamento (similar ao item anterior, porém retornando uma lista de objetos que contenha o nome do departamento e o seu ticket médio). Este é um exercícios difícil, porém é descomplicado de ser realizado tendo claro as demais saídas até então. Verifique a possibilidade de reutilizar parte da programação ou sua lógica trabalhada.

*/

const listaProdutos = require('./database');

// criando lista única de departamentos: sem valores duplicados
var lista = new Array(listaProdutos.length)
for (let p in listaProdutos) {
    var {departamento: {nomeDepto}} = listaProdutos[p];
    lista[p] = nomeDepto
}
const setUnico = new Set(lista);
const listaDepartamentos = [...setUnico];

// funcao para retornar o ticketMedio de cada departamento
function calcularTicketMedioDepartamento(departamento) {
    let soma = 0;
    let aux = 0;
    let tMedio = 0;
    for (p in listaProdutos) {
        if (listaProdutos[p].departamento.nomeDepto == departamento) {
            soma += listaProdutos[p].preco;
            aux += 1;
        }
    }
    tMedio = soma / aux;
    tMedio = tMedio.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return {departamento, tMedio};
}

// criando um array de objetos com cada departamento e seu ticketMedio
var totalTicketMedioDepartamento = [];
for (let dpto in listaDepartamentos) {
    totalTicketMedioDepartamento.push(calcularTicketMedioDepartamento(listaDepartamentos[dpto]));
}

console.log(totalTicketMedioDepartamento);