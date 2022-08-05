const { Board } = require('../Board')

test('Props are numbers', () => {
    let test = new Board(4, 4)
    expect((isNaN(test.row))).toBe(false)
    expect((isNaN(test.column))).toBe(false)
})

test('Size of the Board matches the props', () => {
    let test = new Board(4, 8)
    expect(test.table.length).toBe(test.column)
    expect((test.table[0].length)).toBe(test.row)
})