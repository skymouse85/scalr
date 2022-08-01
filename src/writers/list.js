import Base from './base.js'

export default class ListWriter extends Base {

    render(target) {
        this.target = target;
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

    }
}
export { ListWriter }