window.Scalr = {};

////  handle ABCDEFG major scales ✔️✔️✔️
////use if else to return majors given input ✔️✔️✔️
////make a major scale container object that can be called on for correct return ✔️✔️✔️

var majors = {
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
    ]
}
Scalr.getScale = function (inp) {

    return majors[inp];

}


//todo work on scale name output as part of scale object and Scaler.getScale
