$(function() {
  var topics = ["How High", "Dogs", "Game of Thrones", "Nissan GTR"];
  var apiKey = "&api_key=23e73ab089ef4711a0dcb870c70b2f5c&limit=10";
  var url = "http://api.giphy.com/v1/gifs/search?q=";
  //var 
  console.log($("#search").val());

  //function that will render the buttons 
  function renderButtons() {
        $("#button-view").empty();
        for (var i = 0; i < topics.length; i++) {
          var button = $("<button>");
          button.addClass("topics");
          button.attr("data-name", topics[i]);
          button.html(topics[i]);
          $("#button-view").append(button);
        }
      };
      console.log(renderButtons());




  //function that will display gifs in the gid-view div
  function displayGif() {
    var topic = $(this).attr("data-name");
    console.log(topic);
    var queryURL = url + topic + apiKey;
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      var results = response.data;
      console.log(results)

      //for loop that will run for the length of results
      for (var i = 0; i < results.length; i++) {

        //variable storing new gif tagw with the class item
        var gifDiv = $("<div class='items'>");

        //variable storing the raiting of the gif        
        var rating = results[i].rating;


        //variable storing a p tag with the rating of the gif
        var p = $("<p>").text("Rating: " + rating);

        //variable storing new img tag
        var gifImage = $("<img class='gifs'>");

        //setting src attr for gif 
        gifImage.attr("src", results[i].images.fixed_height_still.url);

        gifImage.attr("data-state", "still");
        gifImage.attr("data-still", results[i].images.fixed_height_still.url);
        gifImage.attr("data-animate", results[i].images.fixed_height.url);


        gifDiv.prepend(p);
        gifDiv.prepend(gifImage);
        console.log(gifImage)

        $("#gif-view").prepend(gifDiv);
      };
    });
  }

  //onclick function that will push the value of #search into the topics array and will render the new topic as a button
  $("#addButton").on("click", function(event) {
    event.preventDefault();
    topics.push($("#search").val());
    renderButtons();
  });

  //eventlistener for when a button with the class of topics is clicked will display gifs
  $(document).on("click", ".topics", displayGif);


  function stopStart() {
    //variable storing the state the gif is in
    var state = $(this).attr("data-state");
    console.log(state);

    if (state === "still") {
      var url = $(this).attr("data-animate");
      $(this).attr("src", url);
      $(this).attr("data-state", "animate");
    }
    

    else {
      var url = $(this).attr("data-still");
      $(this).attr("src", url);
      $(this).attr("data-state", "still");
    }


  };
  //event listener for when a gif is clicked
  $(document).on("click", ".gifs", stopStart);

});