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
    var major = {
        'Cnatural': [
            { step: 0, offset: 0, trebleRange: 4 },
            { step: 1, offset: 0, trebleRange: 4 },
            { step: 2, offset: 0, trebleRange: 4 },
            { step: 3, offset: 0, trebleRange: 4 },
            { step: 4, offset: 0, trebleRange: 4 },
            { step: 5, offset: 0, trebleRange: 4 },
            { step: 6, offset: 0, trebleRange: 4 },
        ],
        'Csharp': [
            { step: 0, offset: 1, trebleRange: 4 },
            { step: 1, offset: 1, trebleRange: 4 },
            { step: 2, offset: 1, trebleRange: 4 },
            { step: 3, offset: 1, trebleRange: 4 },
            { step: 4, offset: 1, trebleRange: 4 },
            { step: 5, offset: 1, trebleRange: 4 },
            { step: 6, offset: 1, trebleRange: 5 },
        ],
        'Dflat': [
            { step: 1, offset: -1, trebleRange: 4 },
            { step: 2, offset: -1, trebleRange: 4 },
            { step: 3, offset: 0, trebleRange: 4 },
            { step: 4, offset: 0, trebleRange: 4 },
            { step: 5, offset: -1, trebleRange: 4 },
            { step: 6, offset: -1, trebleRange: 4 },
            { step: 0, offset: 0, trebleRange: 5 },
        ],
        'Dnatural': [
            { step: 1, offset: 0, trebleRange: 4 },
            { step: 2, offset: 0, trebleRange: 4 },
            { step: 3, offset: 1, trebleRange: 4 },
            { step: 4, offset: 0, trebleRange: 4 },
            { step: 5, offset: 0, trebleRange: 4 },
            { step: 6, offset: 0, trebleRange: 4 },
            { step: 0, offset: 1, trebleRange: 5 },
        ],
        'Eflat': [
            { step: 2, offset: -1, trebleRange: 4 },
            { step: 3, offset: 0, trebleRange: 4 },
            { step: 4, offset: 0, trebleRange: 4 },
            { step: 5, offset: -1, trebleRange: 4 },
            { step: 6, offset: -1, trebleRange: 4 },
            { step: 0, offset: 0, trebleRange: 5 },
            { step: 1, offset: 0, trebleRange: 5 },
        ],
        'Enatural': [
            { step: 2, offset: 0, trebleRange: 4 },
            { step: 3, offset: 1, trebleRange: 4 },
            { step: 4, offset: 1, trebleRange: 4 },
            { step: 5, offset: 0, trebleRange: 4 },
            { step: 6, offset: 0, trebleRange: 4 },
            { step: 0, offset: 1, trebleRange: 5 },
            { step: 1, offset: 1, trebleRange: 5 },
        ],
        'Fnatural': [
            { step: 3, offset: 0, trebleRange: 4 },
            { step: 4, offset: 0, trebleRange: 4 },
            { step: 5, offset: 0, trebleRange: 4 },
            { step: 6, offset: -1, trebleRange: 4 },
            { step: 0, offset: 0, trebleRange: 5 },
            { step: 1, offset: 0, trebleRange: 5 },
            { step: 2, offset: 0, trebleRange: 5 },
        ],
        'Fsharp': [
            { step: 3, offset: 1, trebleRange: 4 },
            { step: 4, offset: 1, trebleRange: 4 },
            { step: 5, offset: 1, trebleRange: 4 },
            { step: 6, offset: 0, trebleRange: 4 },
            { step: 0, offset: 1, trebleRange: 5 },
            { step: 1, offset: 1, trebleRange: 5 },
            { step: 2, offset: 1, trebleRange: 5 },
        ],
        'Gflat': [
            { step: 4, offset: -1, trebleRange: 4 },
            { step: 5, offset: -1, trebleRange: 4 },
            { step: 6, offset: -1, trebleRange: 4 },
            { step: 0, offset: -1, trebleRange: 5 },
            { step: 1, offset: -1, trebleRange: 5 },
            { step: 2, offset: -1, trebleRange: 5 },
            { step: 3, offset: 0, trebleRange: 5 },
        ],
        'Gnatural': [
            { step: 4, offset: 0, trebleRange: 4 },
            { step: 5, offset: 0, trebleRange: 4 },
            { step: 6, offset: 0, trebleRange: 4 },
            { step: 0, offset: 0, trebleRange: 5 },
            { step: 1, offset: 0, trebleRange: 5 },
            { step: 2, offset: 0, trebleRange: 5 },
            { step: 3, offset: 1, trebleRange: 5 },
        ],
        'Aflat': [
            { step: 5, offset: -1, trebleRange: 3 },
            { step: 6, offset: -1, trebleRange: 3 },
            { step: 0, offset: 0, trebleRange: 4 },
            { step: 1, offset: -1, trebleRange: 4 },
            { step: 2, offset: -1, trebleRange: 4 },
            { step: 3, offset: 0, trebleRange: 4 },
            { step: 4, offset: 0, trebleRange: 4 },
        ],

        'Anatural': [
            { step: 5, offset: 0, trebleRange: 3 },
            { step: 6, offset: 0, trebleRange: 3 },
            { step: 0, offset: 1, trebleRange: 4 },
            { step: 1, offset: 0, trebleRange: 4 },
            { step: 2, offset: 0, trebleRange: 4 },
            { step: 3, offset: 1, trebleRange: 4 },
            { step: 4, offset: 1, trebleRange: 4 },
        ],
        'Bflat': [
            { step: 6, offset: -1, trebleRange: 3 },
            { step: 0, offset: 0, trebleRange: 4 },
            { step: 1, offset: 0, trebleRange: 4 },
            { step: 2, offset: -1, trebleRange: 4 },
            { step: 3, offset: 0, trebleRange: 4 },
            { step: 4, offset: 0, trebleRange: 4 },
            { step: 5, offset: 0, trebleRange: 4 },
        ],
        'Bnatural': [
            { step: 6, offset: 0, trebleRange: 3 },
            { step: 0, offset: 1, trebleRange: 4 },
            { step: 1, offset: 1, trebleRange: 4 },
            { step: 2, offset: 0, trebleRange: 4 },
            { step: 3, offset: 1, trebleRange: 4 },
            { step: 4, offset: 1, trebleRange: 4 },
            { step: 5, offset: 1, trebleRange: 4 },
        ],
        'Cflat': [
            { step: 0, offset: -1, trebleRange: 4 },
            { step: 1, offset: -1, trebleRange: 4 },
            { step: 2, offset: -1, trebleRange: 4 },
            { step: 3, offset: -1, trebleRange: 4 },
            { step: 4, offset: -1, trebleRange: 4 },
            { step: 5, offset: -1, trebleRange: 4 },
            { step: 6, offset: -1, trebleRange: 4 },
        ]
    }

    var minor = {

        'Anatural': [
            { step: 5, offset: 0 },
            { step: 6, offset: 0 },
            { step: 0, offset: 0 },
            { step: 1, offset: 0 },
            { step: 2, offset: 0 },
            { step: 3, offset: 0 },
            { step: 4, offset: 0 },
        ],
        'Bflat': [
            { step: 6, offset: -1 },
            { step: 0, offset: 0 },
            { step: 1, offset: -1 },
            { step: 2, offset: -1 },
            { step: 3, offset: 0 },
            { step: 4, offset: -1 },
            { step: 5, offset: -1 },
        ],
        'Bnatural': [
            { step: 6, offset: 0 },
            { step: 0, offset: 1 },
            { step: 1, offset: 0 },
            { step: 2, offset: 0 },
            { step: 3, offset: 1 },
            { step: 4, offset: 0 },
            { step: 5, offset: 0 },
        ],
        'Cnatural': [
            { step: 0, offset: 0 },
            { step: 1, offset: 0 },
            { step: 2, offset: -1 },
            { step: 3, offset: 0 },
            { step: 4, offset: 0 },
            { step: 5, offset: -1 },
            { step: 6, offset: -1 },
        ],
        'Csharp': [
            { step: 0, offset: 1 },
            { step: 1, offset: 1 },
            { step: 2, offset: 0 },
            { step: 3, offset: 1 },
            { step: 4, offset: 1 },
            { step: 5, offset: 0 },
            { step: 6, offset: 0 },
        ],
        'Dnatural': [
            { step: 1, offset: 0 },
            { step: 2, offset: 0 },
            { step: 3, offset: 0 },
            { step: 4, offset: 0 },
            { step: 5, offset: 0 },
            { step: 6, offset: -1 },
            { step: 0, offset: 0 },
        ],
        'Dsharp': [
            { step: 1, offset: 1 },
            { step: 2, offset: 1 },
            { step: 3, offset: 1 },
            { step: 4, offset: 1 },
            { step: 5, offset: 1 },
            { step: 6, offset: 0 },
            { step: 0, offset: 1 },
        ],
        'Eflat': [
            { step: 2, offset: -1 },
            { step: 3, offset: 0 },
            { step: 4, offset: -1 },
            { step: 5, offset: -1 },
            { step: 6, offset: -1 },
            { step: 0, offset: -1 },
            { step: 1, offset: -1 },
        ],
        'Enatural': [
            { step: 2, offset: 0 },
            { step: 3, offset: 1 },
            { step: 4, offset: 0 },
            { step: 5, offset: 0 },
            { step: 4, offset: 0 },
            { step: 0, offset: 0 },
            { step: 1, offset: 0 },
        ],
        'Fnatural': [
            { step: 3, offset: 0 },
            { step: 4, offset: 0 },
            { step: 5, offset: -1 },
            { step: 6, offset: -1 },
            { step: 0, offset: 0 },
            { step: 1, offset: -1 },
            { step: 2, offset: -1 },
        ],
        'Fsharp': [
            { step: 3, offset: 1 },
            { step: 4, offset: 1 },
            { step: 5, offset: 0 },
            { step: 6, offset: 0 },
            { step: 0, offset: 1 },
            { step: 1, offset: 0 },
            { step: 2, offset: 0 },
        ],
        'Gnatural': [
            { step: 4, offset: 0 },
            { step: 5, offset: 0 },
            { step: 6, offset: -1 },
            { step: 0, offset: 0 },
            { step: 1, offset: 0 },
            { step: 2, offset: -1 },
            { step: 3, offset: 0 },
        ],
        'Gsharp': [
            { step: 4, offset: 1 },
            { step: 5, offset: 1 },
            { step: 6, offset: 0 },
            { step: 0, offset: 1 },
            { step: 1, offset: 1 },
            { step: 2, offset: 0 },
            { step: 3, offset: 1 },
        ],
    }

    // var trebleRanges = {
    //     'C': [
    //         { degree: 0, trebleRange: 4 },
    //         { degree: 1, range: 4 },
    //         { degree: 2, range: 4 },
    //         { degree: 3, range: 4 },
    //         { degree: 4, range: 4 },
    //         { degree: 5, range: 4 },
    //         { degree: 6, range: 4 },
    //     ],
    //     'D': [
    //         { degree: 0, range: 4 },
    //         { degree: 1, range: 4 },
    //         { degree: 2, range: 4 },
    //         { degree: 3, range: 4 },
    //         { degree: 4, range: 4 },
    //         { degree: 5, range: 4 },
    //         { degree: 6, range: 5 },
    //     ],
    //     'E': [
    //         { degree: 0, range: 4 },
    //         { degree: 1, range: 4 },
    //         { degree: 2, range: 4 },
    //         { degree: 3, range: 4 },
    //         { degree: 4, range: 4 },
    //         { degree: 5, range: 5 },
    //         { degree: 6, range: 5 },
    //     ],
    //     'F': [
    //         { degree: 0, range: 4 },
    //         { degree: 1, range: 4 },
    //         { degree: 2, range: 4 },
    //         { degree: 3, range: 4 },
    //         { degree: 4, range: 5 },
    //         { degree: 5, range: 5 },
    //         { degree: 6, range: 5 },
    //     ],
    //     'G': [
    //         { degree: 0, range: 4 },
    //         { degree: 1, range: 4 },
    //         { degree: 2, range: 4 },
    //         { degree: 3, range: 5 },
    //         { degree: 4, range: 5 },
    //         { degree: 5, range: 5 },
    //         { degree: 6, range: 5 },
    //     ],
    //     'A': [
    //         { degree: 0, range: 3 },
    //         { degree: 1, range: 3 },
    //         { degree: 2, range: 4 },
    //         { degree: 3, range: 4 },
    //         { degree: 4, range: 4 },
    //         { degree: 5, range: 4 },
    //         { degree: 6, range: 4 },
    //     ],
    //     'B': [
    //         { degree: 0, range: 3 },
    //         { degree: 1, range: 4 },
    //         { degree: 2, range: 4 },
    //         { degree: 3, range: 4 },
    //         { degree: 4, range: 4 },
    //         { degree: 5, range: 4 },
    //         { degree: 6, range: 4 },
    //     ]

    // }


    function copyScale(scaleArr) {
        var scaleCopy = [];
        for (var i = 0; i < scaleArr.length; i++) {
            scaleCopy.push({ ...scaleArr[i] });
        }
        return scaleCopy;
    }

    var diminished = {
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
            descend.push({ ...scale[j] });
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

    Scalr.getLetter = function (step) {
        return LETTERS[step]
    }
    Scalr.getAccidental = function (offset) {
        return ACCIDENTS[offset]
    }
    Scalr.getRange = function (clef, note) {
        if (clef === 'Treble') {
            return note.trebleRange
        }
        else if (clef === 'Bass') {
            return note.trebleRange - 1
        }
    }

    // Scalr.getRange = function (scale, clef) {
    //     var range = 4
    //     if (scale[0] === 'Anatural' && clef === 'Treble') {
    //         range
    //     }

    // }

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



