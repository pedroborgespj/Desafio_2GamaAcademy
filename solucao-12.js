/*
    // 12 - Valor total do inventário por departamento (similar ao item anterior - considere TODOS os produtos)

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

// funcao para retornar a soma do iventario de cada departamento
function somarInventarioDepartamento(departamento) {
    let somaInventario = 0;
    for (p in listaProdutos) {
        if (listaProdutos[p].departamento.nomeDepto == departamento) {
            somaInventario += listaProdutos[p].qtdEstoque * listaProdutos[p].preco
        }
    }
    somaInventario = somaInventario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    return {departamento, somaInventario};
}

// criando um array de objetos com cada departamento e seu inventario
var totalInventarioDepartamento = [];
for (let dpto in listaDepartamentos) {
    totalInventarioDepartamento.push(somarInventarioDepartamento(listaDepartamentos[dpto]));
}

console.log(totalInventarioDepartamento)