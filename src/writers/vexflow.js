import Base from './base.js'

const { Accidental, Renderer, Stave, Formatter, StaveNote, Voice } = Vex.Flow;

const Clefs = {
    "G": 'treble',
    "F": 'bass'
}

const OffsetSymbol = {
    '0': '',
    '1': '#',
    '-1': 'b'
}

export default class VexFlowWriter extends Base {

    render(target) {
        this.target = target;
        this.setupTime()
        this.createStaveNotes()
        // this.measures()
        this.setupContext()
        this.createStave()
        this.createVoice()
        this.drawStave()
        return this
    }

    setupTime() {

        //
        this.noteDuration = 8
        this.timeSigUpper = 4
        this.timeSigLower = 4
        this.timeSignature = `${this.timeSigUpper}/${this.timeSigLower}`
    }

    /**
     * 
     * 
     */
    createStaveNotes() {
        let noteArray = this.scale.notes
        this.staveNotes = [];

        for (let i = 0; i < noteArray.length; i++) {
            let note = noteArray[i];
            const noteLabel = `${note.letter}${getAccidental(note)}/${note.octave}`
            this.staveNotes.push(new StaveNote({
                keys: [noteLabel],
                duration: this.noteDuration,
                clef: Clefs[this.clef],
            }))
        }
    }




    // measures() {

    // }

    createStave() {
        // do stuff
        this.stave = new Stave(10, 40, 400);
        // Add a clef and time signature.
        this.stave.addClef(Clefs[this.clef]).addTimeSignature(this.timeSignature);

        // Connect it to the rendering context and draw!
        this.stave.setContext(this.context).draw();
    }

    setupContext() {
        // do stuff
        // Create an SVG renderer and attach it to the DIV element named "boo".
        this.renderer = new Renderer($(this.target).get(0), Renderer.Backends.SVG);
        // Configure the rendering context.
        this.renderer.resize(500, 500);
        this.context = this.renderer.getContext();

    }

    createVoice() {
        // Create a voice in 4/4 and add above notes
        this.voice = new Voice({ num_beats: this.timeSigUpper, beat_value: this.timeSigLower });
        this.voice.addTickables(this.staveNotes);

        // Format and justify the notes to 400 pixels.
        new Formatter().joinVoices([this.voice]).format([this.voice], 350);

    }

    drawStave() {
        this.voice.draw(this.context, this.stave);
    }

}


function getAccidental(note) {
    return OffsetSymbol[note.offset]
}

export { VexFlowWriter }