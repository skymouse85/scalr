
const OffsetSymbol = {
    '0': '',
    '1': '#',
    '-1': 'b'
}

export default class BaseWriter {
    reload(scale, clef) {
        this.scale = scale;
        this.clef = clef;
        return this; // return the instance of the class, enables chaining

    }


    // setupKeySig() {
    //     this.keySig = this.scale.root.letter + getAccidental(this.scale.root);
    //     //TODO refactor the switch to take this.keysig 
    //     var tonality = this.scale.tonality
    //     switch (tonality) {
    //         case TONALITY.NATURAL_MINOR:
    //         case TONALITY.HARMONIC_MINOR:
    //         case TONALITY.MELODIC_MINOR:
    //             this.keySig += 'm'
    //             break;
    //     }
    // }

    render(target) {
        throw new Error('Not Implemented');
    }
}

// function getAccidental(note) {
//     return OffsetSymbol[note.offset]
// }
