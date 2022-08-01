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



var renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.
    CANVAS);

var ctx = renderer.getContext();
var stave = new Vex.Flow.Stave(10, 0, 750);
stave.addClef("treble").setContext(ctx).draw();

// Create the notes
var notes = [

    new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),
    new Vex.Flow.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),

    // start new measure
    new Vex.Flow.BarNote(),

    new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),
    new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),
    new Vex.Flow.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),

];

// Create a voice in 4/4
var voice = new Vex.Flow.Voice({
    num_beats: 4,
    beat_value: 4,
    resolution: Vex.Flow.RESOLUTION
});

// turn off tick counter
voice.setStrict(false)

// Add notes to voice
voice.addTickables(notes);

// Format and justify the notes to 700 pixels
var formatter = new Vex.Flow.Formatter().
    joinVoices([voice]).format([voice], 700);

// Render voice
voice.draw(ctx, stave);


// handle octave diesplacement, start with default of treble clef 
    // middle c = C4
    // stem direction -
    //Bass clef
    // UP C1 - C3
    //DOWN D3 - B3
    //Treble clef
    // UP C4 - A4
    // DOWN B4 - B7  