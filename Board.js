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

    scanBoard(boardTbl, row, column) {
        // let cellsModified = []

        // for (let i = 0; i < row; i++) {
        //     for (let j = 0; j < column; j++) {
        //         let currentCell = new Cell(i, j)
        //         if (boardTbl[i][j] == 1) {
        //             let count = currentCell.getNeighbour(boardTbl, row, column)
        //             if (count < 2 || count > 3)
        //                 cellsModified.push([i, j, 0])
        //         }
        //         else {
        //             if (currentCell.getNeighbour(boardTbl, row, column) == 3) {
        //                 cellsModified.push([i, j, 1])
        //             }
        //         }
        //     }
        // }

        const cellsBoosted = this.table.flatMap((renglon, i) => {
            return renglon.map((zelda, j) => {
                const currentCell = new Cell(i, j)
                if (zelda == 1) {
                    let count = currentCell.getNeighbour(this.table, this.row, this.column)
                    if (count < 2 || count > 3) return [i, j, 0]
                }
                else {
                    if (currentCell.getNeighbour(this.table, this.row, this.column) == 3) {
                        return [i, j, 1]
                    }
                }
            })
        }).filter(x => x)

        //console.log(cellsModified)
        console.log(cellsBoosted)
        return cellsBoosted
    }

    calcNextGen() {
        let life = this.scanBoard(this.table, this.row, this.column)

        life.cellsModified.forEach(cell => {
            const [x, y, state] = cell
            this.table[x][y] = state
        })
    }
}

//module.exports = { Board }