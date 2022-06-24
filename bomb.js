let GrassEater = require('./grassEater');

module.exports = class Bomb extends GrassEater {
    constructor(x, y) {
        super(x, y)
        this.multiply = 3;
    }

    mul() {
        this.multiply++
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell && this.multiply >= 10) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 5
            let bomb = new Bomb(newX, newY)
            BombArr.push(bomb)
        }
    }

    eat() {
        let emptyCells = this.chooseCell(1)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell) {
            this.energy++
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);

                }
            }
            for (var j in GrassEaterArr) {
                if (newX == GrassEaterArr[i].x && newY == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 13) {
                this.mul()
            }

        } else {
            this.move()
        }
    }

}