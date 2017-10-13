var keys = require('./keys.js');
var spotifyKeys = require('./spotifyKeys.js');
var fs = require('fs');
var request = require('request');

var args = process.argv;
var command = args[2];

console.log(process.argv);

// Working function that will get tweets and times stamp for tweets
function getTweet () {
  var params = {screen_name: 'alexUCBCoding', count: 20};
  keys.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      for (var i in tweets) {
        console.log('\n-------------' + '\nTweet: ' + tweets[i].text + '\nTime created:' + tweets[i].created_at + '\n-------------');
      }

      fs.appendFile('log.txt', command + ', ', function (error) {
        if (error) {
          console.log('\nAn error occured: ' + error)
        }
        console.log("\n-------------\nLogs have been updated.\n-------------\n");
      });
    }
    else {
        throw error;
    }
});
}

//working function that will get 5 songs from spotify related to what the user inputs into search.
function spotifySong(search) {
  spotifyKeys.search({ type: 'track', query: search, limit: 5}, function(error, data) {
    //if there is a error let the user know an error occured and what that error is
    if (error) {
      return console.log('\n-------------\nError occured: ' + error);
    }
    // variable storing path to information needed
    var data = data.tracks.items;
    //for loop looping through arrays in data
    for(var index = 0; index < data.length; index++) {
      //logging artist,song name, song url, album name for each song found for the user
      console.log('\n-------------' + '\nArtist: ' + data[index].artists[0].name + "\nSong Name: " + data[index].name + '\nSong URL: ' +
        data[index].external_urls.spotify + '\nAlbum Name: ' + data[index].album.name + '\n-------------\n');
    }
    fs.appendFile('log.txt', command + ' ' + search + ', ', function(error) {
      if(error){
        console.log('\nAn error occured: ' + error)
      }
      console.log("\n-------------\nLogs have been updated.\n-------------\n");
    });
  });

}


function movieThis(movieSearch){

  request('http://www.omdbapi.com/?t=' + movieSearch + '&tomotoes=true&apikey=40e9cece', function(error, response, body){
    var body = JSON.parse(body);
    //console.log(response.statusCode)
    if(error || response.statusCode !== 200){
      movieSearch = "Mr Nobody";
      console.log(movieSearch)
      //console.log(JSON.parse(body));
    }
    else{
      if (!body.Title && !body.Released && !body.imdbRating && !body.Ratings) {
        console.log('\n-------------\nAn error occured: Movie was not found!\n-------------');
      }
      else{
        console.log('\n-------------\nMovie Name: ' + body.Title + '\nYear: ' + body.Year + '\nIMDB Rating: ' + body.imdbRating +
        '\nRotten Tomatoes Raiting: ' + body.Ratings[1].Value + '\nCountry: ' + body.Country + '\nLanguage: ' + body.Language +
        '\nPlot: ' + body.Plot + '\nActors: ' + body.Actors + '\n-------------');
      }
  }
  });
    fs.appendFile('log.txt', command + ' ' + movieSearch + ', ', function(error) {
      if(error){
        console.log('\nAn error occured: ' + error)
      }
      console.log("\n-------------\nLogs have been updated.\n-------------\n");
    });
}

function doThis(){
  var command2 = '';
  var query = '';
  fs.readFile('random.txt', 'utf8', function(error, data) {
    if(error){
      return console.log('Error occurred: ' + error);
    }
    var data = data.split(',');
    command2 = data[0]
    query = data[1]

    if (command2 === 'spotify-this-song') {
      spotifySong(query)
    }
  });
    fs.appendFile('log.txt', command + ', ', function(error) {
      if(error){
        console.log('\nAn error occured: ' + error)
      }
      console.log("\n-------------\nLogs have been updated.\n-------------\n");
    });
}

//if command is equal to 'my-tweets'
if (command === "my-tweets") {
  console.log('\n-------------\nHere are you the latest 20 tweets you posted!\n-------------')
  //get my tweets
  getTweet();

}

//if command is equal to 'spotify this song' then
if (command === "spotify-this-song"){
  var search = args.slice(3).join(' ');
  if(!search){
   search = "The Sign Ace of Base";
  }
  //console.log(search);

  //Telling the user we found songs related to what they input
  console.log("\n-------------\nHere are the songs I found related to " + search + '\n-------------');
  //execute spotifySongs function
  spotifySong(search);
}

if (command === 'movie-this') {
  var movieSearch = args.slice(3).join(' ');
  if (!movieSearch) {
     movieSearch = 'Mr Nobody';
  }

  console.log('\n-------------\nHere are the movies I found related to ' + movieSearch + '\n-------------');
  movieThis(movieSearch);
}

if(command === 'do-what-it-says'){
  console.log('\n-------------\nI fallowed orders! \n-------------')
  doThis();
}
