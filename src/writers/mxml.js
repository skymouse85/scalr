import Base from './base.js'
export default class MxmlWriter extends Base {

    render(target) {
        this.target = target;
        const clefLines = {
            "G": 2,
            "F": 4
        }
        var notesXml = ``
        var notes = this.scale.notes
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
              <sign>${this.clef}</sign>
              <line>${clefLines[this.clef]}</line>
            </clef>
          </attributes>
          ${notesXml}
        </measure>
      </part>
    </score-partwise>`

        $(target).text(output)
    }

}
export { MxmlWriter }