class Game {
    constructor() {
        this._isStopped = false;
        this._cells = [];
        for (let i = 0; i < 9; i++) {
            this._cells.push(new cell(i));

        }
    }
    getCells() {
        return this._cells;

    }
    setX(index) {
        if (this._isStopped) return;
        let cell = this._cells[index];
        if (!cell.isBlank()) return;
        cell.setX();
        this.checkWinning();
        if (this._isStopped) return;
        let blankCell = this._getRandomBlankCell();
        if (blankCell == null) return;
        blankCell.setO();
        this.checkWinning();
    }
    getRandomBlankCell() {
        let blankCells;
        blankCells = this._cells.filter(cell => cell.isBlank());
        if (blankCells.length == 0) return null;
        let index = Math.floor(Math.random() * blankCells.length);
        return blankCells[index];
    }
    checkWinning() {
        return this.checkCombinationForWinning(0, 1, 2)
            || this.checkCombinationForWinning(3, 4, 5)
            || this.checkCombinationForWinning(6, 7, 8)
            || this.checkCombinationForWinning(0, 3, 6)
            || this.checkCombinationForWinning(1, 4, 7)
            || this.checkCombinationForWinning(2, 5, 8)
            || this.checkCombinationForWinning(0, 4, 8)
            || this.checkCombinationForWinning(2, 4, 6)
    }

    checkCombinationForWinning(index1, index2, index3) {
        let cell1 = this._cells[index1];
        let cell2 = this._cells[index2];
        let cell3 = this._cells[index3];
        if(!cell1.isBlank() 
        && cell2.content() === cell1.content()
        && cell3.content() === cell1.content()) {
            this._winner = cell1.isX() ? 'Du': 'Datamaskinen';
            this._isStopped = true;
        }
        
        
    }
    isStopped() {
        return this._isStopped;

    }
    getWinner() {
        return this._winner;
    }
}