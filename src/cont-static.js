

$(document).ready(onReady)

function onReady() {
    $('#inpform').on('submit', onSubmit)
    // var form = document.getElementById("inpform");
    // form.onsubmit = onSubmit;
}

function onSubmit(event) {
    event.preventDefault(); //prevents from submitting and reloading page
    var $ul = $("#scale_output")
    // var ul = document.getElementById("scale_output")
    $ul.empty();

    var noteVal = $("#note").val()

    // call brain, get result
    var result = brain()
    console.log(result)

    // for each note in scale...
    var $li = $('<li></li>') // li is a jquery object
    // var li = document.createElement("li")

    $li.text(noteVal);
    // li.innerText = "A";

    $li.appendTo($ul)
    // ul.appendChild(li)

}