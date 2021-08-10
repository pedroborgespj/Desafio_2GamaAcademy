/*
   // 15 - Departamento menos valioso (similar ao anterior)
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
    for (let p in listaProdutos) {
        if (listaProdutos[p].departamento.nomeDepto == departamento) {
            somaInventario += listaProdutos[p].qtdEstoque * listaProdutos[p].preco
        }
    }
    return {departamento, somaInventario};
}

// criando um array de objetos com cada departamento e seu inventario
var totalItensDepartamento = [];
for (let dpto in listaDepartamentos) {
    totalItensDepartamento.push(somarInventarioDepartamento(listaDepartamentos[dpto]));
}

// calculando o memos valioso
let menosValioso = totalItensDepartamento[0].somaInventario;
let nome = '';
for (let c in totalItensDepartamento) {
    if (totalItensDepartamento[c].somaInventario < menosValioso) {
        menosValioso = totalItensDepartamento[c].somaInventario;
        nome = totalItensDepartamento[c].departamento;
    }
}
console.log(`O Departamento menos valioso é ${nome}. O seu valor é ${menosValioso.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)