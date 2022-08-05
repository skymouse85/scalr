// import { StaveNote, Voice } from "vexflow";
import * as Scalr from "./model.js"
import * as Writers from "./writers.js"
// coordinate between view and model
$(document).ready(onReady)

function onReady() {
    $('#inpform').on('submit', onSubmit)

    const listWriter = new Writers.ListWriter
    const mxmlWriter = new Writers.MxmlWriter
    const easyVexWriter = new Writers.EasyVexWriter
    const vexFlowWriter = new Writers.VexFlowWriter
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

        listWriter.reload(scale, clef).render('#list_output')
        mxmlWriter.reload(scale, clef).render('#xml_output')
        easyVexWriter.reload(scale, clef).render($('#easyVex_output').empty())
        vexFlowWriter.reload(scale, clef).render($('#vexFlow_Output').empty())

    }
}