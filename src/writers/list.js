import Base from './base.js'
import { TONALITY } from '../model.js'

const OffsetSymbol = {
    '0': '',
    '1': '#',
    '-1': 'b'
}

export default class ListWriter extends Base {

    render(target) {
        this.target = target;
        this.setupKeySig()
        var $ul = $(target)
        $ul.empty();

        var notes = this.scale.notes
        for (let i = 0; i < notes.length; i++) {
            // for each note in scale...
            var text = "";
            var note = notes[i];
            text += note.letter;

            if (note.offset === 1) {
                text += '♯'
            } else if (note.offset === -1) {
                text += '♭'
            }

            text += ', ';
            text += note.octave;
            text += ' '


            // make a table that outputs note, offset, and octave
            // iterate through notes and populate each row notes.letter, notes.offset, notes.octave


            var $li = $('<li></li>') // li is a jquery object
            $li.text(text);

            $li.appendTo($ul)

        }
        $li.text(this.keySig)
        $li.appendTo($ul)

    }
    setupKeySig() {
        this.keySig = `key of ${this.scale.root.letter + getAccidental(this.scale.root)}`;
        //TODO refactor the switch to take this.keysig 

        var tonality = this.scale.tonality
        switch (tonality) {
            case TONALITY.NATURAL_MINOR:
                this.keySig += ' natural minor'
                break;
            case TONALITY.HARMONIC_MINOR:
                this.keySig += ' harmonic minor'
                break;
            case TONALITY.MELODIC_MINOR:
                this.keySig += ' melodic minor'
                break;
        }

    }
}
function getAccidental(note) {
    return OffsetSymbol[note.offset]
}
export { ListWriter }