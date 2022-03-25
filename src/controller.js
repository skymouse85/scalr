// coordinate between view and model

$(document).ready(onReady)

function onReady() {
    $('#inpform').on('submit', onSubmit)

    function onSubmit(event) {
        event.preventDefault(); //prevents from submitting and reloading page

        var noteVal = $("#note").val()

        var scale = Scalr.getScale(noteVal)
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
            text += note.flavor;
            //todo work on basic text output for accidentals - if note.lavor  ===  flat {} ect...

            text += ' ';
            var $li = $('<li></li>') // li is a jquery object
            $li.text(text);

            $li.appendTo($ul)

        }

    }


}

