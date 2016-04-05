//correct functions

function correct1(){
    document.querySelector("#box-1").style.backgroundColor = "#66bb6a";
    document.querySelector("#box-1").style.disabled = false;
}
function correct2(){
    document.querySelector("#box-2").style.backgroundColor = "#66bb6a";
    document.querySelector("#box-2").style.disabled = false;
}
function correct3(){
    document.querySelector("#box-3").style.backgroundColor = "#66bb6a";
    document.querySelector("#box-3").style.disabled = false;
}
function correct4(){
    document.querySelector("#box-4").style.backgroundColor = "#66bb6a";
    document.querySelector("#box-4").style.disabled = false;
}

//incorrect functions

function incorrect1(){
    document.querySelector("#box-1").style.backgroundColor = "#ef5350";
    document.querySelector("#box-1").style.disabled = false;
}
function incorrect2(){
    document.querySelector("#box-2").style.backgroundColor = "#ef5350";
    document.querySelector("#box-2").style.disabled = false;
}
function incorrect3(){
    document.querySelector("#box-3").style.backgroundColor = "#ef5350";
    document.querySelector("#box-3").style.disabled = false;
}
function incorrect4(){
    document.querySelector("#box-4").style.backgroundColor = "#ef5350";
    document.querySelector("#box-4").style.disabled = false;
}

//next question functions

function show2Question(){
    document.querySelector("#number").innerText = "Two";
    document.querySelector("#question-one").style.display = "none";
    document.querySelector("#question-two").style.display = "block";
}
function show3Question(){
    document.querySelector("#number").innerText = "Three";
    document.querySelector("#question-two").style.display = "none";
    document.querySelector("#question-three").style.display = "block";
}
function show4Question(){
    document.querySelector("#number").innerText = "Four";
    document.querySelector("#question-three").style.display = "none";
    document.querySelector("#question-four").style.display = "block";
}
function showThanks(){
    document.querySelector(".completionText").innerHTML = "<b>Thanks</b> for Playing!";
    document.querySelector("#question-four").style.display = "none";
    document.querySelector("#thanks").style.display = "block";
}