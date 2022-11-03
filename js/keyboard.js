var startNb = 0;
var phrase = "Le chat.";
var tps = 0;

function myInput() {
    var myInput = document.getElementById("myInput");
    var myOutput = myInput.value;
    setTimeout(fin, 5000);
    if (myOutput == phrase) {
        myInput.disabled = true;
        myInput.innerHTML = "Tu fais " + tps + "tps";
    }
}

function restart() {
    var myInput = document.getElementById("myInput");
    myInput.disabled = disabled;
}

function onLoad() {
    var phraseP = document.getElementById("phrase");
    phraseP.innerHTML = phrase;
}