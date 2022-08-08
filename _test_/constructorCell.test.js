const { Cell } = require('../Cell')
const { Board } = require('../Board')

test('Cell position is a number', () => {
    let test = new Cell(0, 1)
    expect((isNaN(test.x)) && (isNaN(test.y))).toBe(false)
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
