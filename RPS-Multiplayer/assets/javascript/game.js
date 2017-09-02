$(function() {
  //firebase configuration
  var config = {
    apiKey: "AIzaSyAcVcl1y0shRBWSwWTc8ev0WHeeIorBxDw",
    authDomain: "rpsgame-4b4a1.firebaseapp.com",
    databaseURL: "https://rpsgame-4b4a1.firebaseio.com",
    projectId: "rpsgame-4b4a1",
    storageBucket: "rpsgame-4b4a1.appspot.com",
    messagingSenderId: "582535674893"
  };
  firebase.initializeApp(config);

  var trainName = "";
  var trainDestination = "";
  var firstTime = "";
  var frequency = "";
  var nextAriv = "";
  var minAway = "";

  var database = firebase.database();

  var connectionsRef = database.ref("connections");
  var connectedRef = database.ref("info/connected");



  connectedRef.on("value", function(snap){
    if(snap.val()){
      var con = connectionsRef.push(true);
    }
    con.onDisconnect().remove();
  })

  connectionsRef.on("value", function(snap) {
    database.ref().on("child_added", function(childSnap) {
      console.log(childSnap.val());
      console.log(childSnap.val().trainName);
      console.log(childSnap.val().trainDestination);
      console.log(childSnap.val().firstTime);
      console.log(childSnap.val().frequency);
      console.log(childSnap.val().minTillTrain);
      console.log(childSnap.val().nextTrain);

      $("#newTrains").append("<tr><td>" + childSnap.val().trainName + "</td>" 
        + "<td>" + childSnap.val().trainDestination + "</td>" 
        //+ "<td>" + childSnap.val().firstTime + "</td>"
        + "<td>" + childSnap.val().frequency + "</td>"
       // + "<td>" + childSnap.val().minTillTrain + "</td>"
        + "<td>" + childSnap.val().nextTrain + "</td>"
        + "<td>" + childSnap.val().minTillTrain + "</td></tr>");
      return;
    });
  })

  console.log(moment().format("HH:MM"))

  $("#enter").on("click", function(event) {
    event.preventDefault();
    trainName = $("#trainName").val();
    console.log(trainName)
    trainDestination = $("#destination").val().trim();
    firstTime = $("#first").val().trim();
    frequency = $("#frequency").val().trim();


    var firstTimeConverted = moment(firstTime, "hh:mm");
    console.log(firstTimeConverted)

    var currentTime = moment();
    console.log(currentTime)
    var tDifference = moment().diff(moment(firstTimeConverted),"minutes");
    console.log(tDifference);
    var tRemainder = tDifference % frequency;
    console.log(tRemainder);
    var minTillTrain = frequency - tRemainder;
    console.log(minTillTrain);
    var nextTrain = moment().add(minTillTrain, "minutes");
    console.log(nextTrain)
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm a"));
    var arrival = moment(nextTrain).format("hh:mm a")

    database.ref().push({
      trainName: trainName,
      trainDestination: trainDestination,
      firstTime: firstTime,
      frequency: frequency,
      minTillTrain: minTillTrain,
      nextTrain: arrival
    });



    $("#trainName").val("");
    $("#destination").val("");
    $("#first").val("");
    $("#frequency").val("");
    
  });

 // database.ref().on("child_added", function(childSnap) {
    //  console.log(childSnap.val());
    //  console.log(childSnap.val().trainName);
    //  console.log(childSnap.val().trainDestination);
    //  console.log(childSnap.val().firstTime);
    //  console.log(childSnap.val().frequency);
    //  console.log(childSnap.val().minTillTrain);
    //  console.log(childSnap.val().nextTrain);
//
    //  $("#newTrains").append("<tr><td>" + childSnap.val().trainName + "</td>" 
    //    + "<td>" + childSnap.val().trainDestination + "</td>" 
    //    //+ "<td>" + childSnap.val().firstTime + "</td>"
    //    + "<td>" + childSnap.val().frequency + "</td>"
    //   // + "<td>" + childSnap.val().minTillTrain + "</td>"
    //    + "<td>" + childSnap.val().nextTrain + "</td>"
    //    + "<td>" + childSnap.val().minTillTrain + "</td></tr>");
    //  return;
    //});

});