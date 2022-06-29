
// coordinate between view and model
$(document).ready(onReady)

function onReady() {
  $('#inpform').on('submit', onSubmit)

  function onSubmit(event) {
    event.preventDefault(); //prevents from submitting and reloading page
    // need to clear on submit

    var noteVal = $("#note").val()
    var noteoffset = $("#offset").val()
    var quality = $("#quality").val()
    var clef = $("#clef").val()
    var scale = Scalr.getScale(noteVal, noteoffset, quality)

    writeScaleDomList(scale);
    writeScaleMxml(scale, clef);
    writeScaleVexFlow(scale, clef);

  }


  function writeScaleDomList(scale) {
    var $ul = $("#scale_output") // 
    $ul.empty();
    for (let i = 0; i < scale.length; i++) {
      // for each note in scale...
      var text = "";
      var note = scale[i];
      text += note.letter;
      text += ' '
      if (note.offset === 1) {
        text += '♯'
      } else if (note.offset === -1) {
        text += '♭'
      }

      text += ' ';
      var $li = $('<li></li>') // li is a jquery object
      $li.text(text);

      $li.appendTo($ul)

    }

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



function writeScaleVexFlow(scale, clef) {

  const { Factory, EasyScore, System } = Vex.Flow;

  const vf = new Factory({
    renderer: { elementId: 'vexFlow_output', width: 500, height: 200 },
  });


  const score = vf.EasyScore();
  const system = vf.System();
  clef = clef.toLowerCase();

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


  // Notes populator
  var firstNote = scale[0]
  var scoreNotes = `${firstNote.letter}${offsetSymbol(firstNote.offset)}${firstNote.octave}/8, `

  for (let i = 1; i < scale.length; i++) {
    let note = scale[i];
    if (scale.indexOf(note) !== scale.length) {
      scoreNotes += note.letter + offsetSymbol(note.offset) + note.octave + ', '
    }
    else (scoreNotes += note.letter + offsetSymbol(note.offset) + note.octave)

  }
  scoreNotes += firstNote.letter + offsetSymbol(firstNote.offset) + (firstNote.octave + 1)

  system
    .addStave({
      voices: [
        score.voice(score.notes(scoreNotes, { stem: 'up' }))
        // score.voice(score.notes('C#4/h, C#4', { stem: 'down' })),

      ],
    })

    .addClef(clef)
    .addTimeSignature('4/4');

  vf.draw();

}



// if clef === treble and root is not a,b --> root octave = 4
function writeScaleMxml(scale, clef) {
  var notesXml = ``
  for (let i = 0; i < scale.length; i++) {

    let note = scale[i]
    notesXml += `
          <note>
            <pitch>
              <alter>${note.offset}</alter>
              <step>${note.letter}</step>
              <octave>${Scalr.getOctaveForClef(clef, note)}</octave>
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
          <beats>${scale.length}</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>${Scalr.clefSign(clef)}</sign>
          <line>${Scalr.clefLine(clef)}</line>
        </clef>
      </attributes>
      ${notesXml}
    </measure>
  </part>
</score-partwise>`

  $('#xml_output').text(output)
}

