var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'bamazon'
});

connection.connect(function(err) {
  if (err) throw err;
  start();
})
function start() {
  //query for that will select all the products inside of bamazon database
  var query = 'SELECT * FROM products';
  //making connection with database 
  connection.query(query, function(error, results, fields){
    if (error) throw error;
    //loop that will go through results and then will console.log information of items for the user
    for(var i = 0; i < results.length; i++){
      console.log('------------------------- \nItem ID: ' + results[i].item_id + '\nItem Name: ' + results[i].product_name
        + '\nDepartment: ' + results[i].department_name + '\nPrice: ' + results[i].price + '\nQuantity: ' + results[i].stock_quantity + '\n-------------------------');
    }
    buyItem();
  });
}

  function buyItem() {
    var query = "SELECT * FROM products";
    var item = [];
    connection.query(query, function(error, results, fields) {
      for(var i = 0; i < results.length; i++) {
        item.push(results[i].product_name);
      }

      inquirer
        .prompt([
          {
            name: 'choose',
            type: 'list',
            message: 'Welcome to Bamazon! :) \nWhat Item would you like to buy today?',
            choices: item
          },
          {
            name: 'quantity',
            type: 'input',
            message: 'How many would you like to buy',
            validate: function(input) {
              if (input === '') {
                console.log('Please provide a number for quantity!');
                return false;
              }
              else{
                return true;
              }
            }
          }
        ]).then(function(answer){

          for (var i = 0; i < results.length; i ++) {
            if (answer.choose === results[i].product_name) {
              let newQuantity = results[i].stock_quantity - answer.quantity;

              connection.query(
                'UPDATE products SET ? WHERE ?',
                [
                {
                  stock_quantity: newQuantity
                },
                {
                  product_name: answer.choose
                }
                ]
              );

            if (results[i].stock_quantity < answer.quantity) {
              console.log('So Sorry It Looks Like We Dont Have Enough Of That Item!')
              buyItem();
            }
            else{
              var amount = results[i].price * answer.quantity;
              console.log('You just spent $' + amount + '')
              whatnext();
            }
            }

          }

          console.log(answer.choose, answer.quantity);
          
        })
    });
      
  }


  function whatnext() {
    inquirer
      .prompt([
          {
            name: 'next',
            type: 'list',
            message: 'What would you like to do next',
            choices: [
              'Buy More',
              'Exit'
            ]
          }
        ]).then(function(answer) {
          switch(answer.next) {
            case 'Buy More':
              start();
              break;
            case 'Exit':
              connection.end();
              console.log('------------------------- \nPleasure doing bussiness with you! Do come again! \n-------------------------');
              break;

          }
        })
  }