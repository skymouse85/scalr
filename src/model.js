
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

const TONALITY = {
    MAJOR: 1,
    NATURAL_MINOR: 2,
    HARMONIC_MINOR: 3,
    MELODIC_MINOR: 4,
}

const DIRECTION = {
    ASCEND: 1,
    DESCEND: 2,
    // ASCEND_DESCEND: 3
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
    return ascend;
    // make a descend var that runs scale through descender
    // var descend = descender(scale);
    //concat and return ascend and descend
    // return ascend.concat(descend);
}

/**
 * @param {Number} step 
 * @param {Number} offset 
 * @param {Number} tonality 
 * @param {Object} opts
 * @param {Number} opts.direction
 * @param {Number} opts.octave
 * @returns {Scale} new Scale instance
 */
export function getScale(step, offset, tonality, opts) {
    tonality = Number(tonality);
    opts = opts || {};
    const direction = Number(opts.direction || DIRECTION.ASCEND);
    const octave = Number(opts.octave || 4);
    const key = LETTERS[step] + ACCIDENTS[offset];
    /** @type {Note[]} */
    var notes
    if (tonality === TONALITY.MELODIC_MINOR && direction === DIRECTION.DESCEND) {
        tonality = TONALITY.NATURAL_MINOR
    }
    switch (tonality) {
        case TONALITY.MAJOR:
            notes = copyNotes(MAJOR[key])
            break;
        case TONALITY.NATURAL_MINOR:
            notes = copyNotes(MINOR[key])
            break;
        case TONALITY.HARMONIC_MINOR:
            notes = harmonic(MINOR[key])
            break;
        case TONALITY.MELODIC_MINOR:
            notes = melodic(MINOR[key])
            break;
        default:
            throw new Error('not a valid scale type!')

    }
    var tonic = notes[0];
    notes.push(new Note(tonic.step, tonic.offset, tonic.octave + 1));
    notes.forEach(note => note.octave += octave);
    if (direction === DIRECTION.DESCEND) {
        notes.reverse();
    }

    return new Scale(notes, tonality);

}









