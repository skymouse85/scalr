import Base from './base.js'

const { Accidental, Renderer, Stave, Formatter, StaveNote, Voice } = Vex.Flow;

const Clefs = {
    "G": 'treble',
    "F": 'bass'
}

const OffsetSymbol = {

    '1': '#',
    '-1': 'b'
}
export default class VexFlowWriter extends Base {

    render(target) {
        this.target = target;

        this.notePopulator()
        // this.accidentals()
        // this.measures()
        this.setupContext()
        this.createStaves()
        this.createVoice()
        this.drawStaves()
        return this
    }

    /**
     * 
     * @returns 
     */
    notePopulator() {
        let noteArray = this.scale.notes
        const notes = [];

        for (let i = 0; i < noteArray.length; i++) {
            let note = noteArray[i];
            let offset = OffsetSymbol[this.offset]
            // console.log(note.OffsetSymbol[offset])
            let accident = offset !== 0;

            if (accident) {
                notes.push(new StaveNote({ keys: [`${note.letter}${offset}$/${note.octave}`], duration: "8" })).addModifer(new Accidental(offset));
            } else {
                notes.push(new StaveNote({ keys: [`${note.letter}$/${note.octave}`], duration: "8" }))
            }



        }
        return notes;
    }

    // offss

    // accidentals() {
    //     this.accidental = new Accidental('accString')
    // }

    // measures() {

    // }

    createStaves() {
        // do stuff
        this.stave = new Stave(10, 40, 400);
        // Add a clef and time signature.
        this.stave.addClef(Clefs[this.clef]).addTimeSignature("4/4");

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
        this.voice = new Voice({ num_beats: 4, beat_value: 4 });
        this.voice.addTickables(this.notePopulator());

        // Format and justify the notes to 400 pixels.
        new Formatter().joinVoices([this.voice]).format([this.voice], 350);

    }

    drawStaves() {
        this.voice.draw(this.context, this.stave);
    }

}

export { VexFlowWriter }