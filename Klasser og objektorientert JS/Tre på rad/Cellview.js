class CellView {
    constructor(cell) {
        this._cell = cell
    }
    getHTML() {
        let index = this._cell.index();
        let cssClasses = this._cell.isFirstInRow() ? 'first' : '' ;
        let content = this._cell.content();
        cssClasses += ' color' + content;
        return `<div onclick="gameController.setX(${index}) 
        class="${cssClasses} cell">${content}</div>`;
    }
}