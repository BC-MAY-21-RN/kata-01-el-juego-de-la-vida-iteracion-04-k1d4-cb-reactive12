//const { Cell } = require('./Cell.js')

import Cell from "./Cell.js";

export default class Board {
    constructor(x, y) {
        this.row = x
        this.column = y
        this.table = this.initializeBoard()
    }

    initializeBoard() {
        let array1 = [];
        let array2 = [];
        for (let i = 0; i < this.column; i++) {
            for (let j = 0; j < this.row; j++) {
                let x = Math.floor(Math.random() * 2);
                array2.push(x);
            }
            array1.push(array2);
            array2 = [];
        }
        return array1
    }

    scanBoard() {

        const cellsBoosted = this.table.flatMap((renglon, i) => {
            return renglon.map((zelda, j) => {
                const currentCell = new Cell(i, j)
                if (zelda == 1) {
                    let count = currentCell.getNeighbour(this.table, this.row, this.column)
                    if (![2, 3].includes(count)) return [i, j, 0]
                }
                else if (currentCell.getNeighbour(this.table, this.row, this.column) == 3) {
                    return [i, j, 1]
                }
            })
        })

        return cellsBoosted
    }

    calcNextGen() {
        let life = this.scanBoard()

        life.forEach(cell => {
            if (!cell) return;
            const [x, y, state] = cell
            this.table[x][y] = state
        })
    }
}

//module.exports = { Board }