var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Cl@mariji1',
    database : 'bamazonDB'
  });
   
//   connection.connect();
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
 
});
 

 listProducts();


function listProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
     console.log("\nID   INSTRUMENT      PRICE");
     console.log("_________________________________\n")
     for (var i = 0; i < res.length; i++) {
       console.log(res[i].id + " | " + res[i].prod_name + " |  $  " + res[i].price + " | ");
       console.log("_________________________________\n")
     }
     inquireCustomer(res);
   });
 
 };

function inquireCustomer(res) {
  
  inquirer
    .prompt([
    {
      name: "id",
      type: "input",
      message: "What is the ID number of the product you would like to buy?"
    },
    {
      name: "quantity",
      type: "input",
      message: "How many instruments would you like to buy?"
    },
    ])
    .then(function(answer) {
      console.log("input: ", answer);
      
      connection.query("SELECT * FROM products WHERE ?",{id: answer.id}, function(err, res) {
               
        if (res[0].quantity >= answer.quantity){
          console.log("Your order has been filled successfully!");
          console.log("Instrument: ", res[0].prod_name);
          console.log("quantity: ", answer.quantity);
          total = (answer.quantity * res[0].price);
          console.log("total to pay is: $ " + total);
          var remainingProd = res[0].quantity - answer.quantity;
          console.log("remaining = " + remainingProd);
          updateInventory(answer, remainingProd);
          
        }
        else{
          console.log("Sorry, we don't have the amount of items you are requesting")
        }
        connection.end();
      });
      
      });
      
};

var leftProd = 0;
function updateInventory(answer, leftProd ) {
  console.log("Updating product quantities...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: leftProd
      },
      {
        id: answer.id
      }
    ],
    function(err, res) {
      console.log("quantity has been updated\n");
     
    }
  );
  // logs the actual query being run
  console.log("query: ", query.sql);
};




  

  


