check = () => {

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

    sessionStorage.setItem("Score", `${score}`);
}

validation = () => {

    var name = document.getElementById("recipient-name").value;
    var rollNumber = document.getElementById("recipient-rollnumber").value;
    var show = document.getElementById("alertid");
    var modal2body = document.getElementById("modal2body");
    var procced = document.getElementById("procced");
    var keyPage = document.getElementById("exampleModalToggle2");
    var refresh = document.getElementById("refresh");
    var closebutton = document.getElementById("closebutton");

    if ((name.length && rollNumber.length) == 0) {
        show.classList.add("show");

        setTimeout(function () {
            show.classList.remove("show");
        }, 6000);

        modal2body.innerHTML = "Enter Your Name Or Roll Number To Get Started";
        procced.classList.add("hide");
        refresh.classList.add("show");
        closebutton.classList.add("hide");
    }
    else if ((name.length && rollNumber.length) > 0) {
        procced.classList.add("show")
        localStorage.setItem("Name", `${name}`);
        localStorage.setItem("Roll", `${rollNumber}`);
        refresh.classList.add("hide");
        closebutton.classList.add("show");


    }
}

openFullscreen = () => {
    
    var alert2 = document.getElementById("alertid2")
    var testkey = document.getElementById("testkey").value;
    var alerttext = document.getElementById("alerttext");
    var procced = document.getElementById("procced");

    var key = "saylaniquiz";
    if (testkey == key) {
        procced.setAttribute("data-bs-dismiss", "modal")
        alert("Please Dont change your tab or window If you Do this you will be kick out from the quiz" + "\n" + "\n" + "When Quiz Window Appear Press F11 to Enter Full Screen" + "\n" + "Press Ok button to start Your Exam");
        var newWindow = window.open("./quiz.html", "Quiz Page", "width=" + screen.availWidth + ",height=" + screen.availHeight);
        location.reload();
    } else if(testkey.length == 0){
        alerttext.innerHTML = "Enter Key to start"
        alert2.classList.add("showalert")
        setTimeout(function () {
            alert2.classList.remove("showalert");
        }, 3000);
    }else if(testkey !== key ){
        alerttext.innerHTML = "Key Not Match"
        alert2.classList.add("showalert")
        setTimeout(function () {
            alert2.classList.remove("showalert");
        }, 3000);
    } 
    

}

run = () => {
    var a = Number(sessionStorage.getItem("Score"));
    var name = localStorage.getItem("Name")
    console.log(a);
    // var b = document.getElementById("abc").innerHTML = "Your Score " + a
    var passOrfail = document.getElementById("result");
    var feedBack = document.getElementById("feedback");
    var scoreShow = document.getElementById("scoreshow").innerHTML = name +  "<br>" +  "Your Score: " + a + " Out of 5";
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

refresh = () => {
    location.reload();

}
