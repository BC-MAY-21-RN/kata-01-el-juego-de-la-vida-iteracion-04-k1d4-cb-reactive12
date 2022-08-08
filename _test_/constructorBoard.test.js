const { Board } = require('../Board')

test('Props are numbers', () => {
    let test = new Board(4, 4)
    expect((isNaN(test.row)) && (isNaN(test.column))).toBe(false)
})

test('Size of the Board matches the props', () => {
    let test = new Board(4, 8)
    expect(test.table.length).toBe(test.column)
    expect((test.table[0].length)).toBe(test.row)
})

test('Define if the cells should live or die', () => {
    let test = new Board(4, 8)
    let tablero = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
    ];

    expect(test.scanBoard(tablero, 4, 8).cellsToKill).toStrictEqual([])
    expect((test.scanBoard(tablero, 4, 8).cellsToRevive)).toStrictEqual([[3, 3]])
})