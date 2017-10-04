var inquirer = require('inquirer');
var BasicCard = require('./BasicCard.js');
var ClozedCard = require('./ClozeCard.js')
var fs = require('fs');

inquirer.prompt([
  {
    name: 'command',
    message: 'What would you like to do?',
    type: 'list',
    choices: [
      {
        name:'add-flashcard'
      },
      {
        name: 'show-all-cards'
      }
    ]
  }
]).then(function(answer) {
  if (answer.command === 'add-flashcard') {
    addCard();
  }
  if (answer.command === 'show-all-cards') {
    showCards();
  }
})

function addCard() {
  inquirer.prompt([
    {
      name: 'cardType',
      message: 'What kind of flashcard would you like to make?',
      type: 'list',
      choices: [
        {
          name: 'basic-flashcard'
        },
        {
          name: 'cloze-flashcard'
        }
      ]
    }
  ]).then(function(answer){
    if (answer.cardType === 'basic-flashcard') {
      inquirer.prompt([
          {
            name: 'front',
            message: 'What is the question?',
            validate: function(input) {
              if (input === '') {
                console.log('Please provide a question!')
                return false;
              }
              else {
                return true;
              }
            }
          }, {
            name: 'back',
            message: 'What is the answer?',
            validate: function(input) {
              if (input === '') {
                console.log('Please provide a answer!');
                return false;
              }
              else{
                return true;
              }
            }
          }
        ]).then(function(answer) {
          var newBasic = new BasicCard(answer.front, answer.back);
          newBasic.create();
          nowWhat();
        })
    }
    else if(answer.cardType === 'cloze-flashcard') {
      inquirer.prompt([
          {
            name: 'text',
            message: 'What is the full text?',
            validate: function(input) {
              if (input === '') {
                console.log('Please provide the full text!')
                return false;
              }
              else{
                return true;
              }
            }
          },
          {
            name: 'cloze',
            message: 'What is the portion you would like to cloze?',
            validate: function(input) {
              if (input === '') {
                console.log('Please provide the portion you would like to cloze!');
                return false;
              }
              else{
                return true;
              }
            }
          }
        ]).then(function(answer) {
          var text = answer.text;
          var cloze = answer.cloze;
          if (text.includes(cloze)) {
            var newCloze = new ClozedCard(text, cloze);
            newCloze.create();
            nowWhat();
          }
          else{
            console.log("The cloze portion you provided is not found in the full text! Please try again!")
            addCard();
          }
        })
    }
  })
}
function nowWhat() {
    // get user input
    inquirer.prompt([{
        name: 'nextAction',
        message: 'What would you like to do next?',
        type: 'list',
        choices: [{
            name: 'create-new-card'
        }, {
            name: 'show-all-cards'
        }, {
            name: 'nothing'
        }]
    // once user input is received
    }]).then(function(answer) {
        if (answer.nextAction === 'create-new-card') {
            addCard();
        } else if (answer.nextAction === 'show-all-cards') {
            showCards();
        } else if (answer.nextAction === 'nothing') {
            return;
        }
    });
};

function showCards() {
    // read the log.txt file
    fs.readFile('./log.txt', 'utf8', function(error, data) {
        //if there is an error, log it
        if (error) {
          console.log('Error occurred: ' + error);
        }

        var questions = data.split(';');

        function notBlank(value) {
          return value;
        };

        questions = questions.filter(notBlank);
        var count = 0;
        showQuestion(questions, count);
    });
};

var showQuestion = function(array, index) {
  question = array[index];

  var parsedQuestion = JSON.parse(question);
  var questionText;
  var correctReponse;
  if (parsedQuestion.type === 'basic') {
      questionText = parsedQuestion.front;
      correctReponse = parsedQuestion.back;
  } else if (parsedQuestion.type === 'cloze') {
      questionText = parsedQuestion.clozeDelete;
      correctReponse = parsedQuestion.cloze;
  }
  inquirer.prompt([{
      name: 'response',
      message: questionText
  }]).then(function(answer) {
      if (answer.response === correctReponse) {
          console.log('Correct!');
          if (index < array.length - 1) {
            showQuestion(array, index + 1);
          }
      } else {
          console.log('Wrong!');
          if (index < array.length - 1) {
            showQuestion(array, index + 1);
          }
      }
  });
};