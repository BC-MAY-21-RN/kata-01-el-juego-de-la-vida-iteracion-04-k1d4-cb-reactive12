const { Cell } = require('../Cell')
const { Board } = require('../Board')

let testCell = new Cell(0, 1)
let testBoard = new Board(4, 4)

test('Provided props are numbers', () => {
    expect((isNaN(testBoard.row)) && (isNaN(testBoard.column))).toBe(false)
    expect((isNaN(testCell.x)) && (isNaN(testCell.y))).toBe(false)
})

test('Quantity of cell neighbours are recieved correctly', () => {
    let test = new Cell(0, 4)
    let tablero = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    expect((test.getNeighbour(tablero, 4, 8))).toBe(1)
})

//npm init -y
//npm i jest --save-dev
