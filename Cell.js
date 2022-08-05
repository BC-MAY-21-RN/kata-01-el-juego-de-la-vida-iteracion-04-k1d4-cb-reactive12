class Cell {
    //posición de la celula
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    //Hacer un recorrido para veriicar a los vecinos
    getNeighbour(board, width, heigth) {
        let neighbours = 0
        for (let i = this.x - 1; i <= this.x + 1; i++) {
            for (let j = this.y - 1; j <= this.y + 1; j++) {
                if (i < 0) i = 0
                if (j < 0) j = 0
                if (i > width - 1) break
                if (j > heigth - 1) break

                if (board[i][j] == 1) {
                    if (i != this.x || j != this.y)
                        neighbours++
                }
            }
        }
        return neighbours
    }
}

module.exports = { Cell }