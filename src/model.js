window.Scalr = {};

////  handle ABCDEFG major scales ✔️✔️✔️
////use if else to return majors given input ✔️✔️✔️
////make a major scale container object that can be called on for correct return ✔️✔️✔️
// ♮♯♭
Scalr.getScale = function (noteVal, noteFlavor, quality) {
    var noteName = noteVal + noteFlavor;
    console.log(typeof (noteName));
    console.log(quality);
    console.log(quality[noteName]);

    return quality[noteName];

}
var major = {
    //natural majors
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
    //sharp majors
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
    //flat majors
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
console.log(minor["B♭"])






//todo work on scale name output as part of scale object and Scaler.getScale based on tonality input
