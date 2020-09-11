console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')

console.log(db);
//console.table(db) - verificar comando para listar os produtos como tabela ***

const{produtos}= db
produtos.sort ((a, b) => b.preco - a.preco)

console.table(produtos)

const readline = require('readline-sync')

const array = new Array()

let IDproduto
let procurarID
let itensCompras
let promoCode

const shopping = () => {

  IDproduto = parseInt(readline.question('Digite a ID do produto desejado: '))

  for (i = 0; i < 1000; i++) {
    procurarID = produtos.find(item => item.id === IDproduto)
    if (procurarID) {
      break;

    } else {
      IDproduto = parseInt(readline.question('Id não encontrado, tente novamente: '))
    }
  }

  itensCompras = parseInt(readline.question('Digite a quantidade de produtos desejados: '))

  for (i = 0; i < 1000; i++) {
    if (itensCompras > 0) {
      break;
    } else {
      itensCompras = parseInt(readline.question('Digite uma quantidade válida: '))
    }
  }