const MAJOR = {
    'Cnatural': [
        { step: 0, offset: 0, octave: 0 },
        { step: 1, offset: 0, octave: 0 },
        { step: 2, offset: 0, octave: 0 },
        { step: 3, offset: 0, octave: 0 },
        { step: 4, offset: 0, octave: 0 },
        { step: 5, offset: 0, octave: 0 },
        { step: 6, offset: 0, octave: 0 },
    ],
    'Csharp': [
        { step: 0, offset: 1, octave: 0 },
        { step: 1, offset: 1, octave: 0 },
        { step: 2, offset: 1, octave: 0 },
        { step: 3, offset: 1, octave: 0 },
        { step: 4, offset: 1, octave: 0 },
        { step: 5, offset: 1, octave: 0 },
        { step: 6, offset: 1, octave: 1 },
    ],
    'Dflat': [
        { step: 1, offset: -1, octave: 0 },
        { step: 2, offset: -1, octave: 0 },
        { step: 3, offset: 0, octave: 0 },
        { step: 4, offset: 0, octave: 0 },
        { step: 5, offset: -1, octave: 0 },
        { step: 6, offset: -1, octave: 0 },
        { step: 0, offset: 0, octave: 1 },
    ],
    'Dnatural': [
        { step: 1, offset: 0, octave: 0 },
        { step: 2, offset: 0, octave: 0 },
        { step: 3, offset: 1, octave: 0 },
        { step: 4, offset: 0, octave: 0 },
        { step: 5, offset: 0, octave: 0 },
        { step: 6, offset: 0, octave: 0 },
        { step: 0, offset: 1, octave: 1 },
    ],
    'Eflat': [
        { step: 2, offset: -1, octave: 0 },
        { step: 3, offset: 0, octave: 0 },
        { step: 4, offset: 0, octave: 0 },
        { step: 5, offset: -1, octave: 0 },
        { step: 6, offset: -1, octave: 0 },
        { step: 0, offset: 0, octave: 1 },
        { step: 1, offset: 0, octave: 1 },
    ],
    'Enatural': [
        { step: 2, offset: 0, octave: 0 },
        { step: 3, offset: 1, octave: 0 },
        { step: 4, offset: 1, octave: 0 },
        { step: 5, offset: 0, octave: 0 },
        { step: 6, offset: 0, octave: 0 },
        { step: 0, offset: 1, octave: 1 },
        { step: 1, offset: 1, octave: 1 },
    ],
    'Fnatural': [
        { step: 3, offset: 0, octave: 0 },
        { step: 4, offset: 0, octave: 0 },
        { step: 5, offset: 0, octave: 0 },
        { step: 6, offset: -1, octave: 0 },
        { step: 0, offset: 0, octave: 1 },
        { step: 1, offset: 0, octave: 1 },
        { step: 2, offset: 0, octave: 1 },
    ],
    'Fsharp': [
        { step: 3, offset: 1, octave: 0 },
        { step: 4, offset: 1, octave: 0 },
        { step: 5, offset: 1, octave: 0 },
        { step: 6, offset: 0, octave: 0 },
        { step: 0, offset: 1, octave: 1 },
        { step: 1, offset: 1, octave: 1 },
        { step: 2, offset: 1, octave: 1 },
    ],
    'Gflat': [
        { step: 4, offset: -1, octave: 0 },
        { step: 5, offset: -1, octave: 0 },
        { step: 6, offset: -1, octave: 0 },
        { step: 0, offset: -1, octave: 1 },
        { step: 1, offset: -1, octave: 1 },
        { step: 2, offset: -1, octave: 1 },
        { step: 3, offset: 0, octave: 1 },
    ],
    'Gnatural': [
        { step: 4, offset: 0, octave: 0 },
        { step: 5, offset: 0, octave: 0 },
        { step: 6, offset: 0, octave: 0 },
        { step: 0, offset: 0, octave: 1 },
        { step: 1, offset: 0, octave: 1 },
        { step: 2, offset: 0, octave: 1 },
        { step: 3, offset: 1, octave: 1 },
    ],
    'Aflat': [
        { step: 5, offset: -1, octave: 0 },
        { step: 6, offset: -1, octave: 0 },
        { step: 0, offset: 0, octave: 1 },
        { step: 1, offset: -1, octave: 1 },
        { step: 2, offset: -1, octave: 1 },
        { step: 3, offset: 0, octave: 1 },
        { step: 4, offset: 0, octave: 1 },
    ],

    'Anatural': [
        { step: 5, offset: 0, octave: 0 },
        { step: 6, offset: 0, octave: 0 },
        { step: 0, offset: 1, octave: 1 },
        { step: 1, offset: 0, octave: 1 },
        { step: 2, offset: 0, octave: 1 },
        { step: 3, offset: 1, octave: 1 },
        { step: 4, offset: 1, octave: 1 },
    ],
    'Bflat': [
        { step: 6, offset: -1, octave: 0 },
        { step: 0, offset: 0, octave: 1 },
        { step: 1, offset: 0, octave: 1 },
        { step: 2, offset: -1, octave: 1 },
        { step: 3, offset: 0, octave: 1 },
        { step: 4, offset: 0, octave: 1 },
        { step: 5, offset: 0, octave: 1 },
    ],
    'Bnatural': [
        { step: 6, offset: 0, octave: 0 },
        { step: 0, offset: 1, octave: 1 },
        { step: 1, offset: 1, octave: 1 },
        { step: 2, offset: 0, octave: 1 },
        { step: 3, offset: 1, octave: 1 },
        { step: 4, offset: 1, octave: 1 },
        { step: 5, offset: 1, octave: 1 },
    ],
    'Cflat': [
        { step: 0, offset: -1, octave: 0 },
        { step: 1, offset: -1, octave: 0 },
        { step: 2, offset: -1, octave: 0 },
        { step: 3, offset: -1, octave: 0 },
        { step: 4, offset: -1, octave: 0 },
        { step: 5, offset: -1, octave: 0 },
        { step: 6, offset: -1, octave: 0 },
    ]
}

