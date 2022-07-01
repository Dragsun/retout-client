const mysql = require('mysql');
const $ = require('jquery');

// Add the credentials to access your database
const connection = mysql.createConnection({
    host     : '127.0.0.1',
	port	 : '3306',
    user     : 'root',
    password : '', // or the original password : 'apaswword'
    database : 'test',
    connectTimeout : 30000
});
