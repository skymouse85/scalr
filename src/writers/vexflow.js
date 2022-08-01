import Base from './base.js'

export default class VexFlowWriter extends Base {

    render(target) {
        this.target = target;
        const Clefs = {
            "G": 'treble',
            "F": 'bass'
        }

        const { Renderer, Stave, Formatter } = Vex.Flow;
        const StaveNote = Vex.Flow.StaveNote;
        const Voice = Vex.Flow.Voice;

        // const targetId = $(target).attr('id')
        // Create an SVG renderer and attach it to the DIV element named "boo".
        // const div = document.getElementById(targetId);
        const renderer = new Renderer($(target).get(0), Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(500, 500);
        const context = renderer.getContext();

        // Create a stave of width 400 at position 10, 40 on the canvas.
        const stave = new Stave(10, 40, 400);

        // Add a clef and time signature.
        stave.addClef(Clefs[this.clef]).addTimeSignature("4/4");

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        //*add notes
        //Create the notes
        var noteArray = this.scale.notes
        /**
         * @param {Note[]} array of note objects
         * @return {Number} step
         * @return {Number} octave
         */

        function notePopulator(noteArray) {
            const notes = [];
            for (let i = 0; i < noteArray.length; i++) {
                let note = noteArray[i];
                notes.push(new StaveNote({ keys: [`${note.letter}/${note.octave}`], duration: "8" }))

            }
            // console.log(notes)
            return notes;
        }

        // Create a voice in 4/4 and add above notes
        const voice = new Voice({ num_beats: 4, beat_value: 4 });
        voice.addTickables(notePopulator(noteArray));

        // Format and justify the notes to 400 pixels.
        new Formatter().joinVoices([voice]).format([voice], 350);

        // Render voice
        voice.draw(context, stave);


        // const notes = [
        //     new StaveNote({ keys: ["c/4"], duration: "e" })
        // ]

        // commit to 4/4 time and beamed 8th notes. iterate though scale while notes.length is <9 and populate the first measure
        // if the scale length is greater than 9, create a new measure and iterate starting from the 9th element. 
        // set rests where the scale length runs out

    }
}
export { VexFlowWriter }