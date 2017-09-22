var keys = require('./keys.js');
var spotifyKeys = require('./spotifyKeys.js')
//var inquirer = require('inquirer');
//
var args = process.argv;
var command = args[2];
var search = args[3];

//Working function that will get tweets and times stamp for tweets
function getTweet(){
  var params = {screen_name: 'alexUCBCoding', count: 20};
  keys.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        for(var tweet in tweets) {
          console.log(tweets[tweet].text);
          console.log(tweets[tweet].created_at);
        };
    } 
    else {
        throw error;
    }
});
}

//working function that will get 5 songs from spotify related to what the user inputs into search.
function spotifySong() {
  spotifyKeys.search({ type: 'track', query: search, limit: 5}, function(error, data) {
    //if there is a error let the user know an error occured and what that error is
    if (error) {
      return console.log('Error occured: ' + error);
    }
    // variable storing path to information needed
    var data = data.tracks.items;
    //for loop looping through arrays in data
    for(var index = 0; index < data.length; index++) {
      //logging artist for each song found for the user
      console.log(data[index].artists[0].name);
      //loging song name of songs found for the user
      console.log(data[index].name);
      //logging url to spotify for song for user
      console.log(data[index].external_urls.spotify);
      //logging the name of the album for user
      console.log(data[index].album.name);
    }
  });
}

//if command is equal to 'my-tweets'
if (command === "my-tweets") {
  //get my tweets
  getTweet();
}

//if command is equal to 'spotify this song' then
if (command === "spotify-this-song"){
  //Telling the user we found songs related to what they input
  console.log("Here are the songs I found related to " + search);
  //execute spotifySongs function
  spotifySong();
}