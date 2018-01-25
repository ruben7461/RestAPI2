const mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: '',
	database: 'aplicacionandroid'
});


let userModel = {};

userModel.getUsers = (callback) => {
 if (connection) {
 	connection.query(
 		'SELECT nombre from tablausuarios',
 		(err, rows) => {
 			if (err) {
 				throw err;
 			}else{
 			callback(null, rows);
 			}
		 }
		 )
		}

	};


userModel.insertUser = (userData, callback) =>{
// 
	// if(connection){
		// connection.query('INSERT INTO tablausuarios() VALUES)
	// }
}
	module.exports = userModel;
