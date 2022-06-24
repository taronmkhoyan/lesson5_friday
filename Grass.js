let LivingCreature = require('./living_creature')

module.exports = class Grass extends LivingCreature {

    mul() {
        this.multiply++
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell && this.multiply >= 10) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 1
            let gr = new Grass(newX, newY)
            grassArr.push(gr)
            this.multiply = 0
        }
    }
    
}
