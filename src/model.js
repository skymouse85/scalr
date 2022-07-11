window.Scalr = {};

// ♮♯♭

(function () {
    /**
     * these scale centers are based on the tonalities found in J.S. Bach's Well Tempered Clavier as well as the modern circle of fiths (https://en.wikipedia.org/wiki/Circle_of_fifths) Major scales are organized chromatically starting with C, and minors are organized chormatically starting with A (as Bach did in WTC), including relevant enharmonic equvalents.
     */

    //* all chromatic majors and minors are accounted for as is 'correct'

    //! offset to offset, natural = 0, sharp = 1, flat = -1
    //! drop the top octave note
    //! note hashmap, add in view if desired
    //! step to step

    const LETTERS = {
        0: 'C',
        1: 'D',
        2: 'E',
        3: 'F',
        4: 'G',
        5: 'A',
        6: 'B'
    }

    const ACCIDENTS = {
        '-1': 'flat',
        '0': 'natural',
        '1': 'sharp'
    }
    const CLEFS = {
        Treble: [
            { sign: 'G', line: 2 }
        ],
        Bass: [
            { sign: 'F', line: 4 }
        ]
    }
    const PITCHES = {

    }

    //prototype
    // const NoteProto = {
    //     getLetter: function getLetter() {
    //         return LETTERS[this.step]
    //     },
    //     copy: function () {
    //         //...
    //     }
    // }

    // what goes on underneath when a class is created
    // function Note(step, offset, octave) {
    //     this.step = step
    //     this.offset = offset
    //     this.octave = octave
    // }
    // Note.prototype.getLetter = function () {
    //     return LETTERS[this.step]
    // }
    // Note.prototype.copy = function () {
    //     //...
    // }
    //TODO move to Note class (getter for accidental)
    class Note {
        //does not require to write the keyword 'function'
        constructor(step, offset, octave) {
            this.step = step
            this.offset = offset
            this.octave = octave
        }
        // getter for letter (note.letter)
        get letter() {
            return LETTERS[this.step]
        }
        get accidental() {
            return ACCIDENTS[this.offset]
        }
        copy() {
            // this will return an INSTANCE of the class, in this case 'Note'
            return new Note(this.step, this.offset, this.octave)
        }
    }

    class Scale {
        constructor(root, tonality) {
            this.root = root
            this.tonality = tonality
        }
    }
    // it's a convention that prototypes start with a capital letter ex: var AnimalProto = {speak: function() {return 'ruff'}}

    // call is a method that can control what object  the 'this' keyword will refer to - the first arg is what the 'this' will refer to

    var major = {
        'Cnatural': [
            { step: 0, offset: 0, octave: 4 },
            { step: 1, offset: 0, octave: 4 },
            { step: 2, offset: 0, octave: 4 },
            { step: 3, offset: 0, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: 0, octave: 4 },
            { step: 6, offset: 0, octave: 4 },
        ],
        'Csharp': [
            { step: 0, offset: 1, octave: 4 },
            { step: 1, offset: 1, octave: 4 },
            { step: 2, offset: 1, octave: 4 },
            { step: 3, offset: 1, octave: 4 },
            { step: 4, offset: 1, octave: 4 },
            { step: 5, offset: 1, octave: 4 },
            { step: 6, offset: 1, octave: 5 },
        ],
        'Dflat': [
            { step: 1, offset: -1, octave: 4 },
            { step: 2, offset: -1, octave: 4 },
            { step: 3, offset: 0, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: -1, octave: 4 },
            { step: 6, offset: -1, octave: 4 },
            { step: 0, offset: 0, octave: 5 },
        ],
        'Dnatural': [
            { step: 1, offset: 0, octave: 4 },
            { step: 2, offset: 0, octave: 4 },
            { step: 3, offset: 1, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: 0, octave: 4 },
            { step: 6, offset: 0, octave: 4 },
            { step: 0, offset: 1, octave: 5 },
        ],
        'Eflat': [
            { step: 2, offset: -1, octave: 4 },
            { step: 3, offset: 0, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: -1, octave: 4 },
            { step: 6, offset: -1, octave: 4 },
            { step: 0, offset: 0, octave: 5 },
            { step: 1, offset: 0, octave: 5 },
        ],
        'Enatural': [
            { step: 2, offset: 0, octave: 4 },
            { step: 3, offset: 1, octave: 4 },
            { step: 4, offset: 1, octave: 4 },
            { step: 5, offset: 0, octave: 4 },
            { step: 6, offset: 0, octave: 4 },
            { step: 0, offset: 1, octave: 5 },
            { step: 1, offset: 1, octave: 5 },
        ],
        'Fnatural': [
            { step: 3, offset: 0, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: 0, octave: 4 },
            { step: 6, offset: -1, octave: 4 },
            { step: 0, offset: 0, octave: 5 },
            { step: 1, offset: 0, octave: 5 },
            { step: 2, offset: 0, octave: 5 },
        ],
        'Fsharp': [
            { step: 3, offset: 1, octave: 4 },
            { step: 4, offset: 1, octave: 4 },
            { step: 5, offset: 1, octave: 4 },
            { step: 6, offset: 0, octave: 4 },
            { step: 0, offset: 1, octave: 5 },
            { step: 1, offset: 1, octave: 5 },
            { step: 2, offset: 1, octave: 5 },
        ],
        'Gflat': [
            { step: 4, offset: -1, octave: 4 },
            { step: 5, offset: -1, octave: 4 },
            { step: 6, offset: -1, octave: 4 },
            { step: 0, offset: -1, octave: 5 },
            { step: 1, offset: -1, octave: 5 },
            { step: 2, offset: -1, octave: 5 },
            { step: 3, offset: 0, octave: 5 },
        ],
        'Gnatural': [
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: 0, octave: 4 },
            { step: 6, offset: 0, octave: 4 },
            { step: 0, offset: 0, octave: 5 },
            { step: 1, offset: 0, octave: 5 },
            { step: 2, offset: 0, octave: 5 },
            { step: 3, offset: 1, octave: 5 },
        ],
        'Aflat': [
            { step: 5, offset: -1, octave: 3 },
            { step: 6, offset: -1, octave: 3 },
            { step: 0, offset: 0, octave: 4 },
            { step: 1, offset: -1, octave: 4 },
            { step: 2, offset: -1, octave: 4 },
            { step: 3, offset: 0, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
        ],

        'Anatural': [
            { step: 5, offset: 0, octave: 3 },
            { step: 6, offset: 0, octave: 3 },
            { step: 0, offset: 1, octave: 4 },
            { step: 1, offset: 0, octave: 4 },
            { step: 2, offset: 0, octave: 4 },
            { step: 3, offset: 1, octave: 4 },
            { step: 4, offset: 1, octave: 4 },
        ],
        'Bflat': [
            { step: 6, offset: -1, octave: 3 },
            { step: 0, offset: 0, octave: 4 },
            { step: 1, offset: 0, octave: 4 },
            { step: 2, offset: -1, octave: 4 },
            { step: 3, offset: 0, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: 0, octave: 4 },
        ],
        'Bnatural': [
            { step: 6, offset: 0, octave: 3 },
            { step: 0, offset: 1, octave: 4 },
            { step: 1, offset: 1, octave: 4 },
            { step: 2, offset: 0, octave: 4 },
            { step: 3, offset: 1, octave: 4 },
            { step: 4, offset: 1, octave: 4 },
            { step: 5, offset: 1, octave: 4 },
        ],
        'Cflat': [
            { step: 0, offset: -1, octave: 4 },
            { step: 1, offset: -1, octave: 4 },
            { step: 2, offset: -1, octave: 4 },
            { step: 3, offset: -1, octave: 4 },
            { step: 4, offset: -1, octave: 4 },
            { step: 5, offset: -1, octave: 4 },
            { step: 6, offset: -1, octave: 4 },
        ]
    }

    var minor = {

        'Anatural': [
            { step: 5, offset: 0, octave: 3 },
            { step: 6, offset: 0, octave: 3 },
            { step: 0, offset: 0, octave: 4 },
            { step: 1, offset: 0, octave: 4 },
            { step: 2, offset: 0, octave: 4 },
            { step: 3, offset: 0, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
        ],
        'Bflat': [
            { step: 6, offset: -1, octave: 3 },
            { step: 0, offset: 0, octave: 4 },
            { step: 1, offset: -1, octave: 4 },
            { step: 2, offset: -1, octave: 4 },
            { step: 3, offset: 0, octave: 4 },
            { step: 4, offset: -1, octave: 4 },
            { step: 5, offset: -1, octave: 4 },
        ],
        'Bnatural': [
            { step: 6, offset: 0, octave: 3 },
            { step: 0, offset: 1, octave: 4 },
            { step: 1, offset: 0, octave: 4 },
            { step: 2, offset: 0, octave: 4 },
            { step: 3, offset: 1, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: 0, octave: 4 },
        ],
        'Cnatural': [
            { step: 0, offset: 0, octave: 4 },
            { step: 1, offset: 0, octave: 4 },
            { step: 2, offset: -1, octave: 4 },
            { step: 3, offset: 0, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: -1, octave: 4 },
            { step: 6, offset: -1, octave: 4 },
        ],
        'Csharp': [
            { step: 0, offset: 1, octave: 4 },
            { step: 1, offset: 1, octave: 4 },
            { step: 2, offset: 0, octave: 4 },
            { step: 3, offset: 1, octave: 4 },
            { step: 4, offset: 1, octave: 4 },
            { step: 5, offset: 0, octave: 4 },
            { step: 6, offset: 0, octave: 4 },
        ],
        'Dnatural': [
            { step: 1, offset: 0, octave: 4 },
            { step: 2, offset: 0, octave: 4 },
            { step: 3, offset: 0, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: 0, octave: 4 },
            { step: 6, offset: -1, octave: 4 },
            { step: 0, offset: 0, octave: 5 },
        ],
        'Dsharp': [
            { step: 1, offset: 1, octave: 4 },
            { step: 2, offset: 1, octave: 4 },
            { step: 3, offset: 1, octave: 4 },
            { step: 4, offset: 1, octave: 4 },
            { step: 5, offset: 1, octave: 4 },
            { step: 6, offset: 0, octave: 4 },
            { step: 0, offset: 1, octave: 5 },
        ],
        'Eflat': [
            { step: 2, offset: -1, octave: 4 },
            { step: 3, offset: 0, octave: 4 },
            { step: 4, offset: -1, octave: 4 },
            { step: 5, offset: -1, octave: 4 },
            { step: 6, offset: -1, octave: 4 },
            { step: 0, offset: -1, octave: 5 },
            { step: 1, offset: -1, octave: 5 },
        ],
        'Enatural': [
            { step: 2, offset: 0, octave: 4 },
            { step: 3, offset: 1, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: 0, octave: 4 },
            { step: 6, offset: 0, octave: 4 },
            { step: 0, offset: 0, octave: 5 },
            { step: 1, offset: 0, octave: 5 },
        ],
        'Fnatural': [
            { step: 3, offset: 0, octave: 4 },
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: -1, octave: 4 },
            { step: 6, offset: -1, octave: 4 },
            { step: 0, offset: 0, octave: 5 },
            { step: 1, offset: -1, octave: 5 },
            { step: 2, offset: -1, octave: 5 },
        ],
        'Fsharp': [
            { step: 3, offset: 1, octave: 4 },
            { step: 4, offset: 1, octave: 4 },
            { step: 5, offset: 0, octave: 4 },
            { step: 6, offset: 0, octave: 4 },
            { step: 0, offset: 1, octave: 5 },
            { step: 1, offset: 0, octave: 5 },
            { step: 2, offset: 0, octave: 5 },
        ],
        'Gnatural': [
            { step: 4, offset: 0, octave: 4 },
            { step: 5, offset: 0, octave: 4 },
            { step: 6, offset: -1, octave: 4 },
            { step: 0, offset: 0, octave: 5 },
            { step: 1, offset: 0, octave: 5 },
            { step: 2, offset: -1, octave: 5 },
            { step: 3, offset: 0, octave: 5 },
        ],
        'Gsharp': [
            { step: 4, offset: 1, octave: 4 },
            { step: 5, offset: 1, octave: 4 },
            { step: 6, offset: 0, octave: 4 },
            { step: 0, offset: 1, octave: 5 },
            { step: 1, offset: 1, octave: 5 },
            { step: 2, offset: 0, octave: 5 },
            { step: 3, offset: 1, octave: 5 },
        ],
    }
    var diminished = {
    }

    function copyScale(scaleArr) {
        var scaleCopy = [];
        for (var i = 0; i < scaleArr.length; i++) {
            var note = scaleArr[i]
            //ensure instance of note
            note = new Note(note.step, note.offset, note.octave)
            scaleCopy.push(note);
        }
        return scaleCopy;
    }

    //harmonic minor handler
    /**
     * 
     * @param {array} scale A natural minor scale.
     * @return {array} a copy of the natural minor with a raised 7th scale degree.
     */
    function harmonic(scale) {
        scale = copyScale(scale)
        if (scale[6].offset === -1) {
            scale[6].offset = 0
        } else if (scale[6].offset === 0) {
            scale[6].offset = 1
        };
        return scale;
    }

    //*descender
    // takes in a scale and returns a shallow copy of a scale plus all notes in reverse starting at the leading tone

    function descender(scale) {
        scale = copyScale(scale);
        var descend = []
        for (let j = scale.length - 2; j > -1; j--) {
            descend.push(scale[j]);
        }
        return descend;
    }
    // console.log(descender(minor['Bflat']));

    //*melodic minor handler
    /**
     * 
     * @param {array} naturalMinorScale 
     * @returns {array} copy of the scale that has the raised 6th and 7th degree ascending, and descends as a natural minor
     */

    function melodic(scale) {
        //copy scale as ascend
        var ascend = copyScale(scale);
        // raise 6th and 7th scale degrees
        if (ascend[5].offset === -1) {
            ascend[5].offset = 0
        } else if (ascend[5].offset === 0) {
            ascend[5].offset = 1
        };
        if (ascend[6].offset === -1) {
            ascend[6].offset = 0
        } else if (ascend[6].offset === 0) {
            ascend[6].offset = 1
        };
        // make a descend var that runs scale through descender
        var descend = descender(scale);
        //concat and return ascend and descend
        return ascend.concat(descend);
    }

    // opts hashmap

    Scalr.getScale = function (noteVal, noteoffset, quality) {
        var noteName = noteVal + noteoffset;
        if (quality === 'major') {
            return copyScale(major[noteName]);
        } if (quality === 'natural minor') {
            return copyScale(minor[noteName]);
        } if (quality === 'harmonic minor') {
            return harmonic(minor[noteName]);
        } if (quality === 'melodic minor') {
            return melodic(minor[noteName]);
        }
        // use if statement to popint to object from quality input
    }

    //TODO anything that takes a note, move to note class

    //XML specific functions

    /**
     * 
     * @param {user defined} clef 
     * @param {} note 
     * @returns  proper note range for ascending scale
     */

    Scalr.getOctaveForClef = function (clef, note) {
        if (clef === 'Treble') {
            return note.octave
        }
        else if (clef === 'Bass') {
            return note.octave - 1
        }
    }

    /**
     * 
     * @param {*} clef 
     * @returns XML code for clef sign
     */
    Scalr.clefSign = function (clef) {
        if (clef === 'Treble') {
            return CLEFS.Treble[0].sign;
        }
        else if (clef === 'Bass') {
            return CLEFS.Bass[0].sign;
        }
    }
    /**
     * 
     * @param {*} clef 
     * @returns XML code for clef line
     */
    Scalr.clefLine = function (clef) {
        if (clef === 'Treble') {
            return CLEFS.Treble[0].line;
        }
        else if (clef === 'Bass') {
            return CLEFS.Bass[0].line;
        }
    }



    //todo work on scale name output as part of scale object and Scaler.getScale based on tonality input
    //todo write test to check each note name and get all scales and prints any that are missing
    //* from Bach WTC key centers - 
    //* CM/m, C#M/m(four sharps), DM/m, EbM/D#m(6 sharps), EM/m, FM/m, F#M/m, GM/m, AbM/G#m(5 sharps), AM/m, BbM/m(5 flats), BM/m
    //* i'll still include Eb minor, GbMajor, Cb Major, Db major
    function scaleCheck(majorScaleObj, minorScaleObj) {
        var scaleRef = {
            major: 5,
            major: 6,
            major: 0,
        }
    }
})()



