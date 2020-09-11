console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
//const readline = require('readline-sync')

console.log(db);
//console.table(db) - verificar comando para listar os produtos como tabela ***

const{produtos}= db
produtos.sort ((a, b) => b.preco - a.preco)

console.table(produtos)


