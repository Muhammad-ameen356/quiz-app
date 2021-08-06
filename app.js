function check() {

    var firstQuestion = document.getElementById("q1radio4").checked;
    var seconfdQuestion = document.getElementById("q2radio3").checked;
    var thirdQuestion = document.getElementById("q3radio2").checked;
    var fourthQuestion = document.getElementById("q4radio1").checked;
    var fifthQuestion = document.getElementById("q5radio1").checked;


    var score = 0;
    if (firstQuestion == true) {
        score++
    }
    if (seconfdQuestion == true) {
        score++
    }
    if (thirdQuestion == true) {
        score++
    }
    if (fourthQuestion == true) {
        score++
    }
    if (fifthQuestion == true) {
        score++
    }

    alert(score);
    localStorage.setItem("Score", `${score}`)

}


function openFullscreen() {
    var newWindow = window.open("./quiz.html", "Quiz Page", "width=" + screen.availWidth + ",height=" + screen.availHeight);
}

function run() {
    var a = Number(localStorage.getItem("Score"));
    // console.log(typeof a);
    var b = document.getElementById("abc").innerHTML = "Your Score " + a
}
