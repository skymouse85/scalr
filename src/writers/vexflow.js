import Base from './base.js'
import { TONALITY } from '../model.js'
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
        this.setupKeySig()
        this.setupTime()
        this.createStaveNotes()
        // this.measures()
        this.setupSize()
        this.setupContext()
        this.createStave()
        this.createVoice()
        this.applyAccidentals()
        this.drawStave()
        return this
    }

    setupTime() {

        //
        this.noteDuration = 8
        this.timeSigUpper = 4
        this.timeSigLower = 4
        this.timeSig = `${this.timeSigUpper}/${this.timeSigLower}`
    }
    //TODO move all size numbers to setup size
    setupSize() {
        this.width = 500;
        this.height = 200;

    }
    //TODO add fucntionality to let the user decide on key sig or accidentals
    setupKeySig() {
        this.keySig = this.scale.root.letter + getAccidental(this.scale.root);
        //TODO write this as a switch statement for all three cases of minor
        if (this.scale.tonality === TONALITY.NATURAL_MINOR) {
            this.keySig += 'm'

        }
    }

    applyAccidentals() {
        Accidental.applyAccidentals([this.voice], this.keySig)
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

        this.stave = new Stave(10, 40, 400);
        // Add a clef and time signature.
        this.stave.addClef(Clefs[this.clef])
        this.stave.addKeySignature(this.keySig)
        this.stave.addTimeSignature(this.timeSig)
        // Connect it to the rendering context and draw!
        this.stave.setContext(this.context)//.draw()
    }

    setupContext() {
        if (this.context) {
            this.context.clear()
        }
        // Create an SVG renderer and attach it to the DIV element named "boo".
        this.renderer = new Renderer($(this.target).get(0), Renderer.Backends.SVG);
        // Configure the rendering context.
        this.renderer.resize(this.width, this.height);
        this.context = this.renderer.getContext();

    }

    createVoice() {
        // Create a voice in 4/4 and add above notes
        this.voice = new Voice();
        this.voice.addTickables(this.staveNotes);

        // Format and justify the notes to 400 pixels.
        // new Formatter().joinVoices([this.voice]).format([this.voice], 350);

    }


    drawStave() {
        this.stave.draw()
        Formatter.FormatAndDraw(this.context, this.stave, this.staveNotes)
        // this.voice.draw(this.context, this.stave);
    }

}


function getAccidental(note) {
    return OffsetSymbol[note.offset]
}

export { VexFlowWriter }