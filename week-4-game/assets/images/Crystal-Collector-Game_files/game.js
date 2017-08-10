$ (function() {
  //var that will store a random number from 19-120 
  var randomNum = Math.floor(Math.random() * 101) + 19;
  console.log(randomNum);

  //renders out a random number
  $("#randomNum").html(randomNum);

  //vars that will store a random number from 1-12 
  var val1 = Math.floor(Math.random() * 11 + 1);
  var val2 = Math.floor(Math.random() * 11 + 1);
  var val3 = Math.floor(Math.random() * 11 + 1);
  var val4 = Math.floor(Math.random() * 11 + 1);
  console.log(val1);
  console.log(val2);
  console.log(val3);
  console.log(val4);

  //var that stores the users total
  var userTotal = 0;

  //vars that will store how many time the users won and lost
  var win = 0;
  var losses = 0;

  //Renders wins and losses
  $("#win").html("Wins: " +win);
  $("#losses").html("Losses: " +losses);

  //function that resets the game
  function reset() {
    var randomNum = Math.floor(Math.random() * 101) + 19;
    $("#randomNum").html(randomNum);
    val1 = Math.floor(Math.random() * 11 + 1);
    val2 = Math.floor(Math.random() * 11 + 1);
    val3 = Math.floor(Math.random() * 11 + 1);
    val4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $("#score").html(userTotal);
  }
  console.log(reset());

  //function that will alert he user if they won and will add a +1 to win and then renders it.
  function youWin() {
    alert("You Won!");
    win++;
    $("#win").html("Wins: " +win);
    reset();
  }
  //youWin();

  // function that will alert the user if the lost and will add a +1 to losses and then renders it
  function youLoose() {
    alert("You Lost");
    losses++;
    $("#losses").html("Losses: " +losses);
    reset();
  }

  //onclick function for the first crystal1
  $("#crystal1").on("click", function() {
    userTotal = userTotal + val1;
    $("#score").html(userTotal);
    if (userTotal === randomNum) {
      youWin();
    }
    else if (userTotal > randomNum) {
      youLoose();
    }
  });

  //onclick function for the first crystal2
  $("#crystal2").on("click", function() {
    userTotal = userTotal + val2;
    $("#score").html(userTotal);
    if (userTotal === randomNum) {
      youWin();
    }
    else if (userTotal > randomNum) {
      youLoose();
    }
  });

  //onclick function for the first crystal3
  $("#crystal3").on("click", function() {
    userTotal = userTotal + val3;
    $("#score").html(userTotal);
    if (userTotal === randomNum) {
      youWin();
    }
    else if (userTotal > randomNum) {
      youLoose();
    }
  });

  //onclick function for the first crystal4
  $("#crystal4").on("click", function() {
    userTotal = userTotal + val4;
    $("#score").html(userTotal);
    if (userTotal === randomNum) {
      youWin();
    }
    else if (userTotal > randomNum) {
      youLoose();
    }
  });

}); // end of .ready fucntio to 