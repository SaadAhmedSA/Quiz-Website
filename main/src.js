var quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "javascript",
        correct : "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<js>",
        c: "<scripting>",
        d: "<javascript>",
        correct: "a",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "<head>",
        b: "<body>",
        c: "<Both>and<head>",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "What is the correct syntax for referring to an external script called 'app.js'?",
        a: "<script herf =' '>",
        b: "<script src =' '>",
        c: "<script name =' '>",
        d: "All of the above",
        correct: "b",
    },
    {
        question: "How do you call a function named 'myFunction'?",
        a: "call myfunction()",
        b: "call myfunction()call myfunction()",
        c: "myFunction()",
        d: "All of the above",
        correct: "c",
    },
    {
        question: "How to write an IF statement in JavaScript?",
        a: "if i=5 then",
        b: "i==5",
        c: "if i=5",
        d: "if(i==5)",
        correct: "d",
    },
    {
        question: "How does a FOR loop start?",
        a: "for(var i =0; i< 10 ; i++)",
        b: "for(var i =0; i++)",
        c: "for(var i ;i<10 ; i++)",
        d: "(var i =0;i<10 ; i++)",
        correct: "a",
    },


];
const quiz= document.getElementById('quiz')
const answerE = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const Btn = document.getElementById('submit')
let Index = 0
let score = 0
StartQuiz()
function StartQuiz() {

    const currentQuiz = quizData[Index]
    question.innerText =Index+1+". "+ currentQuiz.question
    a_text.innerText = currentQuiz.a
    b_text.innerText = currentQuiz.b
    c_text.innerText = currentQuiz.c
    d_text.innerText = currentQuiz.d
}

function getSelected() {
    let answer
    answerE.forEach(answerEl => {

        if(answerEl.checked) {
          
            answer = answerEl.id
        
        }
    }
)
// Btn.style.display="inline"
    return answer
}
Btn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[Index].correct) {
        
           score++
       }
       Index++
       if(Index < quizData.length) {
           StartQuiz()
       } else {
        if(score>6){
           quiz.innerHTML =
            `<h1>Congratulaion!</h1>
           <h2>You answered  ${score} out of ${quizData.length} questions correctly</h2>
           <h2>You percentage is  ${(score*100)/quizData.length}%</h2>
           <button class="next" onclick="location.reload()">Restart</button>
           `}else{
            quiz.innerHTML =
            `<h1>You Failed!</h1>
           <h2>You answered  ${score} out of ${quizData.length} questions correctly</h2>
           <h2>You percentage is  ${(score*100)/quizData.length}%</h2>
           <button class="next" onclick="location.reload()">Restart</button>
           `
           }
       }
    }
})
