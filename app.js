window.onload = function(){
    show(0);
    
}

var myQuestions = [
    {
        id : 1,
        question : "Q:1  What is the full form of RAM ?",
        answer : "Random Access Memory",
        options : [
            "Randomly Access Memory",
            "Random Access Memory",
            "Run Accept Memory",
            "None of these"
        ]

    },
    {
        id : 2,
        question : "Q :2  What is the full form of CPU ?",
        answer : "Central Processing Unit",
        options : [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]

    },
    {
        id : 3,
        question : "Q:3  What is the full form of E-mail ?",
        answer : "Electronic Mail",
        options : [
            "Electric Mail",
            "Electronic Mail",
            "Engine Mail",
            "None of these"
        ]
    },
    {
        id : 4,
        question : "Q:4  What is the full form of OSI Model ?",
        answer : "Open Systems Interconnection model",
        options : [
            "Openly Source Interchange model",
            "Open Source Interchange model",
            "Open Systems Interconnection model",
            "None of these"
        ]
    },
    {
        id : 5,
        question : "Q:5  What is the full form of ROM ?",
        answer : "Read Only Memory",
        options : [
            "Random Only Memory",
            "Read On Memory",
            "Read Only Memory",
            "None of these"
        ]

    }
];

function startQuiz(e){
    e.preventDefault()
    var input = document.forms["form_name"]["name"].value
    location.href = "quiz.html"
    sessionStorage.setItem("name",name)
    // input.value = ""
    console.log(input)
}

var question_count = 0
var point = 0

function next(){
    if(question_count == myQuestions.length - 1 ){
        location.href = "result.html"
        return
    }
    question_count++
    show(question_count)
    var User_answer = document.querySelector("li.option.active").innerHTML

    if(User_answer === myQuestions[question_count].answer){
            point += 10
            sessionStorage.setItem("points",point)
    }
    
    
    
}

function show(count){
    var question = document.getElementById("questions")

    question.innerHTML = `<h2>${myQuestions[count].question} </h2>
    <ul class="option_group">
    <li class="option">${myQuestions[count].options[0]} </li>
    <li class="option">${myQuestions[count].options[1]}</li>
    <li class="option">${myQuestions[count].options[2]}</li>
    <li class="option">${myQuestions[count].options[3]}</li>
  </ul>
  `;
  toggleActive()

}

function toggleActive(){
    var option = document.querySelectorAll("li.option")

    for(var i = 0;i < option.length;i++)
    option[i].onclick = function(){
        for(var j = 0;j < option.length;j++){
            if(option[j].classList.contains("active")){
                option[j].classList.remove("active")
            }
            option[i].classList.add("active")
        }
    }
}
