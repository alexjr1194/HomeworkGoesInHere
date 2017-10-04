var fs = require('fs');

function ClozedCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.clozeDelete = this.text.replace(this.cloze, '_____');
  this.create = function() {
    var data = {
      text: this.text,
      cloze: this.cloze,
      clozeDelete: this.clozeDelete,
      type:'cloze'
    };
    fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
      // if there is an error, log the error
      if (error) {
          console.log(error);
      }
    });
  }
};
module.exports = ClozedCard;