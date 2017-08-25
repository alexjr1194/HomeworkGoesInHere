$(function() {
  var topics = ["How High", "Dogs", "Game of Thrones", "Nissan GTR"];
  var apiKey = "&api_key=23e73ab089ef4711a0dcb870c70b2f5c";
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
  //function renderGif() {


  //}

  //onclick function that will push the value of #search into the topics array and will render the new topic as a button
  $("#addButton").on("click", function(event) {
    event.preventDefault();
    topics.push($("#search").val());
    renderButtons();
  });

  //onclick function for when the topics button is clicked that will display gifs
  $(".topics").on("click", function() {
    console.log($(this).val())
  });

});