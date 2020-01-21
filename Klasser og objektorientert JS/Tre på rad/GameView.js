class GameView {
    constructor(game) {
        this._game = game;
        this._divBoard = document.getElementById('game');
        let cells = game.getCells();

        this._cellViews = cells.map(cell => new CellView(cell));

    }

    show() {
 
        let boardHtml = this._cellViews.reduce(
            (html, cellView) => html + cellView.getHtml(), '');
        let winnerHtml = '';
        if (this._game.isStopped()) {
            winnerHtml = '<h3 id="info">' +
                this._game.getWinner() +
                ' vant!</h3>' +
                '<a id="link" href= "javascript:gameController.restart();">Klikk her for å starte på nytt!</a><br/>';
        }

        this._divBoard.innerHTML = winnerHtml + boardHtml;
    }
}