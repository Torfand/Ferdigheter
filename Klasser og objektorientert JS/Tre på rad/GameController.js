class GameController {
    constructor(game) {
        this._game = game;
    }

    restart() {
        location.reload();
    }

    setX(index) {
        this._game.setX(index);
        updateView();
    }
}