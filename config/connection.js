// Set up MySQL connection.
const mysql = require('mysql');

const connection;
if(process.env.JAWSDB_URL){
  mysql.createConnection(process.env.JAWSDB_URL)
}
else{
mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  // NOTE: Be sure to add your MySQL password here!
  password: 'mimi2131!!',
  database: 'burgers_db',
});
};

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;