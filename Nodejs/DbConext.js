var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database:"dbtest"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  //var query = "CREATE DATABASE demo"
//   con.query(query, function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//    }); port: 33060,
    
//   con.end(function(err) {expo init AwesomeProject
//     if (err) throw err;
//     console.log("Closed!");
//   });
  module.exports = con; 