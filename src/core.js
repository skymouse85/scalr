function brain(input) {
    return { name: 'vcrap', notes: ['A', 'B'] }
    var AMaj = [
        { letter: 'A', flavor: 'natural' },
        { letter: 'B', flavor: 'natural' },
        { letter: 'C', flavor: 'sharp' },
        { letter: 'D', flavor: 'natural' },
        { letter: 'E', flavor: 'natural' },
        { letter: 'F', flavor: 'sharp' },
        { letter: 'G', flavor: 'sharp' },
        { letter: 'A', flavor: 'natural' },
    ]

}





function scaleConstruct(sclObjArr) {
    var result = "";
    for (let i = 0; i < sclObjArr.length; i++) {
        var noteObj = sclObjArr[i];
        // for (var key in noteObj) {
        //     result += noteObj.letter;
        //     // result += noteObj.flavor;
        //     result += ','
        // }
        result += noteObj.letter;
        result += ' '
        result += noteObj.flavor;
        result += ' ';
    }
    return result;
}

console.log(scaleConstruct([
    { letter: 'A', flavor: 'natural' },
    { letter: 'B', flavor: 'natural' },
    { letter: 'C', flavor: 'sharp' },
    { letter: 'D', flavor: 'natural' },
    { letter: 'E', flavor: 'natural' },
    { letter: 'F', flavor: 'sharp' },
    { letter: 'G', flavor: 'sharp' },
    { letter: 'A', flavor: 'natural' },
]));