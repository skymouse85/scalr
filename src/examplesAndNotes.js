// it's a convention that prototypes start with a capital letter ex: var AnimalProto = {speak: function() {return 'ruff'}}
// call is a method that can control what object  the 'this' keyword will refer to - the first arg is what the 'this' will refer to

prototype
const NoteProto = {
    getLetter: function getLetter() {
        return LETTERS[this.step]
    },
    copy: function () {
        //...
    }
}

// what goes on underneath when a class is created


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