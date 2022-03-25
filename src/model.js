window.Scalr = {};
var AMaj = [
    { letter: 'A', flavor: 'natural' },
    { letter: 'B', flavor: 'natural' },
    { letter: 'C', flavor: 'sharp' },
    { letter: 'D', flavor: 'natural' },
    { letter: 'E', flavor: 'natural' },
    { letter: 'F', flavor: 'sharp' },
    { letter: 'G', flavor: 'sharp' },
    { letter: 'A', flavor: 'natural' },
];
//todo handle ABCDEFG major scales

Scalr.getScale = function (inp) {
    if (inp === 'A') {
        return AMaj;
    }
}



