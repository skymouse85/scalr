window.Scalr = {};

////  handle ABCDEFG major scales ✔️✔️✔️
////use if else to return majors given input ✔️✔️✔️
////make a major scale container object that can be called on for correct return ✔️✔️✔️
// ♮♯♭

(function () {
    /**
     * these scale centers are based on the tonalities found in J.S. Bach's Well Tempered Clavier as well as the modern circle of fiths (https://en.wikipedia.org/wiki/Circle_of_fifths) They're organized them chromatically starting with C (as Bach did in WTC), including relevant enharmonic equvalents.
     */
    var major = {
        //natural majors
        'C♮': [
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'natural' },
        ],
        'C♯': [
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'sharp' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'sharp' },
            { letter: 'B', flavor: 'sharp' },
            { letter: 'C', flavor: 'sharp' },
        ],
        'D♭': [
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'flat' },
        ],
        'D♮': [
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'natural' },
        ],
        'E♭': [
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'flat' },
        ],
        'E♮': [
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'natural' },
        ],
        'F♮': [
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'natural' },
        ],
        'F♯': [
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'sharp' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'sharp' },
            { letter: 'F', flavor: 'sharp' },
        ],
        'G♭': [
            { letter: 'G', flavor: 'flat' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'flat' },
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'flat' },
        ],
        'G♮': [
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'natural' },
        ],
        'A♭': [
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'flat' },
        ],

        'A♮': [
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'natural' },
        ],
        'B♭': [
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'flat' },
        ],
        'B♮': [
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'sharp' },
            { letter: 'B', flavor: 'natural' },
        ],
        'C♭': [
            { letter: 'C', flavor: 'flat' },
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'flat' },
            { letter: 'G', flavor: 'flat' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'flat' },
        ]
    }

    var minor = {
        // circle of fifths sharp
        'A♮': [
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
        ],
        'E♮': [
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
        ],
        'B♮': [
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
        ],
        'F♯': [
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
        ],
        'C♯': [
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
        ],
        'G♯': [
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'sharp' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
        ],
        'D♯': [
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'sharp' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'sharp' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
        ],
        //circle of fourths flats
        'D♮': [
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
        ],
        'G♮': [
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
        ],
        'C♮': [
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
        ],
        'F♮': [
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
        ],
        'B♭': [
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'flat' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
        ],
        'E♭': [
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'flat' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'flat' },
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
        ]

    }

    function copyScale(scaleArr) {
        var scaleCopy = [];
        for (var i = 0; i < scaleArr.length; i++) {
            scaleCopy.push({ ...scaleArr[i] });
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
        if (scale[6].flavor === 'flat') {
            scale[6].flavor = 'natural'
        } else if (scale[6].flavor === 'natural') {
            scale[6].flavor = 'sharp'
        };
        return scale;
    }

    //*descender
    // takes in a scale and returns a shallow copy of a scale plus all notes in reverse starting at the leading tone

    function descender(scale) {
        scale = copyScale(scale);
        var full = []
        for (let i = 0; i < scale.length; i++) {
            full.push(scale[i]);
        }
        for (let j = 7; j > scale.length; j--) {
            full.push(scale[j]);
        }
        return full;
    }
    console.log(descender(minor['B♭']));

    //*melodic minor generator
    // new array that adds the values starting from the end to the beginning of the array (may use a descending scale function in this case)
    // raise ascending 6th and 7th degrees in a simaler manner to harmonic 
    // descend natural (just interate backwards and push from the input scale)


    Scalr.getScale = function (noteVal, noteFlavor, quality) {
        var noteName = noteVal + noteFlavor;
        if (quality === 'major') {
            return copyScale(major[noteName]);
        } if (quality === 'natural minor') {
            return copyScale(minor[noteName]);
        } if (quality === 'harmonic minor') {
            return harmonic(minor[noteName]);
        }

        // use if statement to popint to object from quality input

    }


    //todo work on scale name output as part of scale object and Scaler.getScale based on tonality input
    //todo write test to check each note name and get all scales and prints any that are missing
    //* from Bach WTC key centers - 
    //* CM/m, C#M/m(four sharps), DM/m, EbM/D#m(6 sharps), EM/m, FM/m, F#M/m, GM/m, AbM/G#m(5 sharps), AM/m, BbM/m(5 flats), BM/m
    //* i'll still include Eb minor, GbMajor, Cb Major, Db major
    function scaleCheck(majorScaleObj, minorScaleObj) {
        var scaleRef = {
            major: 'A',
            major: 'B',
            major: 'C',
        }
    }


    // new approach might be needed for returning different scales. 
    // vexflow front end notation librtary


})()



