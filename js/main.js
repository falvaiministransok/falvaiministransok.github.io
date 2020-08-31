/*function Change() {

    if ((document.getElementById('answerYes').checked)) {
        document.getElementById('Igen').style.visibility = "visible";
    }
    else {
        document.getElementById('Igen').style.visibility = "hidden";
    }
    if ((document.getElementById('answerNo').checked)) {
        document.getElementById('Nem').style.visibility = "visible";
    }
    else {
        document.getElementById('Nem').style.visibility = "hidden";
    }
}*/

function displayQuestion(answer) {

    document.getElementById(answer + 'Question').style.display = "block";

    if (answer == "yes") { // hide the div that is not selected

        document.getElementById('noQuestion').style.display = "none";

    } else if (answer == "no") {

        document.getElementById('yesQuestion').style.display = "none";

    }

}

var btnClear = document.querySelector('button');
var inputs = document.querySelectorAll('input');

btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
});