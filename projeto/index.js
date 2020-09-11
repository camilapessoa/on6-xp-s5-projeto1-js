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