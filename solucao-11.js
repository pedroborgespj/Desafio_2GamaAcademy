/*
    11 - Somatória de itens por departamento (você deverá retornar um objeto contendo o nome do departamento e o total de itens nele - Novamente considere os produtos “EM ESTOQUE” - e é apenas a somatória da quantidade de itens)

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

// funcao para retornar a soma dos produtos de cada departamento
function somarEstoqueDepartamento(departamento) {
    let somaEstoque = 0;
    for (p in listaProdutos) {
        if (listaProdutos[p].departamento.nomeDepto == departamento) {
            somaEstoque += listaProdutos[p].qtdEstoque
        }
    }
    return {departamento, somaEstoque}
}

// criando um array de objetos com cada departamento e seu estoque
var totalItensDepartamento = [];
for (let dpto in listaDepartamentos) {
    totalItensDepartamento.push(somarEstoqueDepartamento(listaDepartamentos[dpto]));
}

console.log(totalItensDepartamento)