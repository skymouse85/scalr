import Base from './base.js'
export default class EasyVexWriter extends Base {
    render(target) {
        this.target = target
        const Clefs = {
            "G": 'treble',
            "F": 'bass'
        }
        const { Factory, EasyScore, System } = Vex.Flow;

        const targetId = $(target).attr('id')

        const vf = new Factory({
            renderer: { elementId: targetId, width: 500, height: 200 },
        });


        const score = vf.EasyScore();
        const system = vf.System();
        // tickable.shouldIgnoreTicks();

        // Notes populator
        var notes = this.scale.notes
        var firstNote = notes[0]
        var scoreNotes = `${firstNote.letter}${offsetSymbol(firstNote.offset)}${firstNote.octave}/8, `

        for (let i = 1; i < notes.length; i++) {
            let note = notes[i];
            if (notes.indexOf(note) !== notes.length) {
                scoreNotes += note.letter + offsetSymbol(note.offset) + note.octave + ', '
            }
            else (scoreNotes += note.letter + offsetSymbol(note.offset) + note.octave)

        }

        //offset to # or b
        function offsetSymbol(offset) {
            var symbol = ''
            if (offset === -1) {
                symbol = 'b'
            }
            else if (offset === 1) {
                symbol = '#'
            }
            return symbol
        }
        function handleTime(notes) {
            if (notes.length <= 8) {
                return '4/4'
            } else if (notes.length > 8 && notes.length <= 16) {
                return '8/4'
            }
        }
        // scoreNotes += firstNote.letter + offsetSymbol(firstNote.offset) + (firstNote.octave + 1)

        system
            .addStave({
                voices: [
                    score.voice(
                        score.beam(
                            score.notes(scoreNotes, { stem: 'up' })))
                    // score.voice(score.notes('C#4/h, C#4', { stem: 'down' })),

                ],
            })

            .addClef(Clefs[this.clef])
            .addTimeSignature(handleTime(notes));


        vf.draw();
    }

}
export { EasyVexWriter }