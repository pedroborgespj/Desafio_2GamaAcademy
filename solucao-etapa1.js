const listaProdutos = require('./database')
// Question 1
function somarEstoque() {
  let soma = 0
  for (let p in listaProdutos) {
    soma += listaProdutos[p].qtdEstoque
  }
  return soma
}

console.log(`Ex1: A Quantidade total de itens em estoque é ${somarEstoque()}.`)

// Question 2
function somarDestaque() {
  let soma = 0
  for (let p in listaProdutos) {
    if (listaProdutos[p].emDestaque === 'sim') {
      soma += listaProdutos[p].qtdEstoque
    }
  }
  return soma
}

console.log(`Ex2: A Quantidade total de itens em destaque é ${somarDestaque()}`)

// Question 3
function somarDisponiveis() {
  let soma = 0
  for (let p in listaProdutos) {
    if (listaProdutos[p].disponivel === 'sim') {
      soma += listaProdutos[p].qtdEstoque
    }
  }
  return soma
}

console.log(
  `Ex3: A Quantidade total de itens disponíveis é ${somarDisponiveis()}.`
)

// Question 4
function somarDisponiveisDestaque() {
  let soma = 0
  for (let p in listaProdutos) {
    if (
      listaProdutos[p].emDestaque === 'sim' &&
      listaProdutos[p].disponivel === 'sim'
    ) {
      soma += listaProdutos[p].qtdEstoque
    }
  }
  return soma
}

console.log(
  `Ex4: A Quantidade de itens disponíveis e em destaque é ${somarDisponiveisDestaque()}.`
)

// Question 5

const valorTotalProduto = listaProdutos.map(value => {
  return value.preco * value.qtdEstoque
})

const totalInv = valorTotalProduto.reduce((sum, produtos) => {
  return sum + produtos
})
console.log(
  `Ex5:O valor total do inventário da empresa é $ ${totalInv.toFixed(2)}`
)

// Question 6
let produtoMaisCaro = 0
let produtoMaisBarato = 0
let nomeDepartamento = ''
let nomeDepartamento2 = ''
let nomeProduto = ''
let nomeProduto2 = ''

listaProdutos.map(item => {
  for (item.preco.value in listaProdutos) {
    if (item.preco > produtoMaisCaro) {
      produtoMaisCaro = item.preco
      produtoMaisBarato = item.preco
      nomeProduto = item.descricao
      nomeDepartamento = item.departamento.nomeDepto
    }
  }
})

console.log(
  `Ex6:O produto mais caro é : ${nomeProduto}, no valor de R$ ${produtoMaisCaro.toFixed(
    2
  )}, do departamento de ${nomeDepartamento}`
)

// Question 7
listaProdutos.map(item => {
  for (item.preco.value in listaProdutos) {
    if (item.preco < produtoMaisBarato) {
      produtoMaisBarato = item.preco
      nomeProduto2 = item.descricao
      nomeDepartamento2 = item.departamento.nomeDepto
    }
  }
})
console.log(
  `Ex7:O produto mais barato é : ${nomeProduto2}, no valor de R$ ${produtoMaisBarato.toFixed(
    2
  )}, do departamento de ${nomeDepartamento2}`
)

//Question 8
function calcularMaisValioso() {
  let maisValioso = listaProdutos[0].qtdEstoque * listaProdutos[0].preco
  let produto = ''
  for (p in listaProdutos) {
    if (listaProdutos[p].qtdEstoque > 0) {
      valor = listaProdutos[p].qtdEstoque * listaProdutos[p].preco
      if (valor > maisValioso) {
        maisValioso = valor
        produto = listaProdutos[p].descricao
      }
    }
  }
  return `Ex8:O produto ${produto} é o mais valioso da loja valor: R$${maisValioso}.`
}
console.log(calcularMaisValioso())
// Question 9
function calcularMenosValioso() {
  let menosValioso = listaProdutos[0].qtdEstoque * listaProdutos[0].preco
  let produto = ''
  for (p in listaProdutos) {
    if (listaProdutos[p].qtdEstoque > 0) {
      valor = listaProdutos[p].qtdEstoque * listaProdutos[p].preco
      if (valor < menosValioso) {
        menosValioso = valor
        produto = listaProdutos[p].descricao
      }
    }
  }
  return `Ex9:O produto ${produto} em estoque é o menos valioso da loja e custa valor: R$${menosValioso}.`
}
console.log(calcularMenosValioso())

// Question 10

function calcularMedia() {
  let soma = 0
  for (let p in listaProdutos) {
    soma += listaProdutos[p].preco
  }
  ticketMedio = soma / listaProdutos.length
  const formatado = ticketMedio.toLocaleString('pt-BR', {
    styele: 'currency',
    currency: 'BRL'
  })
  return formatado
}
console.log(
  `Ex10:O valor do ticket médio dos produtos da empresa é R$${calcularMedia()}`
)
