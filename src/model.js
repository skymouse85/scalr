window.Scalr = {};

// ♮♯♭

(function () {
    /**
     * these scale centers are based on the tonalities found in J.S. Bach's Well Tempered Clavier as well as the modern circle of fiths (https://en.wikipedia.org/wiki/Circle_of_fifths) Major scales are organized chromatically starting with C, and minors are organized chormatically starting with A (as Bach did in WTC), including relevant enharmonic equvalents.
     */

    //* all chromatic majors and minors are accounted for as is 'correct'
    var major = {
        'Cnatural': [
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'natural' },
        ],
        'Csharp': [
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'sharp' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'sharp' },
            { letter: 'B', flavor: 'sharp' },
            { letter: 'C', flavor: 'sharp' },
        ],
        'Dflat': [
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'flat' },
        ],
        'Dnatural': [
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'natural' },
        ],
        'Eflat': [
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'flat' },
        ],
        'Enatural': [
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'natural' },
        ],
        'Fnatural': [
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'natural' },
        ],
        'Fsharp': [
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'sharp' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'sharp' },
            { letter: 'F', flavor: 'sharp' },
        ],
        'Gflat': [
            { letter: 'G', flavor: 'flat' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'flat' },
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'flat' },
        ],
        'Gnatural': [
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'natural' },
        ],
        'Aflat': [
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'flat' },
        ],

        'Anatural': [
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'natural' },
        ],
        'Bflat': [
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'flat' },
        ],
        'Bnatural': [
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'sharp' },
            { letter: 'B', flavor: 'natural' },
        ],
        'Cflat': [
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

        'Anatural': [
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
        ],
        'Bflat': [
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'flat' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
        ],
        'Bnatural': [
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
        ],
        'Cnatural': [
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
        ],
        'Csharp': [
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
        ],
        'Dnatural': [
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
        ],
        'Dsharp': [
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'sharp' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'sharp' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
        ],
        'Eflat': [
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'flat' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'flat' },
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
        ],
        'Enatural': [
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
        ],
        'Fnatural': [
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'flat' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'flat' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
        ],
        'Fsharp': [
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
        ],
        'Gnatural': [
            { letter: 'G', flavor: 'natural' },
            { letter: 'A', flavor: 'natural' },
            { letter: 'B', flavor: 'flat' },
            { letter: 'C', flavor: 'natural' },
            { letter: 'D', flavor: 'natural' },
            { letter: 'E', flavor: 'flat' },
            { letter: 'F', flavor: 'natural' },
            { letter: 'G', flavor: 'natural' },
        ],
        'Gsharp': [
            { letter: 'G', flavor: 'sharp' },
            { letter: 'A', flavor: 'sharp' },
            { letter: 'B', flavor: 'natural' },
            { letter: 'C', flavor: 'sharp' },
            { letter: 'D', flavor: 'sharp' },
            { letter: 'E', flavor: 'natural' },
            { letter: 'F', flavor: 'sharp' },
            { letter: 'G', flavor: 'sharp' },
        ],
    }

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
        if (ascend[5].flavor === 'flat') {
            ascend[5].flavor = 'natural'
        } else if (ascend[5].flavor === 'natural') {
            ascend[5].flavor = 'sharp'
        };
        if (ascend[6].flavor === 'flat') {
            ascend[6].flavor = 'natural'
        } else if (ascend[6].flavor === 'natural') {
            ascend[6].flavor = 'sharp'
        };
        // make a descend var that runs scale through descender
        var descend = descender(scale);
        //concat and return ascend and descend
        return ascend.concat(descend);
    }



    Scalr.getScale = function (noteVal, noteFlavor, quality) {
        var noteName = noteVal + noteFlavor;
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

    // vexflow front end notation librtary


})()



