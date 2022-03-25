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
var BMaj = [
    { letter: 'B', flavor: 'natural' },
    { letter: 'C', flavor: 'sharp' },
    { letter: 'D', flavor: 'sharp' },
    { letter: 'E', flavor: 'natural' },
    { letter: 'F', flavor: 'sharp' },
    { letter: 'G', flavor: 'sharp' },
    { letter: 'A', flavor: 'sharp' },
    { letter: 'B', flavor: 'natural' },
];
var CMaj = [
    { letter: 'C', flavor: 'natural' },
    { letter: 'D', flavor: 'natural' },
    { letter: 'E', flavor: 'natural' },
    { letter: 'F', flavor: 'natural' },
    { letter: 'G', flavor: 'natural' },
    { letter: 'A', flavor: 'natural' },
    { letter: 'B', flavor: 'natural' },
    { letter: 'C', flavor: 'natural' },
];
var DMaj = [
    { letter: 'D', flavor: 'natural' },
    { letter: 'E', flavor: 'natural' },
    { letter: 'F', flavor: 'sharp' },
    { letter: 'G', flavor: 'natural' },
    { letter: 'A', flavor: 'natural' },
    { letter: 'B', flavor: 'natural' },
    { letter: 'C', flavor: 'sharp' },
    { letter: 'D', flavor: 'natural' },
];
var EMaj = [
    { letter: 'E', flavor: 'natural' },
    { letter: 'F', flavor: 'sharp' },
    { letter: 'G', flavor: 'sharp' },
    { letter: 'A', flavor: 'natural' },
    { letter: 'B', flavor: 'natural' },
    { letter: 'C', flavor: 'sharp' },
    { letter: 'D', flavor: 'sharp' },
    { letter: 'E', flavor: 'natural' },
];
var FMaj = [
    { letter: 'F', flavor: 'natural' },
    { letter: 'G', flavor: 'natural' },
    { letter: 'A', flavor: 'natural' },
    { letter: 'B', flavor: 'flat' },
    { letter: 'C', flavor: 'natural' },
    { letter: 'D', flavor: 'natural' },
    { letter: 'E', flavor: 'natural' },
    { letter: 'F', flavor: 'natural' },
];
var GMaj = [
    { letter: 'G', flavor: 'natural' },
    { letter: 'A', flavor: 'natural' },
    { letter: 'B', flavor: 'natural' },
    { letter: 'C', flavor: 'natural' },
    { letter: 'D', flavor: 'natural' },
    { letter: 'E', flavor: 'natural' },
    { letter: 'F', flavor: 'sharp' },
    { letter: 'G', flavor: 'natural' },
];
//todo handle ABCDEFG major scales 
//use if else to return majors given input, then make a major scale container object that can be called on for correct return
Scalr.getScale = function (inp) {
    if (inp === 'A') {
        return AMaj;
    } else if (inp === 'B') {
        return BMaj
    } else if (inp === 'C') {
        return CMaj
    } else if (inp === 'D') {
        return DMaj
    } else if (inp === 'E') {
        return EMaj
    } else if (inp === 'F') {
        return FMaj
    } else if (inp === 'G') {
        return GMaj

    }
}

