let GrassEater = require('./grassEater');


module.exports = class Predator extends GrassEater {
    constructor(x, y) {
        super(x, y)
        this.energy = 35;
    }

    mul() {
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 3
            let gr = new Predator(newX, newY)
            PredatorArr.push(gr)
            this.energy = 8
        }
    }

    //predator(red) eats yellow
    eat() {
        let emptyCells = this.chooseCell(2)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell) {
            this.energy++
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move()
        }
    }

    //predator eats black
    eatVict() {
        let emptyCells = this.chooseCell(4)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell) {
            this.energy++
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in VictimArr) {
                if (newX == VictimArr[i].x && newY == VictimArr[i].y) {
                    VictimArr.splice(i, 1);
                    for (let i = 0; i <= matrix.length; i++) {
                        let newX1 = newCell[0]
                        let newY1 = newCell[1]
                        matrix[newX1][newY1] = 5
                        let bomb = new Bomb(newX1, newY1)
                        BombArr.push(bomb)
                    }
                    break;
                }
                else {
                    this.move()
                }
            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (var i in PredatorArr) {
            if (this.x == PredatorArr[i].x && this.y == PredatorArr[i].y) {
                PredatorArr.splice(i, 1);
                break;
            }
        }
    }

}