// coordinate between view and model

$(document).ready(onReady)

function onReady() {
    $('#inpform').on('submit', onSubmit)

    function onSubmit(event) {
        event.preventDefault(); //prevents from submitting and reloading page

        var noteVal = $("#note").val()
        var noteFlavor = $("#flavor").val()
        var quality = $("#quality").val() // i believe this is the issue
        var scale = Scalr.getScale(noteVal, noteFlavor, quality)
        console.log(scale)

        writeScale(scale);

    }


    function writeScale(scale) {
        var $ul = $("#scale_output") // 
        $ul.empty();
        for (let i = 0; i < scale.length; i++) {
            // for each note in scale...
            var text = "";
            var note = scale[i];
            text += note.letter;
            text += ' '
            if (note.flavor === 'sharp') {
                text += '♯'
            } else if (note.flavor === 'flat') {
                text += '♭'
            }
            //// work on basic text output for accidentals - if note.flavor  ===  flat {note.flavor = b} ect...

            text += ' ';
            var $li = $('<li></li>') // li is a jquery object
            $li.text(text);

            $li.appendTo($ul)

        }

    }


}

