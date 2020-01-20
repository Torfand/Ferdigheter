class GameView {
    constructor(game) {
        this._game = game;
        this._gameBoard = document.getElementById('game');
        let cells = game.getCell();
        this._cellViews = cells.map(cell => new CellView(cell));

    }
    show() {
        let boardHTML = this._cellViews.reduce(
        (html, cellView) => html + cellView.getHTML(), '');
        let winnerHTML = '';
        if (this._game.isStopped()) {
            winnerHTML = `<h3 id="info">${this._game.getWinner()} Vant </h3>
        <a id="link" href="javascript:gameController.restart();> Klikk her for og starte spillet på nytt
        </a><br/>`
        }
        this._gameBoard.innerHTML = winnerHTML + boardHTML;
    }

}