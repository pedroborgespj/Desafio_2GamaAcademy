const listaProdutos = require('./database');

// criando lista única de departamentos: sem valores duplicados
var lista = new Array(listaProdutos.length)
for (let p in listaProdutos) {
    var {departamento: {nomeDepto}} = listaProdutos[p];
    lista[p] = nomeDepto
}
const setUnico = new Set(lista);
const listaDepartamentos = [...setUnico];

//Question 11

function somarEstoque(departamento) {
    let somarEstoque = 0
    for (let produto of listaProdutos) {
      if (produto.departamento.nomeDepto == departamento) {
        somarEstoque += produto.qtdEstoque
      }
    }
    return { departamento, somarEstoque }
}
  
let totalItensDepartamento = []
for (let dpto in listaDepartamentos) {
    totalItensDepartamento.push(somarEstoque(listaDepartamentos[dpto]))
}
console.log(totalItensDepartamento)

// Question 12

function somarInventarioDepartamento(departamento) {
    let somarInventario = 0
    for (let produto of listaProdutos) {
      if (produto.departamento.nomeDepto == departamento) {
        somarInventario += produto.qtdEstoque * produto.preco
      }
    }
    somarInventario = somarInventario.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    return { departamento, somarInventario }
}
  
let totalInventario = []
for (let dpto in listaDepartamentos) {
    totalInventario.push(somarInventarioDepartamento(listaDepartamentos[dpto]))
}
console.log(totalInventario)

//Question 13
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

var totalTicketMedioDepartamento = [];
for (let dpto in listaDepartamentos) {
    totalTicketMedioDepartamento.push(calcularTicketMedioDepartamento(listaDepartamentos[dpto]));
}
console.log(totalTicketMedioDepartamento);

//Question 14