const MINOR = {

    'Anatural': [
        { step: 5, offset: 0, octave: 0 },
        { step: 6, offset: 0, octave: 0 },
        { step: 0, offset: 0, octave: 1 },
        { step: 1, offset: 0, octave: 1 },
        { step: 2, offset: 0, octave: 1 },
        { step: 3, offset: 0, octave: 1 },
        { step: 4, offset: 0, octave: 1 },
    ],
    'Bflat': [
        { step: 6, offset: -1, octave: 0 },
        { step: 0, offset: 0, octave: 1 },
        { step: 1, offset: -1, octave: 1 },
        { step: 2, offset: -1, octave: 1 },
        { step: 3, offset: 0, octave: 1 },
        { step: 4, offset: -1, octave: 1 },
        { step: 5, offset: -1, octave: 1 },
    ],
    'Bnatural': [
        { step: 6, offset: 0, octave: 0 },
        { step: 0, offset: 1, octave: 1 },
        { step: 1, offset: 0, octave: 1 },
        { step: 2, offset: 0, octave: 1 },
        { step: 3, offset: 1, octave: 1 },
        { step: 4, offset: 0, octave: 1 },
        { step: 5, offset: 0, octave: 1 },
    ],
    'Cnatural': [
        { step: 0, offset: 0, octave: 0 },
        { step: 1, offset: 0, octave: 0 },
        { step: 2, offset: -1, octave: 0 },
        { step: 3, offset: 0, octave: 0 },
        { step: 4, offset: 0, octave: 0 },
        { step: 5, offset: -1, octave: 0 },
        { step: 6, offset: -1, octave: 0 },
    ],
    'Csharp': [
        { step: 0, offset: 1, octave: 0 },
        { step: 1, offset: 1, octave: 0 },
        { step: 2, offset: 0, octave: 0 },
        { step: 3, offset: 1, octave: 0 },
        { step: 4, offset: 1, octave: 0 },
        { step: 5, offset: 0, octave: 0 },
        { step: 6, offset: 0, octave: 0 },
    ],
    'Dnatural': [
        { step: 1, offset: 0, octave: 0 },
        { step: 2, offset: 0, octave: 0 },
        { step: 3, offset: 0, octave: 0 },
        { step: 4, offset: 0, octave: 0 },
        { step: 5, offset: 0, octave: 0 },
        { step: 6, offset: -1, octave: 0 },
        { step: 0, offset: 0, octave: 1 },
    ],
    'Dsharp': [
        { step: 1, offset: 1, octave: 0 },
        { step: 2, offset: 1, octave: 0 },
        { step: 3, offset: 1, octave: 0 },
        { step: 4, offset: 1, octave: 0 },
        { step: 5, offset: 1, octave: 0 },
        { step: 6, offset: 0, octave: 0 },
        { step: 0, offset: 1, octave: 1 },
    ],
    'Eflat': [
        { step: 2, offset: -1, octave: 0 },
        { step: 3, offset: 0, octave: 0 },
        { step: 4, offset: -1, octave: 0 },
        { step: 5, offset: -1, octave: 0 },
        { step: 6, offset: -1, octave: 0 },
        { step: 0, offset: -1, octave: 1 },
        { step: 1, offset: -1, octave: 1 },
    ],
    'Enatural': [
        { step: 2, offset: 0, octave: 0 },
        { step: 3, offset: 1, octave: 0 },
        { step: 4, offset: 0, octave: 0 },
        { step: 5, offset: 0, octave: 0 },
        { step: 6, offset: 0, octave: 0 },
        { step: 0, offset: 0, octave: 1 },
        { step: 1, offset: 0, octave: 1 },
    ],
    'Fnatural': [
        { step: 3, offset: 0, octave: 0 },
        { step: 4, offset: 0, octave: 0 },
        { step: 5, offset: -1, octave: 0 },
        { step: 6, offset: -1, octave: 0 },
        { step: 0, offset: 0, octave: 1 },
        { step: 1, offset: -1, octave: 1 },
        { step: 2, offset: -1, octave: 1 },
    ],
    'Fsharp': [
        { step: 3, offset: 1, octave: 0 },
        { step: 4, offset: 1, octave: 0 },
        { step: 5, offset: 0, octave: 0 },
        { step: 6, offset: 0, octave: 0 },
        { step: 0, offset: 1, octave: 1 },
        { step: 1, offset: 0, octave: 1 },
        { step: 2, offset: 0, octave: 1 },
    ],
    'Gnatural': [
        { step: 4, offset: 0, octave: 0 },
        { step: 5, offset: 0, octave: 0 },
        { step: 6, offset: -1, octave: 0 },
        { step: 0, offset: 0, octave: 1 },
        { step: 1, offset: 0, octave: 1 },
        { step: 2, offset: -1, octave: 1 },
        { step: 3, offset: 0, octave: 1 },
    ],
    'Gsharp': [
        { step: 4, offset: 1, octave: 0 },
        { step: 5, offset: 1, octave: 0 },
        { step: 6, offset: 0, octave: 0 },
        { step: 0, offset: 1, octave: 1 },
        { step: 1, offset: 1, octave: 1 },
        { step: 2, offset: 0, octave: 1 },
        { step: 3, offset: 1, octave: 1 },
    ],
}

