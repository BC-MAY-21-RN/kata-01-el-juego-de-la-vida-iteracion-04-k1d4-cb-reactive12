import Board from './Board.js'

let tabla = new Board(4, 4)
console.table(tabla.table)

tabla.calcNextGen()

console.table(tabla.table)