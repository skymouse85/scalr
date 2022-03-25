window.Scalr = {};

////  handle ABCDEFG major scales ✔️✔️✔️
////use if else to return majors given input ✔️✔️✔️
////make a major scale container object that can be called on for correct return ✔️✔️✔️
// ♮♯♭
var majors = {
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

Scalr.getScale = function (inp) {

    return majors[inp];

}


//todo work on scale name output as part of scale object and Scaler.getScale
