$(function() {
  //index for what question the users on
  var qIndex = 0;
  //var storing how many correct answers the user has 
  var correct = 0;
  //var storing how many wrong answers the user has
  var wrong = 0;

  $("#restart").hide();
  $(".choices").hide();




  //questions
  var q1 = {
    question: "Which country won the most gold medals in the 2016 Olympics?",
    choices: ["USA", "Brazil", "Germany", "Japan"],
    answer: "USA"
  };
  //questions
  var q2 = {
    question: "What is the fastest car in the world?",
    choices: ["Saleen S7 Twin Turbo", "Bugatti Chiron", "SSC Ultimate Aero", "Hennessey Venom GT"],
    answer: "Hennessey Venom GT"
  };
  //questions
  var q3 ={
    question: "What is the most widely eaten fish in the world?",
    choices: ["Tuna", "Trout", "Herring", "Snapper"],
    answer: "Herring"
  }
  //questions
  var q4 ={
    question: "What nation produces two thirds of the world's vanilla?",
    choices: ["Mexico", "Indonesia", "China", "Madagascar"],
    answer: "Madagascar"
  }
  //questions
  var q5 ={
    question: "What fish produces real caviar according to the FDA?",
    choices: ["Tuna", "Stergeon", "Herring", "Salmon"],
    answer: "Stergeon"
  }
  //questions
  var q6 = {
    question: "Who averaged one patent for every three weeks of his life?",
    choices: ["Steve Jobs", "Nikola Tesla", "Bill Gates", "Thomas Edison"],
    answer: "Thomas Edison"
  }












  //array for all the questions
  var questionsArray = [q1, q2, q3, q4, q5, q6]

 















  //fucntion that will render out the question and the choices
  function renderQuestion() {
    if (qIndex === 0) {
      $(".question").html(questionsArray[qIndex].question);
      $("#choice1").html("<h4>" + questionsArray[qIndex].choices[0] + "</h4>");
      $("#choice2").html("<h4>" + questionsArray[qIndex].choices[1] + "</h4>");
      $("#choice3").html("<h4>" + questionsArray[qIndex].choices[2] + "</h4>");
      $("#choice4").html("<h4>" + questionsArray[qIndex].choices[3] + "</h4>");
    };
    if (qIndex === 1) {
      $(".question").html(questionsArray[qIndex].question);
      $("#choice1").html("<h4>" + questionsArray[qIndex].choices[0] + "</h4>");
      $("#choice2").html("<h4>" + questionsArray[qIndex].choices[1] + "</h4>");
      $("#choice3").html("<h4>" + questionsArray[qIndex].choices[2] + "</h4>");
      $("#choice4").html("<h4>" + questionsArray[qIndex].choices[3] + "</h4>");
    };
    if (qIndex === 2) {
      $(".question").html(questionsArray[qIndex].question);
      $("#choice1").html("<h4>" + questionsArray[qIndex].choices[0] + "</h4>");
      $("#choice2").html("<h4>" + questionsArray[qIndex].choices[1] + "</h4>");
      $("#choice3").html("<h4>" + questionsArray[qIndex].choices[2] + "</h4>");
      $("#choice4").html("<h4>" + questionsArray[qIndex].choices[3] + "</h4>");
    };
    if (qIndex === 3) {
      $(".question").html(questionsArray[qIndex].question);
      $("#choice1").html("<h4>" + questionsArray[qIndex].choices[0] + "</h4>");
      $("#choice2").html("<h4>" + questionsArray[qIndex].choices[1] + "</h4>");
      $("#choice3").html("<h4>" + questionsArray[qIndex].choices[2] + "</h4>");
      $("#choice4").html("<h4>" + questionsArray[qIndex].choices[3] + "</h4>");
    };
    if (qIndex === 4) {
      $(".question").html(questionsArray[qIndex].question);
      $("#choice1").html("<h4>" + questionsArray[qIndex].choices[0] + "</h4>");
      $("#choice2").html("<h4>" + questionsArray[qIndex].choices[1] + "</h4>");
      $("#choice3").html("<h4>" + questionsArray[qIndex].choices[2] + "</h4>");
      $("#choice4").html("<h4>" + questionsArray[qIndex].choices[3] + "</h4>");
    };
    if (qIndex === 5) {
      $(".question").html(questionsArray[qIndex].question);
      $("#choice1").html("<h4>" + questionsArray[qIndex].choices[0] + "</h4>");
      $("#choice2").html("<h4>" + questionsArray[qIndex].choices[1] + "</h4>");
      $("#choice3").html("<h4>" + questionsArray[qIndex].choices[2] + "</h4>");
      $("#choice4").html("<h4>" + questionsArray[qIndex].choices[3] + "</h4>");
    };
  };
 



//function stopGame() {
  if (qIndex > questionsArray.length) {
    alert("You're all done! Check your score bellow!!");
    $(".question").html("<h2>Correct: " + correct + "</h2>" + "<h2> Wrong:" + wrong + "</h2>");
    $(".answer").empty();
    $(".time").empty();
  }










  //function that will set button choice values
  function setButtonVal() {
    if (qIndex === 0) {
      $("#choice1").val(questionsArray[qIndex].choices[0]);
      $("#choice2").val(questionsArray[qIndex].choices[1]);
      $("#choice3").val(questionsArray[qIndex].choices[2]);
      $("#choice4").val(questionsArray[qIndex].choices[3]);
    }
    if (qIndex === 1) {
      $("#choice1").val(questionsArray[qIndex].choices[0]);
      $("#choice2").val(questionsArray[qIndex].choices[1]);
      $("#choice3").val(questionsArray[qIndex].choices[2]);
      $("#choice4").val(questionsArray[qIndex].choices[3]);
    }
    if (qIndex === 2) {
      $("#choice1").val(questionsArray[qIndex].choices[0]);
      $("#choice2").val(questionsArray[qIndex].choices[1]);
      $("#choice3").val(questionsArray[qIndex].choices[2]);
      $("#choice4").val(questionsArray[qIndex].choices[3]);
    }
    if (qIndex === 3) {
      $("#choice1").val(questionsArray[qIndex].choices[0]);
      $("#choice2").val(questionsArray[qIndex].choices[1]);
      $("#choice3").val(questionsArray[qIndex].choices[2]);
      $("#choice4").val(questionsArray[qIndex].choices[3]);
    }
    if (qIndex === 4) {
      $("#choice1").val(questionsArray[qIndex].choices[0]);
      $("#choice2").val(questionsArray[qIndex].choices[1]);
      $("#choice3").val(questionsArray[qIndex].choices[2]);
      $("#choice4").val(questionsArray[qIndex].choices[3]);
    }
    if (qIndex === 5) {
      $("#choice1").val(questionsArray[qIndex].choices[0]);
      $("#choice2").val(questionsArray[qIndex].choices[1]);
      $("#choice3").val(questionsArray[qIndex].choices[2]);
      $("#choice4").val(questionsArray[qIndex].choices[3]);
    }
  }




  //function for when the user gets the answer wrong
  function correctAns() {
    correct++
    qIndex++
    timer.reset();
    alert("You chose the correct answer!!!!! :)");
  }




  //function for when the user gets the answer wrong
  function wrongAns() {
    qIndex++
    wrong++
    timer.reset();
    alert("You chose the wrong answer!! :(");
  }










  //on click function for when the user clicks on choice1
  $("#choice1").on("click", function() {
    if ($("#choice1").val() === questionsArray[qIndex].answer) {
      correctAns();
    }
    else{
      wrongAns();
    }
  })
  //on click function for when the user clicks on choice2
  $("#choice2").on("click", function() {
    if ($("#choice2").val() === questionsArray[qIndex].answer) {
      correctAns();
    }
    else{
      wrongAns();
    }
  })
  //on click function for when the user clicks on choice3
  $("#choice3").on("click", function() {
    if ($("#choice3").val() === questionsArray[qIndex].answer) {
     correctAns();
    }
    else{
     wrongAns();
    }
  })
  //on click function for when the user clicks on choice4
  $("#choice4").on("click", function() {
    if ($("#choice4").val() === questionsArray[qIndex].answer) {
     correctAns();
    }
    else{
      wrongAns();
    }
  })














  //function to render Time
  function renderTime() {
    $(".time").html("<h3>" + timer.time + " seconds remaining!</h3>")
  }




















  //variable storing the timer functions 
  var timer = {
    time: 10,

    reset: function(){
      timer.time = 10;
      $(".time").html("<h3>" + timer.time + " seconds remaining!</h3>")
      renderQuestion();
      setButtonVal();
    },

    stop: function() {
      clearInterval(counter);
    },

    start: function() {
      counter = setInterval(timer.count, 1000);  
      renderTime();
      renderQuestion();
      setButtonVal();
    },

    count: function() {
      if (qIndex <= questionsArray.length) {
        timer.time--;
        if (timer.time >= 0) {
          renderTime();
        };
        if (timer.time < 0) {
          qIndex ++;
          wrong ++;
          timer.reset();
          alert("times up!");         
        };
        if (qIndex >= questionsArray.length) {
          timer.stop();
          $("#restart").show();
          $(".question").html("<h2>Correct: " + correct + "</h2>" + "<h2> Wrong:" + wrong + "</h2>");
          $(".choices").hide();
          $(".time").empty();
          alert("You're all done! Check your score bellow!!"); 

        };
      }
   }
  };




















  //funcion for when the user clicks on the restart button
  $("#restart").on("click", function() {
    $("#restart").hide();
    $(".choices").show();
    qIndex = 0;
    timer.reset();
    timer.start();
  });



  //function for when start is clicked
  $("#start").on("click", function(){
    timer.start();
    $("#start").hide();
    $(".choices").show();
  });

  

});