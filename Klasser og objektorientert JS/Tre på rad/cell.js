class cell {
constructor(index) {
    this._content = null;
    this._index = index;
}
setX() {
    this._content = 'X';
}
setO() {
    this._content = 'O';
}
isBlank() {
    return this._content === null;
}
isX() {
    return this._content === 'X';
}
isFirstInRow() {
    return this._index % 3 === 0;

}
index(){
    return this._index;
}
content() {
    if (this.isBlank()) return '';
    return this._content
}

}