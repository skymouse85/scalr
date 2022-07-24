
// ♮♯♭

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


/**
 * Represents a note
 */
class Note {

    /**
    * @param {Number} step
    * @param {Number} offset
    * @param {Number} octave
    */
    constructor(step, offset, octave) {
        this.step = step
        this.offset = offset
        this.octave = octave
    }

    /** @type {String} */
    get letter() {
        return LETTERS[this.step]
    }

    /** @type {String} */
    get accidental() {
        return ACCIDENTS[this.offset]
    }

    /**
     * @returns {Note} New Note instance
     */
    copy() {
        // this will return an INSTANCE of the class, in this case 'Note'
        return new Note(this.step, this.offset, this.octave)
    }
}

/**
 * represents a scale
 */
class Scale {

    /**
     * 
     * @param {Note[]} notes 
     * @param {string} tonality 
     */
    constructor(notes, tonality) {
        this.notes = notes
        this.tonality = tonality
    }

    /**
     * @type {Note}
     */
    get root() {
        return this.notes[0]
    }

    /**
     * 
     * @returns {Scale}
     */
    copy() {
        return new Scale(this.notes, this.tonality)
    }
}

/**
 * 
 * @param {object[]} array of note properties objects or note objects
 * @returns {Note[]} array of Note objects
 */
function copyNotes(scaleArr) {
    var scaleCopy = [];
    for (var i = 0; i < scaleArr.length; i++) {
        var note = scaleArr[i]
        //ensure instance of note
        note = new Note(note.step, note.offset, note.octave)
        scaleCopy.push(note);
    }
    return scaleCopy;
}

/**
 * harmonic minor handler
 * @param {array} scale A natural minor scale.
 * @return {array} a copy of the natural minor with a raised 7th scale degree.
 */
function harmonic(scale) {
    scale = copyNotes(scale)
    if (scale[6].offset === -1) {
        scale[6].offset = 0
    } else if (scale[6].offset === 0) {
        scale[6].offset = 1
    };
    return scale;
}

/**
 * 
 * @param {array} scale 
 * @returns shallow copy of scale array with all notes reversed starting at the leading tone
 */
function descender(scale) {
    scale = copyNotes(scale);
    var descend = []
    for (let j = scale.length - 2; j > -1; j--) {
        descend.push(scale[j]);
    }
    return descend;
}

/** 
 * melodic minor handler
 * 
 * @param {array} naturalMinorScale 
 * @returns {array} copy of the scale that has the raised 6th and 7th degree ascending, and descends as a natural minor
 */

function melodic(scale) {
    //copy scale as ascend
    var ascend = copyNotes(scale);
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

/**
 * @param {string} noteVal 
 * @param {string} noteoffset 
 * @param {string} quality 
 * @returns {Scale} new Scale instance
 */
export function getScale(noteVal, noteoffset, quality) {

    var noteName = noteVal + noteoffset;
    var notes

    switch (quality) {
        case 'major':
            notes = copyNotes(MAJOR[noteName])
            break;
        case 'natural minor':
            notes = copyNotes(MINOR[noteName])
            break;
        case 'harmonic minor':
            notes = harmonic(MINOR[noteName])
            break;
        case 'melodic minor':
            notes = melodic(MINOR[noteName])
            break;
        default:
            throw new Error('not a valid scale type!')

    }

    return new Scale(notes, quality)

}

//TODO anything that takes a note, move to note class

//*XML specific functions
/**
 * 
 * @param {string} clef 
 * @param {string} note 
 * @returns {Number} proper note range for ascending scale
 */

export function getOctaveForClef(clef, note) {
    note = new Note(note.step, note.offset, note.octave)
    if (clef === 'Treble') {
        return note.octave
    }
    else if (clef === 'Bass') {
        return note.octave - 1
    }
}

/**
 * @param {string} clef 
 * @returns {string} indicates which clef sign to use in musicXML
 */
export function clefSign(clef) {
    if (clef === 'Treble') {
        return CLEFS.Treble[0].sign;
    }
    else if (clef === 'Bass') {
        return CLEFS.Bass[0].sign;
    }
}

/**
 * @param {string} clef 
 * @returns {Number} indicates which clef line to use in musicXML
 */
export function clefLine(clef) {
    if (clef === 'Treble') {
        return CLEFS.Treble[0].line;
    }
    else if (clef === 'Bass') {
        return CLEFS.Bass[0].line;
    }
}


const MAJOR = {
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

const MINOR = {

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

