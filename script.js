var questions = [];


if (localStorage.getItem('questions')) {
    questions = JSON.parse(localStorage.getItem('questions'));
}

function askQuestion() {
    var questionInput = document.getElementById('question');
    
 
    var questionText = questionInput.value;

    questions.push({ question: questionText, answer: null });

 
    localStorage.setItem('questions', JSON.stringify(questions));

 
    questionInput.value = '';


    displayQuestions();
}

function answerQuestion(index) {
    var responseInput = document.getElementById('responseInput_' + index);


    var responseText = responseInput.value;


    questions[index].answer = responseText;


    localStorage.setItem('questions', JSON.stringify(questions));


    responseInput.value = '';

    displayQuestions();
}

function displayQuestions() {
    var questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = '';


    questions.forEach(function (item, index) {
        var div = document.createElement('div');
        div.classList.add('question-item');
        div.innerHTML = `<p><strong>Pergunta:</strong> ${item.question}</p>`;

    
        if (item.answer === null) {
            div.innerHTML += `
                <div class="answer-bar">
                    <input type="text" id="responseInput_${index}" class="response-input" placeholder="Responda...">
                    <button onclick="answerQuestion(${index})" class="response-button">Responder</button>
                </div>`;
        } else {
   
            div.innerHTML += `<p><strong>Resposta:</strong> ${item.answer}</p>`;
        }

        questionContainer.appendChild(div);
    });
}
