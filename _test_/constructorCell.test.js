const { Cell } = require('../Cell')
const { Board } = require('../Board')

let testCell = new Cell(0, 4)
let testBoard = new Board(4, 4)
let tablero = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

test('Provided props are numbers', () => {
    expect((isNaN(testBoard.row)) && (isNaN(testBoard.column))).toBe(false)
    expect((isNaN(testCell.x)) && (isNaN(testCell.y))).toBe(false)
})

test('Quantity of cell neighbours are recieved correctly', () => {
    expect((testCell.getNeighbour(tablero, 4, 8))).toBe(1)
})

test('Define if the cells should live or die', () => {
    expect(testBoard.scanBoard(tablero, 4, 8)).toStrictEqual([[1, 3, 1]])
})

test('Size of the Board matches the props', () => {
    expect(testBoard.table.length).toBe(testBoard.column)
    expect((testBoard.table[0].length)).toBe(testBoard.row)
})

//npm init -y
//npm i jest --save-dev
