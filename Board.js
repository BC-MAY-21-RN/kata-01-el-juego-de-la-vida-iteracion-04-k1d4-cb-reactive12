const { Cell } = require('./Cell.js')

//import Cell from "./Cell.js";

class Board {
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
        let cellsToKill = []
        let cellsToRevive = []

        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.column; j++) {
                let currentCell = new Cell(i, j)
                if (this.table[i][j] == 1) {
                    let count = currentCell.getNeighbour(this.table, this.row, this.column)
                    if (count < 2 || count > 3)
                        cellsToKill.push([i, j])
                }
                else {
                    if (currentCell.getNeighbour(this.table, this.row, this.column) == 3) {
                        cellsToRevive.push([i, j])
                    }
                }
            }
        }
        return { cellsToKill, cellsToRevive }
    }

    calcNextGen() {
        let life = this.scanBoard()

        life.cellsToKill.forEach(cell => {
            const [x, y] = cell
            this.table[x][y] = 0
        })

        life.cellsToRevive.forEach(cell => {
            const [x, y] = cell
            this.table[x][y] = 1
        })
    }
}

module.exports = { Board }