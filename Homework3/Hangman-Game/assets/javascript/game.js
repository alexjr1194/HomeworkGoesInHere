$(function(){
  var wordLibrary = [
    ["PANDA","JAGUAR", "SEALION"],
    ['BUGGATI']
    
    ];

  var randomWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
  console.log(randomWord);
  var hiddenWord = "";

  function renderRanWor() {

    for (var i = 0; i < randomWord.length; i++) {
        randomWord = "_ ";
        console.log(randomWord);
      }
    document.getElementById('word').innerHTML= hiddenWord;
    };  
    renderRanWor();
      console.log(renderRanWor());
})


wordLibrary[0]