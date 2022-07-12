prototype
const NoteProto = {
    getLetter: function getLetter() {
        return LETTERS[this.step]
    },
    copy: function () {
        //...
    }
}

    what goes on underneath when a class is created
function Note(step, offset, octave) {
    this.step = step
    this.offset = offset
    this.octave = octave
}
Note.prototype.getLetter = function () {
    return LETTERS[this.step]
}
Note.prototype.copy = function () {
    //...
}