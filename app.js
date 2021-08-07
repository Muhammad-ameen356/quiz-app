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

    // alert(score);
    sessionStorage.setItem("Score", `${score}`)

}


function openFullscreen() {
    alert("Please Dont change your tab or window other Wise you will be kick out from the quiz" + "\n" + "\n" + "Press Ok button to start Your Exam");
    var newWindow = window.open("./quiz.html", "Quiz Page", "width=" + screen.availWidth + ",height=" + screen.availHeight);

}

function run() {
    var a = Number(sessionStorage.getItem("Score"));
    console.log(a);
    // var b = document.getElementById("abc").innerHTML = "Your Score " + a
    var passOrfail = document.getElementById("result");
    var feedBack = document.getElementById("feedback");
    var scoreShow = document.getElementById("scoreshow").innerHTML = "Your Score: " + a + " Out of 5";
    var background = document.getElementById("background");
    if (a >= 3) {
        passOrfail.innerHTML = "Pass";
        feedBack.innerHTML = "Well Done";
        passOrfail.classList.add("pass");
        background.classList.add("congratulation");
    } else if (a < 3) {
        passOrfail.innerHTML = "fail";
        feedBack.innerHTML = "You Need to work Hard";
        passOrfail.classList.add("fail");
        background.classList.add("udas");

    }
}
