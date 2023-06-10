var answers = {};

var question_zero = document.getElementById('question-0');
var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');
var question_nine = document.getElementById('question-9');
var question_ten = document.getElementById('question-10');


question_zero.addEventListener('click', function(event){
    storeAnswer(0, event)
})
question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})
question_six.addEventListener('click', function(event){
    storeAnswer(6, event)
})
question_seven.addEventListener('click', function(event){
    storeAnswer(7, event)
})
question_eight.addEventListener('click', function(event){
    storeAnswer(8, event)
})
question_nine.addEventListener('click', function(event){
    storeAnswer(9, event)
})
question_ten.addEventListener('click', function(event){
    storeAnswer(10, event)
})

function totalScore(){
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+ 
    answers.question5+
    answers.question6+
    answers.question7+
    answers.question8+
    answers.question9+
    answers.question10;
    
    return total_score;
}


function getInfoBasedOnScore(){

    if(totalScore() >= 0 && totalScore() < 10000){
        var score_info = "Você está no Primeiro Constructo!";
    } 
else if(totalScore() >= 10000 && totalScore() < 11600){
        var score_info = "Você está no Segundo Constructo!"
    }
else if(totalScore() >= 11600 && totalScore() < 13320){
        var score_info = "Você está no Terceiro Constructo!"
    }
else if(totalScore() == 13320){
        var score_info = "Você está no Quarto Constructo!"
}
else if(totalScore() == 13321){
        var score_info = "Você está no Quinto Constructo!"
}
    return score_info;
}

var submit0 = document.getElementById('submit0');
var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}


submit0.addEventListener('click', function(){
    nextQuestion(1);
})
submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('20%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('30%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('40%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('50%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
    growProgressBar('60%');
})
submit6.addEventListener('click', function(){
    nextQuestion(7);
    growProgressBar('70%');
})
submit7.addEventListener('click', function(){
    nextQuestion(8);
    growProgressBar('80%');
})
submit8.addEventListener('click', function(){
    nextQuestion(9);
    growProgressBar('90%');
})
submit9.addEventListener('click', function(){
    nextQuestion(10);
    growProgressBar('100%');
})
submit10.addEventListener('click', function(){
    nextQuestion(11);
    growProgressBar('100%');
})

submit10.addEventListener('click', function(){
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}


const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    if(($checkbox.checked==true) && (totalScore() >= 0 && totalScore() < 10000))
        document.getElementById("imagem").src="img/1constructor.JPG";
    else if(($checkbox.checked==true) && (totalScore() >= 10000 && totalScore() <= 11600))
        document.getElementById("imagem").src="img/2constructor.JPG";
    else if(($checkbox.checked==true) && (totalScore() >= 11600 && totalScore() < 13320))
        document.getElementById("imagem").src="img/3constructor.JPG";
    else if(($checkbox.checked==true) && (totalScore() == 13320))
        document.getElementById("imagem").src="img/4constructor.JPG";
    else if(($checkbox.checked==true) && (totalScore() == 13321))
        document.getElementById("imagem").src="img/5constructor.JPG";
    else{
        document.getElementById("imagem").src="img/img0.jpg";

    }
});

function check(){
    var question1a = document.getElementById('question-1-answer-a');
    var question1b = document.getElementById('question-1-answer-b');
    var question1c = document.getElementById('question-1-answer-c');
    var question2a = document.getElementById('question-2-answer-a');
    var question2b = document.getElementById('question-2-answer-b');
    var question2c = document.getElementById('question-2-answer-c');
    var question3a = document.getElementById('question-3-answer-a');
    var question3b = document.getElementById('question-3-answer-b');
    var question3c = document.getElementById('question-3-answer-c');
    var question4a = document.getElementById('question-4-answer-a');
    var question4b = document.getElementById('question-4-answer-b');
    var question4c = document.getElementById('question-4-answer-c');
    var question5a = document.getElementById('question-5-answer-a');
    var question5b = document.getElementById('question-5-answer-b');
    var question5c = document.getElementById('question-5-answer-c');
    var question6a = document.getElementById('question-6-answer-a');
    var question6b = document.getElementById('question-6-answer-b');
    var question6c = document.getElementById('question-6-answer-c');
    var question7a = document.getElementById('question-7-answer-a');
    var question7b = document.getElementById('question-7-answer-b');
    var question7c = document.getElementById('question-7-answer-c');
    var question8a = document.getElementById('question-8-answer-a');
    var question8b = document.getElementById('question-8-answer-b');
    var question8c = document.getElementById('question-8-answer-c');
    var question9a = document.getElementById('question-9-answer-a');
    var question9b = document.getElementById('question-9-answer-b');
    var question9c = document.getElementById('question-9-answer-c');
    var question10a = document.getElementById('question-10-answer-a');
    var question10b = document.getElementById('question-10-answer-b');
    var question10c = document.getElementById('question-10-answer-c');
    if (question1a.checked==true || question1b.checked==true || question1c.checked==true ||
        question2a.checked==true || question2b.checked==true || question2c.checked==true ||
        question3a.checked==true || question3b.checked==true || question3c.checked==true ||
        question4a.checked==true || question4b.checked==true || question4c.checked==true ||
        question5a.checked==true || question5b.checked==true || question5c.checked==true ||
        question6a.checked==true || question6b.checked==true || question6c.checked==true ||
        question7a.checked==true || question7b.checked==true || question7c.checked==true ||
        question8a.checked==true || question8b.checked==true || question8c.checked==true ||
        question9a.checked==true || question9b.checked==true || question9c.checked==true ||
        question10a.checked==true || question10b.checked==true || question10c.checked==true)
        {alert(hide());}
    else{
        alert("O resultado será inconclusivo pois você não selecionou uma opção.");
    }
}

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}