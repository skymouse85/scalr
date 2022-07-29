import { StaveNote, Voice } from "vexflow";
import * as Scalr from "./model.js"
// coordinate between view and model
$(document).ready(onReady)

function onReady() {
    $('#inpform').on('submit', onSubmit)

    function onSubmit(event) {
        event.preventDefault(); //prevents from submitting and reloading page
        // need to clear on submit

        var step = $("#note").val()
        var offset = $("#offset").val()
        var tonality = $("#tonality").val()
        var clef = $("#clef").val()
        var direction = $("#direction").val()
        var octave = $("#octave").val()
        var scale = Scalr.getScale(step, offset, tonality, { 'direction': direction, 'octave': octave })

        writeScaleDomList(scale);
        writeScaleMxml(scale, clef);
        writeScaleVexFlowNative(scale, clef);
        writeScaleEasyVex(scale, clef);


    }



    // handle octave diesplacement, start with default of treble clef 
    // middle c = C4
    // stem direction - 
    //Bass clef
    // UP C1 - C3
    //DOWN D3 - B3
    //Treble clef
    // UP C4 - A4
    // DOWN B4 - B7  
}

function writeScaleDomList(scale) {
    var $ul = $("#scale_output") // 
    $ul.empty();

    var notes = scale.notes
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

function writeScaleVexFlowNative(scale, clef) {
    // vexFlow native API
    // bolier plate for size, SVG, and to get a drawing context

    const Clefs = {
        "G": 'treble',
        "F": 'bass'
    }

    const { Renderer, Stave } = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element named "boo".
    const div = document.getElementById("vexFlow_nativeOutput");
    const renderer = new Renderer(div, Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(500, 500);
    const context = renderer.getContext();

    // Create a stave of width 400 at position 10, 40 on the canvas.
    const stave = new Stave(10, 40, 400);

    // Add a clef and time signature.
    stave.addClef(Clefs[clef]).addTimeSignature("4/4");

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    //*add notes
    //Create the notes
    var noteArray = scale.notes
    /**
     * @param {Note[]} array of note objects
     * @return {Number} step
     * @return {Number} octave
     */

    function notePopulator(noteArray) {
        const notes = [];
        for (let i = 0; i < noteArray.length; i++) {
            let note = noteArray[i];
            notes.push(new StaveNote({ keys: [`${note.letter}/${note.octave}`], duration: "e" }))

        }
        // console.log(notes)
        return notes;


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





// easyScore API
function writeScaleEasyVex(scale, clef) {
    const Clefs = {
        "G": 'treble',
        "F": 'bass'
    }
    const { Factory, EasyScore, System } = Vex.Flow;

    const vf = new Factory({
        renderer: { elementId: 'vexFlow_output', width: 500, height: 200 },
    });


    const score = vf.EasyScore();
    const system = vf.System();
    // tickable.shouldIgnoreTicks();

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


    // Notes populator
    var notes = scale.notes
    var firstNote = notes[0]
    var scoreNotes = `${firstNote.letter}${offsetSymbol(firstNote.offset)}${firstNote.octave}/8, `

    for (let i = 1; i < notes.length; i++) {
        let note = notes[i];
        if (notes.indexOf(note) !== notes.length) {
            scoreNotes += note.letter + offsetSymbol(note.offset) + note.octave + ', '
        }
        else (scoreNotes += note.letter + offsetSymbol(note.offset) + note.octave)

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

        .addClef(Clefs[clef])
        .addTimeSignature(handleTime(notes));


    vf.draw();

}



// if clef === treble and root is not a,b --> root octave = 4
function writeScaleMxml(scale, clef) {
    const clefLines = {
        "G": 2,
        "F": 4
    }
    var notesXml = ``
    var notes = scale.notes
    for (let i = 0; i < notes.length; i++) {

        let note = notes[i]
        notesXml += `
          <note>
            <pitch>
              <alter>${note.offset}</alter>
              <step>${note.letter}</step>
              <octave>${note.octave}</octave>
            </pitch>
            <duration>1</duration>
            <type>quarter</type>
            <accidental>${note.accidental}</accidental>
        </note>\n`
    }

    var output = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE score-partwise PUBLIC
    "-//Recordare//DTD MusicXML 4.0 Partwise//EN"
    "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <part-list>
    <score-part id="P1">
      <part-name>vibraphone</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>0</fifths>
        </key>
        <time>
          <beats>${notes.length}</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>${clef}</sign>
          <line>${clefLines[clef]}</line>
        </clef>
      </attributes>
      ${notesXml}
    </measure>
  </part>
</score-partwise>`

    $('#xml_output').text(output)
}

