import Board from './Board.js'

//const { Board } = require('./Board')

let tabla = new Board(4, 4)
console.table(tabla.table)

tabla.calcNextGen()

console.table(tabla.table)