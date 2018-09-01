'use strict';

let questionNumber = state.currentQuestion;
let userScore = state.score;
const totalQuestions = state.questions.length;
const container__selector = $('.container');

function questionForm(questions, userScore, questionNumber){
  const question = state.questions[questionNumber-1];
  return `
    <main role="main" class="question-page">
      <div role="group" class="quiz-status">
        <span class="quiz-question-count">Question: ${questionNumber}/${totalQuestions}</span>
        <span class="quiz-status-score">Score: ${userScore}/${questionNumber-1}</span>
      </div>
    
      <form role="form" class="question-form flex-columns" accept-charset="utf-8">
        <fieldset class="question-answer-field">
          <legend class="question-heading">${question.title}</legend>
          ${question.answers.map((answer,index) => appendAnswers(answer,index)).join(" ")}
        </fieldset>
        <button role="button" type="submit" class="submit-answer button__highlight js-submit-button">Submit Answer</button>
      </form>
    </main>`;
}

function appendAnswers(answer, index){
    return `
      <label for="option_${index}" class="box box__answer">
        <input id="option_${index}" type="radio" name="answer" value="${index}" ariadescribeby="answer_${index}" required> 
        <span id="answer_${index}" class="question-text">${answer}</span>
      </label>
        `;
}

function handleStartButton(){
  $('.js-start-button').click(function(event){
    renderQuestions();
  });
}

function renderQuestions(){
  const questions = state.questions;
  container__selector.html(questionForm(questions, userScore, questionNumber));
  highlightSelectedAnswer();
}

function highlightSelectedAnswer(){
    container__selector.on('click', ':radio', function(event) {
        $(this).closest("label").addClass("active").
        siblings("label.active").removeClass("active");
      });
}

function handleSubmitButton(){
  container__selector.on('submit', function(event){
    event.preventDefault();

    const answer = parseInt($('input:checked').attr('value'));
    const correct = state.questions[questionNumber-1].correctAnswer;
    
    if (answer === correct){
      userScore++;
      feedback(`Praise the Gods! You're correct.`, `src="https://i.giphy.com/media/1tGN00iMCj3Mc/200w.webp" alt="Renly Baratheon clapping his hands in excitement" class="response-img"`, correct);
    }else {
      feedback(`For the night is dark and full of terrors. You're Wrong!`, `src="https://i.giphy.com/media/iU7QUbHXVsS2s/giphy.webp" alt="Sam Tarly shaking his head no" class="response-img"`, correct);
    };
  });
}

function feedback(text, img, correct){
  container__selector.html(`
  <section role="region" class="feedback flex-columns">
    <h2 class="response-heading text__highlight">${text}</h2>
    <p class="response-description score__highlight">Score: ${userScore}/${questionNumber}</p>
    <img ${img}>
    <p class="response-description text__highlight">Correct answer:<span class="show-correct-answer"> "${state.questions[questionNumber-1].answers[correct]}"</span></p>
    <button role="button" type="submit" role="button" class="next-question button button__highlight js-next-button">Next Question</button>
  </section>`);
}

function handleNextQuestion(){
  container__selector.on('click', '.js-next-button', function(event){
    questionNumber++;

    if((questionNumber > totalQuestions) && (userScore > 5)){
      renderResults(userScore, 'Good job!', `src="https://i.giphy.com/media/1tGN00iMCj3Mc/200w.webp" alt="Renly Baratheon clapping his hands in excitement"`);
    }else if(questionNumber > totalQuestions){
      renderResults(userScore, `You lack honor!`, `src="https://media1.tenor.com/images/65da12acb559199da0a02362e2295463/tenor.gif?itemid=5888157"
      alt="shame"`);
    }else {
    renderQuestions();
    }
  });
}

function renderResults(score, text, img) {
    container__selector.html(`
      <section role="region" class="results-page flex-columns">
        <p class="results-display score__highlight">${text}! You scored ${score} out of 10</p>
        <img ${img} class="results-img">
        <button role="button" class="restart button button__highlight js-restart-button">Restart Quiz</button>
      </section>`);
}

function handleRestartButton(){
  container__selector.on('click', '.js-restart-button', function(event){
    questionNumber = 1;
    userScore = 0;
    renderQuestions();    
  });
}

function handleButtons(){
  handleStartButton();
  handleSubmitButton();
  handleNextQuestion();
  handleRestartButton();
}

handleButtons();